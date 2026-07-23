"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, RefreshCw, X, Minimize2 } from "lucide-react";

export default function CyberTerminal({ onTriggerSlash }) {
  const [history, setHistory] = useState([
    { text: "Type 'help' to view available commands.", type: "system" },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef(null);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `> ${inputVal}`, type: "user" }];

    switch (cmd) {
      case "help":
        newHistory.push({
          text: "COMMANDS:\n  whoami    - Show profile overview\n  skills    - List tech stack & cybersec skills\n  slash     - Execute Katana Sword Slash animation\n  clear     - Clear terminal log",
          type: "output",
        });
        break;
      case "whoami":
        newHistory.push({
          text: "NAME: Azka Bariqlana\nROLE: Fullstack Web Developer & Cybersecurity Enthusiast\nSTATUS: Active & Available for Opportunities\nLOCATION: Indonesia",
          type: "output",
        });
        break;
      case "skills":
        newHistory.push({
          text: "STACK:\n  [Web]: React, Next.js, Angular, Tailwind CSS, Node.js, REST APIs\n  [Network & Security]: MikroTik RouterOS, Fiber Optics, Wireshark, Pentesting\n  [Tools]: Git, GitHub, Firebase, Flutter",
          type: "output",
        });
        break;
      case "slash":
        newHistory.push({
          text: "EXECUTING KATANA SWORD SLASH PROTOCOL...",
          type: "system",
        });
        if (onTriggerSlash) onTriggerSlash();
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        newHistory.push({
          text: `Command not recognized: '${cmd}'. Type 'help' for command list.`,
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
    <div className="w-full bg-[#161622]/90 backdrop-blur-md border border-[#bd93f9]/30 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(189,147,249,0.15)] font-mono text-xs md:text-sm my-6 transition-all duration-300">
      {/* Terminal Titlebar */}
      <div className="bg-[#1e1e2e] px-4 py-2.5 flex items-center justify-between border-b border-[#bd93f9]/20">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-[#ff79c6]" />
          <span className="font-bold text-[#f8f8f2] tracking-wider text-xs">
            CYBER_TERMINAL // AZKA_SHELL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTriggerSlash && onTriggerSlash()}
            className="flex items-center gap-1 bg-[#ff5555]/20 hover:bg-[#ff5555]/40 text-[#ff5555] border border-[#ff5555]/40 px-2 py-0.5 rounded text-[11px] font-bold transition-all"
            title="Replay Sword Slash Animation"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>KATANA SLASH</span>
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-[#6272a4] hover:text-[#f8f8f2] p-1"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output */}
      {!isMinimized && (
        <div className="p-4 max-h-56 overflow-y-auto space-y-2 text-[#f8f8f2]">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${item.type === "system"
                  ? "text-[#bd93f9]"
                  : item.type === "user"
                    ? "text-[#8be9fd] font-bold"
                    : item.type === "error"
                      ? "text-[#ff5555]"
                      : "text-[#50fa7b]"
                }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />

          {/* Command Prompt */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-3 pt-2 border-t border-[#bd93f9]/10">
            <span className="text-[#ff79c6] font-bold">azka@cybersec:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'whoami', 'skills', or 'slash'..."
              className="flex-1 bg-transparent text-[#f8f8f2] focus:outline-none placeholder-[#6272a4]/60 font-mono text-xs md:text-sm"
            />
          </form>
        </div>
      )}
    </div>
  );
}
