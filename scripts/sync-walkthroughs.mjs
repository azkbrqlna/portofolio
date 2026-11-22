import fs from "fs";
import path from "path";
import os from "os";
import { execSync } from "child_process";

const OUTPUT_PATH = "src/app/data/walkthroughs.json";

function normalizeWalkthroughContent(content) {
  if (!content) return "";
  const wtMatch = content.match(/###\s*Walkthrough\b([\s\S]*?)(?=(?:\r?\n)\s*---|\r?\n###\s*Credentials|$)/i);
  if (!wtMatch) return content;

  const originalSection = wtMatch[1];
  let currentStep = 1;
  let inCodeBlock = false;
  const lines = originalSection.split("\n");
  const normalizedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      normalizedLines.push(line);
      continue;
    }
    if (inCodeBlock) {
      normalizedLines.push(line);
      continue;
    }

    const numMatch = line.match(/^(\d+)\.\s+/);
    if (numMatch) {
      const stepNum = parseInt(numMatch[1], 10);
      currentStep = stepNum + 1;
      normalizedLines.push(line);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const prevNonEmpty = normalizedLines.slice().reverse().find((l) => l.trim().length > 0);
      const isSubBullet =
        prevNonEmpty &&
        (prevNonEmpty.trim().endsWith(":") || /^\s+[-*]\s+/.test(prevNonEmpty));

      if (isSubBullet) {
        normalizedLines.push("  " + line);
      } else {
        normalizedLines.push(line.replace(/^[-*]\s+/, `${currentStep}.  `));
        currentStep++;
      }
      continue;
    }

    normalizedLines.push(line);
  }

  return content.replace(originalSection, normalizedLines.join("\n"));
}

function parseMarkdownWalkthrough(relPath, text) {
  const normalizedPath = relPath.replace(/\\/g, "/");
  const parts = normalizedPath.split("/");
  const category = parts[0];
  const categoryLower = category.toLowerCase();

  const fromMatch = normalizedPath.match(/(\d+)\s*(?:-|to)/i);
  const levelFrom = fromMatch ? parseInt(fromMatch[1], 10) : 0;
  const toMatch = normalizedPath.match(/to[\s-]+[a-zA-Z]*(\d+)/i);
  const levelTo = toMatch ? parseInt(toMatch[1], 10) : levelFrom + 1;

  const titleMatch = text.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : `${category} Level ${levelFrom} → Level ${levelTo}`;

  let challengeUrl = "";
  const urlMatch = text.match(/\*\*URL:\s*([^\*\n\r]+)\*\*/i) || text.match(/URL:\s*(https?:\/\/[^\s\*\)\<]+)/i);
  if (urlMatch) {
    challengeUrl = urlMatch[1].trim();
  } else if (categoryLower === "natas") {
    challengeUrl = `http://natas${levelFrom}.natas.labs.overthewire.org/`;
  } else if (categoryLower === "bandit") {
    challengeUrl = `https://overthewire.org/wargames/bandit/bandit${levelFrom}.html`;
  }

  const userMatch = text.match(/\*\*Username:\*\*\s*`?([^`\*\n\r]+)`?/i) || text.match(/username:\s*`?([^`\*\n\r]+)`?/i);
  const username = userMatch ? userMatch[1].trim() : `${categoryLower}${levelFrom}`;

  const passMatch = text.match(/\*\*Password:\*\*\s*`?([^`\*\n\r]+)`?/i) || text.match(/password:\s*`?([^`\*\n\r]+)`?/i);
  let password = passMatch ? passMatch[1].trim() : null;
  if (!password && levelFrom === 0) {
    password = `${categoryLower}0`;
  }

  // Rewrite relative image paths
  let normalizedMarkdown = text.replace(
    /!\[(.*?)\]\(images\/([^\)]+)\)/g,
    `![$1](https://raw.githubusercontent.com/azkbrqlna/OverTheWire-Walkthrough/main/${category}/images/$2)`
  );
  normalizedMarkdown = normalizeWalkthroughContent(normalizedMarkdown);

  const encodedPath = parts.map(encodeURIComponent).join("/");

  return {
    id: `${categoryLower}-${levelFrom}`,
    slug: `${categoryLower}${levelFrom}-to-${categoryLower}${levelTo}`,
    title,
    series: "OverTheWire",
    category,
    levelFrom,
    levelTo,
    challengeUrl,
    username,
    password,
    sourceFile: normalizedPath,
    githubUrl: `https://github.com/azkbrqlna/OverTheWire-Walkthrough/blob/main/${encodedPath}`,
    content: normalizedMarkdown,
  };
}

async function syncViaArchive() {
  console.log("Fetching repository archive via curl/tar fallback...");
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "otw-sync-"));
  try {
    const isWindows = process.platform === "win32";
    const curlCmd = isWindows ? "curl.exe" : "curl";
    execSync(`${curlCmd} -sL https://github.com/azkbrqlna/OverTheWire-Walkthrough/archive/refs/heads/main.tar.gz | tar -xz -C "${tmpDir}"`);

    const extractedDirs = fs.readdirSync(tmpDir);
    const rootDir = path.join(tmpDir, extractedDirs[0]);

    function getMdFiles(dir) {
      let results = [];
      const list = fs.readdirSync(dir);
      for (const item of list) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          results = results.concat(getMdFiles(full));
        } else if (item.endsWith(".md") && item.toLowerCase() !== "readme.md") {
          results.push(path.relative(rootDir, full));
        }
      }
      return results;
    }

    const mdFiles = getMdFiles(rootDir);
    const parsed = [];
    for (const rel of mdFiles) {
      const full = path.join(rootDir, rel);
      const text = fs.readFileSync(full, "utf-8");
      parsed.push(parseMarkdownWalkthrough(rel, text));
    }
    return parsed;
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch {}
  }
}

async function syncViaGitHubApi() {
  console.log("Fetching repository tree from GitHub API...");
  const headers = {
    "User-Agent": "Portfolio-Sync-Agent",
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  };

  const rawTreeRes = await fetch("https://api.github.com/repos/azkbrqlna/OverTheWire-Walkthrough/git/trees/main?recursive=1", {
    headers,
  });

  if (!rawTreeRes.ok) {
    throw new Error(`GitHub API error: ${rawTreeRes.status} ${rawTreeRes.statusText}`);
  }

  const treeData = await rawTreeRes.json();
  const mdFiles = (treeData.tree || []).filter(
    (f) => f.path.endsWith(".md") && !f.path.toLowerCase().endsWith("readme.md") && f.path.includes("/")
  );

  const parsedWalkthroughs = [];

  for (const file of mdFiles) {
    const encodedPath = file.path.split("/").map(encodeURIComponent).join("/");
    const rawUrl = `https://raw.githubusercontent.com/azkbrqlna/OverTheWire-Walkthrough/main/${encodedPath}`;
    const res = await fetch(rawUrl, { headers });
    if (!res.ok) {
      console.warn(`Failed to fetch ${rawUrl}: ${res.status}`);
      continue;
    }
    const text = await res.text();
    parsedWalkthroughs.push(parseMarkdownWalkthrough(file.path, text));
  }

  return parsedWalkthroughs;
}

async function syncWalkthroughs() {
  let parsedWalkthroughs = [];

  try {
    parsedWalkthroughs = await syncViaGitHubApi();
  } catch (apiErr) {
    console.warn(`GitHub API notice (${apiErr.message}). Using repository archive fallback...`);
    parsedWalkthroughs = await syncViaArchive();
  }

  parsedWalkthroughs.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.levelFrom - b.levelFrom;
  });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(parsedWalkthroughs, null, 2), "utf-8");
  console.log(`Synced ${parsedWalkthroughs.length} walkthroughs across categories into ${OUTPUT_PATH} successfully!`);
}

syncWalkthroughs().catch((err) => {
  console.warn("Sync warning:", err.message);
  if (fs.existsSync(OUTPUT_PATH)) {
    console.warn("Using existing cached walkthroughs.json to continue build.");
    process.exit(0);
  }
  console.error("Sync failed and no cached file found.");
  process.exit(1);
});
