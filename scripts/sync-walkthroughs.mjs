import fs from "fs";

async function syncWalkthroughs() {
  console.log("Fetching repository tree from GitHub...");
  const rawTreeRes = await fetch("https://api.github.com/repos/azkbrqlna/OverTheWire-Walkthrough/git/trees/main?recursive=1", {
    headers: {
      "User-Agent": "Portfolio-Sync-Agent"
    }
  });

  if (!rawTreeRes.ok) {
    throw new Error(`GitHub API error: ${rawTreeRes.status} ${rawTreeRes.statusText}`);
  }

  const treeData = await rawTreeRes.json();
  const mdFiles = (treeData.tree || []).filter(
    (f) => f.path.startsWith("Natas/") && f.path.endsWith(".md")
  );

  function extractLevelNumber(path) {
    const match = path.match(/natas(\d+)-to/i);
    return match ? parseInt(match[1], 10) : 0;
  }

  mdFiles.sort((a, b) => extractLevelNumber(a.path) - extractLevelNumber(b.path));

  const parsedWalkthroughs = [];

  for (const file of mdFiles) {
    const encodedPath = file.path.split("/").map(encodeURIComponent).join("/");
    const rawUrl = `https://raw.githubusercontent.com/azkbrqlna/OverTheWire-Walkthrough/main/${encodedPath}`;
    const res = await fetch(rawUrl);
    if (!res.ok) {
      console.warn(`Failed to fetch ${rawUrl}: ${res.status}`);
      continue;
    }
    const text = await res.text();

    const levelFrom = extractLevelNumber(file.path);
    const toMatch = file.path.match(/to[\s-]+natas(\d+)/i);
    const levelTo = toMatch ? parseInt(toMatch[1], 10) : levelFrom + 1;

    const titleMatch = text.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : `Natas Level ${levelFrom} → Level ${levelTo}`;

    const urlMatch = text.match(/\*\*URL:\s*([^\*\n\r]+)\*\*/i) || text.match(/URL:\s*(https?:\/\/[^\s\*\)\<]+)/i);
    const challengeUrl = urlMatch ? urlMatch[1].trim() : `http://natas${levelFrom}.natas.labs.overthewire.org/`;

    const userMatch = text.match(/\*\*Username:\*\*\s*`?([^`\*\n\r]+)`?/i);
    const username = userMatch ? userMatch[1].trim() : `natas${levelFrom}`;

    const passMatch = text.match(/\*\*Password:\*\*\s*`?([^`\*\n\r]+)`?/i);
    const password = passMatch ? passMatch[1].trim() : null;

    // Rewrite relative image paths
    const normalizedMarkdown = text.replace(
      /!\[(.*?)\]\(images\/([^\)]+)\)/g,
      "![$1](https://raw.githubusercontent.com/azkbrqlna/OverTheWire-Walkthrough/main/Natas/images/$2)"
    );

    parsedWalkthroughs.push({
      id: `natas-${levelFrom}`,
      slug: `natas-${levelFrom}-to-natas-${levelTo}`,
      title,
      series: "OverTheWire",
      category: "Natas",
      levelFrom,
      levelTo,
      challengeUrl,
      username,
      password,
      sourceFile: file.path,
      githubUrl: `https://github.com/azkbrqlna/OverTheWire-Walkthrough/blob/main/${encodedPath}`,
      content: normalizedMarkdown,
    });
  }

  fs.writeFileSync("src/app/data/walkthroughs.json", JSON.stringify(parsedWalkthroughs, null, 2), "utf-8");
  console.log(`Synced ${parsedWalkthroughs.length} walkthroughs into src/app/data/walkthroughs.json successfully!`);
}

syncWalkthroughs().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
