import walkthroughs from "./walkthroughs.json";

// Map real Natas walkthroughs into file tree nodes
const natasFiles = walkthroughs.map((w) => {
  const fileName = w.sourceFile ? w.sourceFile.split("/").pop() : `${w.id}.md`;
  return {
    id: w.id,
    name: fileName,
    type: "file",
    path: `OverTheWire/natas/${fileName}`,
    walkthrough: w,
  };
});

export const LABS_TREE = [
  {
    id: "overthewire",
    name: "OverTheWire",
    type: "folder",
    description: "Wargames teaching basic to advanced security concepts.",
    children: [
      {
        id: "otw-natas",
        name: "natas",
        type: "folder",
        description: "Server-side web security challenges (19 completed levels).",
        children: natasFiles,
      },
      {
        id: "otw-bandit",
        name: "bandit",
        type: "folder",
        status: "in-progress",
        description: "Linux command line, SSH basics, and security fundamentals.",
        children: [
          {
            id: "otw-bandit-readme",
            name: "README.md",
            type: "file",
            path: "OverTheWire/bandit/README.md",
            walkthrough: {
              id: "bandit-readme",
              title: "Bandit Wargame Walkthroughs",
              series: "OverTheWire",
              category: "Bandit",
              challengeUrl: "https://overthewire.org/wargames/bandit/",
              username: "bandit0",
              password: "bandit0",
              githubUrl: "https://github.com/azkbrqlna/OverTheWire-Walkthrough",
              content: `# Bandit Wargame Walkthroughs

The **Bandit** wargame is aimed at absolute beginners. It teaches the basics needed to be able to play other wargames.

### Target Information
- **Host:** \`bandit.labs.overthewire.org\`
- **Port:** \`2220\`
- **Default User:** \`bandit0\`
- **Default Password:** \`bandit0\`

### Status
> **In Progress / Writing...**  
> Solutions and writeups are currently being documented for synchronization.

### Planned Levels
1. Level 0 → Level 1: SSH Login basics
2. Level 1 → Level 2: Dashed filenames (\`cat ./-filename\`)
3. Level 2 → Level 3: Spaces in filenames
4. Level 3 → Level 4: Hidden files (\`ls -la\`)
5. Level 4 → Level 5: Human-readable file types (\`file *\`)
6. Level 5 → Level 6: Finding specific files by size and properties (\`find\`)
7. Level 6 → Level 7: Searching by owner, group, and permissions
`,
            },
          },
        ],
      },
      {
        id: "otw-leviathan",
        name: "leviathan",
        type: "folder",
        status: "planned",
        description: "Linux binary inspection, privilege escalation, and logic flaws.",
        children: [
          {
            id: "otw-leviathan-readme",
            name: "README.md",
            type: "file",
            path: "OverTheWire/leviathan/README.md",
            walkthrough: {
              id: "leviathan-readme",
              title: "Leviathan Wargame Walkthroughs",
              series: "OverTheWire",
              category: "Leviathan",
              challengeUrl: "https://overthewire.org/wargames/leviathan/",
              username: "leviathan0",
              password: "leviathan0",
              content: `# Leviathan Wargame Walkthroughs

The **Leviathan** wargame has no specific background knowledge required, but basic Linux command line, binary inspection (ltrace, strace, gdb), and privilege escalation techniques are helpful.

### Target Information
- **Host:** \`leviathan.labs.overthewire.org\`
- **Port:** \`2223\`
- **Status:** Queued / Planned
`,
            },
          },
        ],
      },
    ],
  },
  {
    id: "hackthebox",
    name: "HackTheBox",
    type: "folder",
    description: "Penetration testing labs and Capture The Flag machines.",
    children: [
      {
        id: "htb-machines",
        name: "machines",
        type: "folder",
        status: "planned",
        children: [
          {
            id: "htb-machines-readme",
            name: "README.md",
            type: "file",
            path: "HackTheBox/machines/README.md",
            walkthrough: {
              id: "htb-machines-readme",
              title: "HackTheBox Machine Writeups",
              series: "HackTheBox",
              category: "Machines",
              content: `# HackTheBox Machine Writeups

Collection of walkthroughs for retired and active HackTheBox machines covering:
- Initial enumeration (Nmap, Gobuster, Nikto)
- Web exploitation (SQLi, SSTI, LFI/RFI, Command Injection)
- Linux / Windows privilege escalation (Capabilities, SUID, SeImpersonate, AD attacks)

*Writeups are uploaded once machines are officially retired as per HTB rules.*
`,
            },
          },
        ],
      },
      {
        id: "htb-challenges",
        name: "challenges",
        type: "folder",
        status: "planned",
        children: [
          {
            id: "htb-challenges-readme",
            name: "README.md",
            type: "file",
            path: "HackTheBox/challenges/README.md",
            walkthrough: {
              id: "htb-challenges-readme",
              title: "HackTheBox CTF Challenges",
              series: "HackTheBox",
              category: "Challenges",
              content: `# HackTheBox CTF Challenges

Writeups for standalone cybersecurity challenges categorized by domain:
- **Web**: JWT bypasses, prototype pollution, deserialization
- **Crypto**: RSA weaknesses, custom ciphers, padding oracles
- **Forensics**: PCAP traffic analysis, memory dumps, steganography
- **Reverse Engineering**: ELF/PE binaries, deobfuscation
`,
            },
          },
        ],
      },
    ],
  },
  {
    id: "vulnhub",
    name: "VulnHub",
    type: "folder",
    status: "planned",
    description: "Vulnerable boot-to-root virtual machines for offline practice.",
    children: [
      {
        id: "vulnhub-readme",
        name: "README.md",
        type: "file",
        path: "VulnHub/README.md",
        walkthrough: {
          id: "vulnhub-readme",
          title: "VulnHub VM Walkthroughs",
          series: "VulnHub",
          category: "Boot2Root",
          content: `# VulnHub Boot2Root Walkthroughs

Documentation and methodology for vulnerable virtual machine targets:
- Network discovery and port scanning (\`arp-scan\`, \`nmap\`)
- Vulnerability research and exploit chaining
- Post-exploitation and root flag acquisition
`,
        },
      },
    ],
  },
  {
    id: "portswigger",
    name: "PortSwigger",
    type: "folder",
    status: "planned",
    description: "Web Security Academy lab walkthroughs and exploit scripts.",
    children: [
      {
        id: "portswigger-readme",
        name: "README.md",
        type: "file",
        path: "PortSwigger/README.md",
        walkthrough: {
          id: "portswigger-readme",
          title: "PortSwigger Web Security Academy",
          series: "PortSwigger",
          category: "Web Security",
          content: `# PortSwigger Web Security Academy Labs

Walkthroughs and practical exploit scripts for PortSwigger Academy:
- SQL Injection (Union attacks, blind boolean & time-based)
- Cross-Site Scripting (Reflected, Stored, DOM-based)
- Server-Side Request Forgery (SSRF)
- Authentication & OAuth vulnerabilities
`,
        },
      },
    ],
  },
];

/**
 * Recursively find all files in the tree
 */
export function getAllFiles(nodes = LABS_TREE) {
  let files = [];
  for (const node of nodes) {
    if (node.type === "file") {
      files.push(node);
    } else if (node.children) {
      files = files.concat(getAllFiles(node.children));
    }
  }
  return files;
}

/**
 * Find file node by path or id
 */
export function findFileByPathOrId(identifier, nodes = LABS_TREE) {
  if (!identifier) return null;
  for (const node of nodes) {
    if (node.type === "file") {
      if (node.path === identifier || node.id === identifier) {
        return node;
      }
    } else if (node.children) {
      const found = findFileByPathOrId(identifier, node.children);
      if (found) return found;
    }
  }
  return null;
}
