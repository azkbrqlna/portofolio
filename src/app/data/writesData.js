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

export const NATAS_ITEMS = walkthroughs.map((w) => {
  return {
    id: w.id,
    slug: w.slug,
    name: `natas${w.levelFrom} → natas${w.levelTo}`,
    title: w.title,
    levelFrom: w.levelFrom,
    levelTo: w.levelTo,
    tag: "Natas",
    description:
      levelSummaries[w.levelFrom] || "Step-by-step wargame walkthrough.",
    challengeUrl: w.challengeUrl,
    username: w.username,
    password: w.password,
    githubUrl: w.githubUrl,
    content: w.content,
  };
});

export const WRITES_PLATFORMS = [
  {
    id: "overthewire",
    name: "OverTheWire",
    tag: "Wargames",
    badge: "19 Walkthroughs",
    count: 19,
    description:
      "Server-side web security wargames (Natas) covering HTML source analysis, cookie tampering, LFI, SQL Injection, and command execution across 19 documented levels.",
    folders: [
      {
        id: "natas",
        name: "natas",
        title: "Natas (Web Security)",
        tag: "19 Levels",
        status: "Completed",
        description:
          "Server-side web security wargame exploring HTML source comments, cookie tampering, LFI, SQL Injection, and blind command execution.",
        items: NATAS_ITEMS,
      },
    ],
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
