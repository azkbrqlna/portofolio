"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InteractiveCmd({ onTriggerSlash }) {
  const router = useRouter();
  const bottomRef = useRef(null);

  const welcomeAscii = `
 __        _______ _     ____ ___  __  __ _____ 
 \\ \\      / / ____| |   / ___/ _ \\|  \\/  | ____|
  \\ \\ /\\ / /|  _| | |  | |  | | | | |\\/| |  _|  
   \\ V  V / | |___| |__| |__| |_| | |  | | |___ 
    \\_/\\_/  |_____|_____\\____\\___/|_|  |_|_____|
`.trim();

  const [history, setHistory] = useState([
    { text: "Microsoft Windows [Version 10.0.22631]", type: "muted" },
    { text: "(c) Microsoft Corporation. All rights reserved.\n", type: "muted" },
    { text: welcomeAscii + "\n", type: "accent" },
    { text: "AZKBRQLNA // FULLSTACK & CYBERSECURITY SYS_OP", type: "info" },
    { text: "Type 'help' to list interactive commands.\n", type: "muted" },
  ]);

  const [inputVal, setInputVal] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `C:\\Users\\AZKBRQLNA> ${inputVal}`, type: "prompt" }];

    switch (cmd) {
      case "help":
        newHistory.push({
          text: "AVAILABLE COMMANDS:\n  whoami     - Display Operator Profile\n  skills     - List Tech Stack & Security Matrix\n  projects   - Navigate to Projects Showcase\n  experience - View Career History\n  slash      - Trigger Katana Slash Animation\n  cls        - Clear Terminal Output",
          type: "output",
        });
        break;

      case "whoami":
        newHistory.push({
          text: "OPERATOR: Azka Bariqlana\nROLE    : Fullstack Developer & Cybersecurity Trainee\nFOCUS   : Next.js, React, Node.js, MikroTik, Network Security",
          type: "output",
        });
        break;

      case "skills":
        newHistory.push({
          text: "TECH MATRIX:\n  [Web]     : Next.js 15, React 19, Angular, Tailwind CSS\n  [Network] : MikroTik RouterOS, Fiber Optics, Troubleshooting\n  [Tools]   : Node.js, Firebase, Git, Flutter",
          type: "output",
        });
        break;

      case "projects":
        newHistory.push({
          text: "Redirecting to /projects ...",
          type: "accent",
        });
        setTimeout(() => router.push("/projects"), 600);
        break;

      case "experience":
        newHistory.push({
          text: "Redirecting to /experience ...",
          type: "accent",
        });
        setTimeout(() => router.push("/experience"), 600);
        break;

      case "slash":
        newHistory.push({
          text: "EXECUTING KATANA NEON SLASH PROTOCOL...",
          type: "accent",
        });
        if (onTriggerSlash) onTriggerSlash();
        break;

      case "cls":
      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          text: `'${cmd}' is not recognized as an internal or external command. Type 'help' for command list.`,
          type: "error",
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full bg-[#0c0c12] border border-white/20 rounded-lg overflow-hidden shadow-2xl font-mono text-xs select-text">
      {/* Titlebar */}
      <div className="bg-[#181822] px-3 py-1.5 border-b border-white/10 flex items-center justify-between select-none">
        <div className="flex items-center gap-2 text-white/70 text-[11px]">
          <Terminal className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>Command Prompt - azka@sys_op</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-white/50">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5555]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffb86c]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#50fa7b]/80 inline-block" />
        </div>
      </div>

      {/* Body & Console Stream */}
      <div className="p-3.5 max-h-64 overflow-y-auto space-y-1 text-white/90 leading-relaxed font-mono">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap ${
              item.type === "prompt"
                ? "text-[#ffd700] font-bold"
                : item.type === "accent"
                ? "text-[#ffd700]"
                : item.type === "info"
                ? "text-white/90"
                : item.type === "muted"
                ? "text-white/40 text-[10px]"
                : item.type === "error"
                ? "text-[#ff5555]"
                : "text-[#50fa7b]"
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />

        {/* Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-1.5 pt-1 border-t border-white/10">
          <span className="text-[#ffd700] font-bold shrink-0">C:\Users\AZKBRQLNA&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help', 'whoami', 'skills', 'slash'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-white/30 font-mono text-xs"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
