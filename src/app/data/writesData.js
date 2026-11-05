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
      "Server-side web security (Natas), Linux command-line wargames (Bandit), and binary exploitation challenges across 19+ documented levels.",
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
      {
        id: "bandit",
        name: "bandit",
        title: "Bandit (Linux Basics)",
        tag: "WIP",
        status: "In Progress",
        description:
          "Linux command line fundamentals, SSH connection on port 2220, dashed filenames, hidden directories, and file permissions.",
        items: [
          {
            id: "bandit-0",
            slug: "bandit0-to-bandit1",
            name: "bandit0 → bandit1",
            title: "Bandit Level 0 → Level 1",
            tag: "Bandit",
            description:
              "SSH connection commands on port 2220 using default bandit0 credentials and reading readme flag.",
            challengeUrl: "https://overthewire.org/wargames/bandit/bandit0.html",
            username: "bandit0",
            password: "bandit0",
            content: `# Bandit Level 0 → Level 1

### Challenge Information
- **Host:** \`bandit.labs.overthewire.org\`
- **Port:** \`2220\`
- **User:** \`bandit0\`
- **Pass:** \`bandit0\`

### Walkthrough
1. Connect via SSH:
\`\`\`bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
\`\`\`
2. Read the credentials in the home directory:
\`\`\`bash
cat readme
\`\`\`
`,
          },
        ],
      },
      {
        id: "leviathan",
        name: "leviathan",
        title: "Leviathan (Privilege Escalation)",
        tag: "Planned",
        status: "Planned",
        description:
          "Binary inspection, dynamic analysis with ltrace/strace, and Linux logic flaws.",
        items: [],
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

  // fallback across all items in platform
  for (const folder of platform.folders) {
    const item = folder.items.find(
      (i) => i.id === itemId || i.slug === itemId
    );
    if (item) return { platform, folder, item };
  }

  return null;
}
