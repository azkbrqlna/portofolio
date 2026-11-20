import walkthroughs from "./walkthroughs.json";

const levelSummaries = {
  0: "Inspect HTML comments in raw source to recover next level credentials.",
  1: "Bypass right-click context menu restrictions using browser shortcuts.",
  2: "Directory traversal and hidden file discovery via files.php.",
  3: "Reconnaissance with robots.txt to discover hidden secret directories.",
  4: "HTTP Referer header spoofing to simulate internal authorized origin.",
  5: "Cookie tampering by setting loggedin=1 to bypass access control.",
  6: "Source code analysis and secret file inclusion to retrieve the secret token.",
  7: "Local File Inclusion (LFI) in PHP to read /etc/natas_webpass/natas8.",
  8: "Reverse-engineering PHP secret obfuscation (base64, reverse, bin2hex).",
  9: "Command Injection in PHP passthru() using unsanitized grep pattern.",
  10: "Filtered Command Injection bypass avoiding semicolons and pipes.",
  11: "XOR symmetric encryption key recovery through cookie tampering.",
  12: "Unrestricted file upload bypassing client-side extension filters.",
  13: "Magic bytes image file signature bypass for PHP code execution.",
  14: "SQL Injection authentication bypass using boolean true condition.",
  15: "Blind SQL Injection character extraction using boolean binary search.",
  16: "Blind Command Injection using subshell substitution with grep.",
  17: "Time-based Blind SQL Injection using sleep() delay verification.",
  18: "Session ID brute-force enumeration on administrative accounts.",
};

const banditSummaries = {
  0: "Log in via SSH and read the readme file in the home directory.",
  1: "Read a file named '-' using relative path syntax to prevent stdin interpretation.",
  2: "Read a file with spaces in its name using quotes or backslash escaping.",
  3: "Discover hidden files starting with a dot inside the inhere directory.",
  4: "Identify ASCII human-readable text file among multiple binary files using the file command.",
  5: "Locate human-readable, non-executable, 1033-byte file using find command parameters.",
};

const categoryFolderMeta = {
  bandit: {
    id: "bandit",
    name: "bandit",
    title: "Bandit (Linux Basics)",
    status: "In Progress",
    description:
      "Linux command line and basic administration wargame covering SSH, navigation, file reading, compression, and basic privilege escalation.",
  },
  natas: {
    id: "natas",
    name: "natas",
    title: "Natas (Web Security)",
    status: "In Progress",
    description:
      "Server-side web security wargame exploring HTML source comments, cookie tampering, LFI, SQL Injection, and blind command execution.",
  },
};

// Group items by category dynamically
const itemsByCategory = {};
for (const w of walkthroughs) {
  const cat = (w.category || "General").toLowerCase();
  if (!itemsByCategory[cat]) {
    itemsByCategory[cat] = [];
  }

  let description = "Step-by-step wargame walkthrough.";
  if (cat === "natas" && levelSummaries[w.levelFrom]) {
    description = levelSummaries[w.levelFrom];
  } else if (cat === "bandit" && banditSummaries[w.levelFrom]) {
    description = banditSummaries[w.levelFrom];
  }

  itemsByCategory[cat].push({
    id: w.id,
    slug: w.slug,
    name: `${cat}${w.levelFrom} → ${cat}${w.levelTo}`,
    title: w.title,
    levelFrom: w.levelFrom,
    levelTo: w.levelTo,
    tag: w.category || "Wargame",
    description,
    challengeUrl: w.challengeUrl,
    username: w.username,
    password: w.password,
    githubUrl: w.githubUrl,
    content: w.content,
  });
}

// Order folders: Bandit first, then Natas, then any other category
const categoryOrder = ["bandit", "natas"];
const allCategories = Array.from(
  new Set([...categoryOrder, ...Object.keys(itemsByCategory)])
).filter((cat) => itemsByCategory[cat] && itemsByCategory[cat].length > 0);

const otwFolders = allCategories.map((cat) => {
  const items = itemsByCategory[cat] || [];
  const meta = categoryFolderMeta[cat] || {
    id: cat,
    name: cat,
    title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Wargame`,
    status: "In Progress",
    description: `${cat} wargame challenges and walkthroughs.`,
  };

  return {
    ...meta,
    tag: `${items.length} Levels`,
    items,
  };
});

export const NATAS_ITEMS = itemsByCategory["natas"] || [];
export const BANDIT_ITEMS = itemsByCategory["bandit"] || [];

export const WRITES_PLATFORMS = [
  {
    id: "overthewire",
    name: "OverTheWire",
    tag: "Wargames",
    badge: `${walkthroughs.length} Walkthroughs`,
    count: walkthroughs.length,
    description:
      `Server-side web security & Linux wargames (Bandit, Natas) covering shell navigation, permissions, LFI, SQL Injection, and command execution across ${walkthroughs.length} documented levels.`,
    folders: otwFolders,
  },
];

export function getPlatformById(id) {
  return WRITES_PLATFORMS.find((p) => p.id === id) || null;
}

export function getWalkthroughItem(platformId, folderId, itemId) {
  const platform = getPlatformById(platformId);
  if (!platform) return null;

  for (const folder of platform.folders) {
    if (!folderId || folder.id === folderId) {
      const item = folder.items.find(
        (i) => i.id === itemId || i.slug === itemId
      );
      if (item) return { platform, folder, item };
    }
  }

  for (const folder of platform.folders) {
    const item = folder.items.find(
      (i) => i.id === itemId || i.slug === itemId
    );
    if (item) return { platform, folder, item };
  }

  return null;
}
