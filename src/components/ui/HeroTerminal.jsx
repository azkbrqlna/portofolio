"use client";

import React, { useEffect, useState, useRef } from "react";
import { Terminal } from "lucide-react";

// ── Typewriter lines shown in terminal ──────────────────────────
const LINES = [
  { prefix: "$ ", text: "whoami", color: "#ffd700" },
  { prefix: "  ", text: "Azka Bariqlana · Fullstack Developer", color: "#e0e0e0" },
  { prefix: "$ ", text: "cat skills.txt", color: "#ffd700" },
  { prefix: "  ", text: "React · Next.js · Node.js · Laravel · MySQL", color: "#a0e0a0" },
  { prefix: "$ ", text: "cat interests.txt", color: "#ffd700" },
  { prefix: "  ", text: "Cybersecurity · System Design · Open Source", color: "#a0c8ff" },
  { prefix: "$ ", text: "echo $STATUS", color: "#ffd700" },
  { prefix: "  ", text: "Available for opportunities · Open to collaborate", color: "#e0e0e0" },
  { prefix: "$ ", text: "_", color: "#ffd700" },
];





export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineText, setCurrentLineText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [blinkCursor, setBlinkCursor] = useState(true);
  const terminalRef = useRef(null);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlinkCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter
  useEffect(() => {
    if (!isTyping) return;
    if (lineIndex >= LINES.length) {
      setIsTyping(false);
      return;
    }

    const line = LINES[lineIndex];
    const fullText = line.prefix + line.text;

    if (charIndex < fullText.length) {
      const speed = line.text === "_" ? 0 : fullText[charIndex] === " " ? 40 : 45;
      const id = setTimeout(() => {
        setCurrentLineText(fullText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(id);
    } else {
      // Line done
      const pauseMs = line.prefix === "  " ? 180 : 350;
      const id = setTimeout(() => {
        setVisibleLines((prev) => [...prev, { ...line, rendered: fullText }]);
        setCurrentLineText("");
        setCharIndex(0);
        setLineIndex((l) => l + 1);
      }, pauseMs);
      return () => clearTimeout(id);
    }
  }, [isTyping, lineIndex, charIndex]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines, currentLineText]);

  return (
    <div className="flex flex-col gap-4 w-full h-full">

      {/* ── Terminal Window ─────────────────────────────── */}
      <div className="relative border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md flex-1 min-h-[220px]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/[0.03]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
          </div>
          <div className="flex items-center gap-2 ml-2">
            <Terminal className="w-3 h-3 text-white/30" />
            <span className="font-mono text-[10px] text-white/30 tracking-widest">
              bash — azka@portfolio:~
            </span>
          </div>
          {/* Live pulse */}
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
            <span className="font-mono text-[9px] text-white/25 tracking-widest">LIVE</span>
          </div>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          className="p-4 font-mono text-[12px] leading-6 space-y-0 overflow-y-auto max-h-[200px] scrollbar-hide"
        >
          {visibleLines.map((line, i) => (
            <div key={i} style={{ color: line.color }}>
              {line.rendered}
            </div>
          ))}

          {/* Currently typing line */}
          {isTyping && lineIndex < LINES.length && (
            <div style={{ color: LINES[lineIndex]?.color }}>
              {currentLineText}
              <span
                className="inline-block w-[7px] h-[13px] align-middle ml-[1px]"
                style={{
                  background: blinkCursor ? "#ffd700" : "transparent",
                  transition: "background 0.1s",
                }}
              />
            </div>
          )}

          {/* Done — idle cursor */}
          {!isTyping && (
            <div className="text-[#ffd700]">
              ${" "}
              <span
                className="inline-block w-[7px] h-[13px] align-middle ml-[1px]"
                style={{
                  background: blinkCursor ? "#ffd700" : "transparent",
                  transition: "background 0.1s",
                }}
              />
            </div>
          )}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, #ffd700, transparent 70%)" }}
        />
      </div>


    </div>
  );
}
