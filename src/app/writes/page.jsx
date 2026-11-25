"use client";

import React, { useState, useMemo, useEffect, Suspense, useCallback, useRef } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  WRITES_PLATFORMS,
  getPlatformById,
} from "@/app/data/writesData";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  X,
  CornerDownRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e?.stopPropagation();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono tracking-wide bg-white/[0.06] hover:bg-white/[0.12] active:scale-[0.96] text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a853]"
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check size={11} className="text-emerald-400" />
          <span className="text-emerald-400 font-medium">Copied</span>
        </>
      ) : (
        <>
          <Copy size={11} className="opacity-70" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, "");
  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "bash";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="my-5 rounded-lg border border-white/[0.08] bg-[#07080b] overflow-hidden max-w-full">
      <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
          {lang}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[11px] font-mono text-white/40 hover:text-white active:scale-[0.96] transition-all py-0.5 px-1.5 rounded hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a853]"
        >
          {copied ? (
            <>
              <Check size={11} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy size={11} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-3.5 sm:p-4 overflow-x-auto touch-pan-x text-xs font-mono leading-relaxed text-emerald-400/90 selection:bg-emerald-500/20">
        <code>{codeString}</code>
      </pre>
    </div>
  );
}

function ImageLightbox({ src, alt }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="group relative block my-6 rounded-lg overflow-hidden bg-black/40 cursor-zoom-in max-w-full sm:max-w-2xl">
          <img
            src={src}
            alt={alt || "Walkthrough illustration"}
            className="w-full max-h-[440px] object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-mono text-white">
              <Maximize2 size={11} />
              <span>Expand Preview</span>
            </span>
          </span>
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-2 bg-[#0c0d12]/95 border-white/10">
        <DialogHeader className="p-2 border-b border-white/10">
          <DialogTitle className="text-xs font-mono text-white/60 truncate">
            {alt || "Image Preview"}
          </DialogTitle>
        </DialogHeader>
        <div className="p-2 flex items-center justify-center max-h-[80vh] overflow-auto">
          <img
            src={src}
            alt={alt || "Full Preview"}
            className="max-h-[75vh] w-auto object-contain rounded"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

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

function WritesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const platformParam = searchParams.get("platform");
  const levelParam = searchParams.get("level");

  const activePlatform = useMemo(() => {
    if (!platformParam) return null;
    return getPlatformById(platformParam);
  }, [platformParam]);

  const isPlatformView = !!activePlatform;

  const allPlatformItems = useMemo(() => {
    if (!activePlatform) return [];
    return activePlatform.folders.flatMap((f) => f.items);
  }, [activePlatform]);

  const [activeLevelId, setActiveLevelId] = useState(levelParam || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlatformFolderOpen, setIsPlatformFolderOpen] = useState(true);

  // Default: saat awal masuk ke walkthrough, folder 'bandit' terbuka (atau sesuai level aktif dari URL)
  const [openFolderId, setOpenFolderId] = useState(() => {
    if (levelParam?.startsWith("natas")) return "natas";
    if (levelParam?.startsWith("bandit")) return "bandit";
    return "bandit";
  });

  // Sinkronisasi folder yang terbuka jika pengguna berpindah materi (misal via tombol Next/Prev)
  useEffect(() => {
    if (activeLevelId?.startsWith("natas")) {
      setOpenFolderId("natas");
    } else if (activeLevelId?.startsWith("bandit")) {
      setOpenFolderId("bandit");
    }
  }, [activeLevelId]);

  // Single-accordion toggle: ketika natas dibuka, bandit tertutup. Ketika bandit dibuka, natas tertutup.
  const toggleFolder = (folderId) => {
    setOpenFolderId((prev) => (prev === folderId ? null : folderId));
  };

  useEffect(() => {
    if (levelParam && allPlatformItems.some((i) => i.id === levelParam)) {
      setActiveLevelId(levelParam);
    } else if (allPlatformItems.length > 0 && !allPlatformItems.some((i) => i.id === activeLevelId)) {
      setActiveLevelId(allPlatformItems[0].id);
    }
  }, [levelParam, allPlatformItems]);

  const activeItem = useMemo(() => {
    if (!allPlatformItems.length) return null;
    return (
      allPlatformItems.find((i) => i.id === activeLevelId) || allPlatformItems[0]
    );
  }, [allPlatformItems, activeLevelId]);

  // Clean markdown content: strip duplicate leading h1 "# Title" and duplicate URL/User/Pass that are already in the top credentials bar
  const cleanedContent = useMemo(() => {
    if (!activeItem?.content) return "";
    let c = activeItem.content;
    // 1. Remove leading # Title
    c = c.replace(/^#\s+[^\r\n]+(?:\r?\n)+/, "");
    // 2. Remove duplicate URL and starting credentials directly under ### Challenge only
    c = c.replace(
      /(###\s*Challenge\s*(?:\r?\n)+)(?:\s*(?:\*\*)?URL:\s*https?:\/\/[^\s*\r\n]+(?:\*\*)?(?:\r?\n)*)?(?:\s*\*\*Username:\*\*\s*`?[^`\r\n*]+`?(?:\r?\n)*)?(?:\s*\*\*Password:\*\*\s*`?[^`\r\n*]+`?(?:\r?\n)*)?/i,
      "$1"
    );
    // 3. Normalize Walkthrough steps to numbered lists
    c = normalizeWalkthroughContent(c);
    return c.trim();
  }, [activeItem?.content]);

  const currentIndex = allPlatformItems.findIndex((i) => i.id === activeItem?.id);
  const prevItem = currentIndex > 0 ? allPlatformItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < allPlatformItems.length - 1 ? allPlatformItems[currentIndex + 1] : null;

  // Smooth scroll helper to bring the viewport to the top of the material
  const scrollToArticle = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Automatically scroll to the top whenever active level/material changes
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        if (window.__lenis) {
          window.__lenis.scrollTo(0);
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [activeLevelId]);

  // Navigation handlers
  const goToRoot = () => {
    router.push("/writes", { scroll: true });
  };

  const goToPlatform = (platId) => {
    const plat = getPlatformById(platId);
    const firstItem = plat?.folders.flatMap((f) => f.items)[0];
    const initialId = firstItem?.id || "";
    router.push(`/writes?platform=${platId}&level=${initialId}`, {
      scroll: true,
    });
  };

  const goToLevel = (id) => {
    setActiveLevelId(id);
    router.replace(`/writes?platform=${platformParam}&level=${id}`, {
      scroll: false,
    });
    setMobileMenuOpen(false);
    scrollToArticle();
  };

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Markdown custom renderer components
  const markdownComponents = useMemo(
    () => ({
      h1: ({ children }) => (
        <h1
          className="text-2xl sm:text-3xl font-serif font-bold text-[#e8e8f0] tracking-tight mt-6 mb-4"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2
          className="text-xl sm:text-2xl font-serif font-semibold text-[#e8e8f0] tracking-tight mt-8 mb-3 pt-4 border-t border-white/[0.08]"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-sm font-mono font-bold text-[#d4a853] mt-7 mb-2 flex items-center gap-1.5">
          <span>{children}</span>
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xs font-mono font-semibold text-white/80 uppercase mt-4 mb-1.5">
          {children}
        </h4>
      ),
      p: ({ node, children }) => {
        const hasBlockChild = node?.children?.some(
          (child) => child.tagName === "img" || child.tagName === "div"
        );
        if (hasBlockChild) {
          return <div className="my-3 max-w-full">{children}</div>;
        }
        return (
          <p className="text-[15px] sm:text-base text-white/70 leading-relaxed my-3 font-sans break-words first:mt-0">
            {children}
          </p>
        );
      },
      ul: ({ children }) => (
        <ul className="list-disc list-outside pl-5 my-3.5 space-y-1.5 text-[15px] sm:text-base text-white/70 leading-relaxed marker:text-[#d4a853]">
          {children}
        </ul>
      ),
      ol: ({ children, start }) => (
        <ol
          start={start}
          className="my-4 space-y-4 list-decimal list-outside pl-8 sm:pl-9 text-[15px] sm:text-base text-white/75 leading-relaxed marker:text-[#d4a853] marker:font-mono marker:font-bold [&>li>p:first-child]:mt-0"
        >
          {children}
        </ol>
      ),
      li: ({ children }) => <li className="pl-1.5 leading-relaxed">{children}</li>,
      strong: ({ children }) => (
        <strong className="font-semibold text-white">{children}</strong>
      ),
      a: ({ href, children }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d4a853] hover:underline underline-offset-4 font-mono text-xs transition-colors inline-flex items-center gap-1 break-all"
        >
          <span>{children}</span>
          <ExternalLink size={10} className="opacity-70 shrink-0" />
        </a>
      ),
      code: ({ inline, className, children, ...props }) => {
        if (!inline && (className || String(children).includes("\n"))) {
          return <CodeBlock className={className}>{children}</CodeBlock>;
        }
        return (
          <code
            className="px-1.5 py-0.5 rounded text-[12px] sm:text-[12.5px] font-mono text-white bg-white/[0.08] border border-white/10 break-all sm:break-normal"
            {...props}
          >
            {children}
          </code>
        );
      },
      pre: ({ children }) => <>{children}</>,
      img: ({ src, alt }) => <ImageLightbox src={src} alt={alt} />,
      blockquote: ({ children }) => (
        <blockquote className="border-l-2 border-[#d4a853] pl-3.5 sm:pl-4 py-1.5 my-4 bg-white/[0.02] text-white/65 text-xs sm:text-[13px] font-mono rounded-r">
          {children}
        </blockquote>
      ),
      hr: () => <hr className="dotted-divider my-8" />,
    }),
    []
  );

  return (
    <div className="min-h-[100dvh]">
      {/* ══════════════════════════════════════════════════════════ */}
      {/* VIEW A: OVERTHEWIRE FOLDER (LEFT) + MARKDOWN CONTENT (CENTER) */}
      {/* ══════════════════════════════════════════════════════════ */}
      {isPlatformView ? (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-28">
          {/* ── CARDLESS MOBILE STICKY NAV (< lg) ── */}
          <div className="block lg:hidden mb-6 sticky top-12 sm:top-14 z-30 bg-[#0c0d12]/95 backdrop-blur-md border-b border-white/[0.08] -mx-4 sm:-mx-6 px-4 sm:px-6 transition-colors">
            <div className="flex items-center justify-between py-2.5">
              <button
                type="button"
                onClick={goToRoot}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-white/50 hover:text-[#d4a853] active:scale-[0.96] transition-all py-1"
                aria-label="Back to all writes"
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>

              {/* Anti-card breadcrumb trigger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white/90 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a853]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle directory tree navigation"
              >
                <span className="text-[#d4a853] font-semibold">{activeItem?.tag || "Level"}</span>
                <span className="text-white/30">/</span>
                <span className="truncate max-w-[140px] sm:max-w-[200px] text-white font-medium">
                  {activeItem?.name}
                </span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 shrink-0 ${
                    mobileMenuOpen ? "rotate-180 text-[#d4a853]" : "text-white/50"
                  }`}
                />
              </button>
            </div>

            {/* ── CARD-FREE DIRECTORY ACCORDION DRAWER ── */}
            {mobileMenuOpen && (
              <div
                data-lenis-prevent
                className="border-t border-white/[0.08] pt-1 pb-4 max-h-[68vh] overflow-y-auto space-y-3 font-mono text-xs select-none"
              >
                <div className="sticky top-0 bg-[#0c0d12]/98 backdrop-blur-md z-10 flex items-center justify-between py-2 text-[11px] text-white/40 tracking-wider border-b border-white/[0.06] mb-2 px-1">
                  <span>{activePlatform?.name.toUpperCase()} // DIRECTORY</span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-white/50 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={13} />
                  </button>
                </div>

                {/* Hierarchical folder tree on mobile — shadcn-style animated accordion */}
                <div className="space-y-2">
                  {activePlatform?.folders.map((folder) => {
                    const isOpen = openFolderId === folder.id;
                    const hasItems = folder.items.length > 0;
                    return (
                      <div key={folder.id} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => toggleFolder(folder.id)}
                          className="group w-full flex items-center justify-between text-xs font-mono py-1.5 px-2 rounded hover:bg-white/[0.04] transition-colors text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="flex items-center gap-2">
                            <ChevronDown
                              size={13}
                              className={`transition-transform duration-250 ease-out shrink-0 ${
                                isOpen ? "rotate-0 text-[#d4a853]" : "-rotate-90 text-white/40 group-hover:text-white"
                              }`}
                            />
                            <span className={`font-medium transition-colors ${isOpen ? "text-white font-semibold" : "text-white/70 group-hover:text-white"}`}>
                              {folder.name}
                            </span>
                          </span>
                          {hasItems ? (
                            <span className="text-[10px] text-white/30 font-mono">
                              {folder.items.length} levels
                            </span>
                          ) : (
                            <span className="text-[9px] px-1 py-0.5 rounded bg-white/[0.05] text-white/30 uppercase">
                              {folder.status || "PLANNED"}
                            </span>
                          )}
                        </button>

                        {/* Indented folder levels with shadcn-like animated collapsible */}
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen && hasItems
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0 pointer-events-none"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pl-3.5 space-y-0.5 border-l border-white/[0.08] ml-2 mt-0.5 mb-1">
                              {folder.items.map((item) => {
                                const isActive = activeLevelId === item.id;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => goToLevel(item.id)}
                                    className={`w-full text-left py-2 px-2.5 rounded font-mono text-xs transition-colors flex items-center justify-between min-h-[38px] active:scale-[0.98] ${
                                      isActive
                                        ? "text-[#d4a853] font-semibold bg-white/[0.06]"
                                        : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                                    }`}
                                  >
                                    <span className="truncate">{item.name}</span>
                                    {isActive && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* ── DESKTOP SIDEBAR: FIXED IN PLACE ── */}
            <div className="hidden lg:block w-64 xl:w-72 shrink-0">
              <aside className="fixed top-24 w-64 xl:w-72 flex flex-col h-[calc(100vh-8rem)] select-none">
                {/* Back to Writes button - Fixed at top */}
                <div className="shrink-0 pb-5">
                  <button
                    type="button"
                    onClick={goToRoot}
                    className="group inline-flex items-center gap-2 font-mono text-xs text-white/45 hover:text-[#d4a853] transition-colors select-none"
                  >
                    <ArrowLeft
                      size={13}
                      className="transition-transform duration-200 group-hover:-translate-x-1"
                    />
                    <span>Back</span>
                  </button>
                </div>

                {/* Folder Navigation Tree - Scrollable content */}
                <div
                  data-lenis-prevent
                  className="flex-1 overflow-y-auto pr-2 space-y-3 font-mono text-xs select-none"
                >
                  {/* Platform Root Folder */}
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setIsPlatformFolderOpen((v) => !v)}
                      className="group w-full flex items-center justify-between text-xs font-mono font-semibold text-white py-1 hover:text-[#d4a853] transition-colors text-left"
                      aria-expanded={isPlatformFolderOpen}
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronDown
                          size={13}
                          className={`text-[#d4a853] transition-transform duration-250 ease-out shrink-0 ${
                            isPlatformFolderOpen ? "rotate-0" : "-rotate-90 text-white/50"
                          }`}
                        />
                        <span>{activePlatform?.name}</span>
                      </span>
                    </button>

                    {/* Subfolders with smooth collapsible animation */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isPlatformFolderOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-2 space-y-1 pt-1">
                          {activePlatform?.folders.map((folder) => {
                            const isOpen = openFolderId === folder.id;
                            const hasItems = folder.items.length > 0;
                            return (
                              <div key={folder.id} className="space-y-0.5">
                                <button
                                  type="button"
                                  onClick={() => toggleFolder(folder.id)}
                                  className="group w-full flex items-center justify-between text-[11px] font-mono py-1 px-1.5 rounded hover:bg-white/[0.04] transition-colors text-left"
                                  aria-expanded={isOpen}
                                >
                                  <span className="flex items-center gap-1.5">
                                    <ChevronDown
                                      size={12}
                                      className={`transition-transform duration-250 ease-out shrink-0 ${
                                        isOpen
                                          ? "rotate-0 text-[#d4a853]"
                                          : "-rotate-90 text-white/40 group-hover:text-white"
                                      }`}
                                    />
                                    <span
                                      className={`transition-colors font-medium ${
                                        isOpen
                                          ? "text-white font-semibold"
                                          : "text-white/65 group-hover:text-white"
                                      }`}
                                    >
                                      {folder.name}
                                    </span>
                                  </span>
                                  {hasItems ? (
                                    <span className="text-[10px] text-white/30 font-mono">
                                      {folder.items.length}
                                    </span>
                                  ) : (
                                    <span className="text-[9px] px-1 py-0.2 rounded bg-white/[0.05] text-white/30 uppercase">
                                      {folder.status || "PLANNED"}
                                    </span>
                                  )}
                                </button>

                                {/* Level items in folder with shadcn-like animated collapsible */}
                                <div
                                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    isOpen && hasItems
                                      ? "grid-rows-[1fr] opacity-100"
                                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                                  }`}
                                >
                                  <div className="overflow-hidden">
                                    <div className="pl-3.5 space-y-0.5 border-l border-white/[0.08] ml-2 mt-0.5 mb-1">
                                      {folder.items.map((item) => {
                                        const isActive = activeLevelId === item.id;
                                        return (
                                          <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => goToLevel(item.id)}
                                            className={`w-full text-left py-1 px-2 rounded font-mono text-xs transition-colors flex items-center justify-between ${
                                              isActive
                                                ? "text-[#d4a853] font-semibold bg-white/[0.04]"
                                                : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                                            }`}
                                          >
                                            <span className="truncate">{item.name}</span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* ── CARDLESS CONTENT READER: Pure Typography & Spacing ── */}
            <main
              id="article-top"
              className="flex-1 min-w-0 max-w-3xl mx-auto w-full scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-8"
            >
              <article className="space-y-6">
                {/* Title & Metadata */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-white/45 flex-wrap">
                    <span>{activePlatform?.name}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-[#d4a853]">{activeItem?.tag}</span>
                  </div>

                  <h1
                    className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#e8e8f0] tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
                  >
                    {activeItem?.title}
                  </h1>
                </div>

                {/* Target Information - Borderless, Clean, Responsive (No horizontal blowout) */}
                {(activeItem?.challengeUrl ||
                  activeItem?.username ||
                  activeItem?.password) && (
                  <div className="py-3 sm:py-3.5 border-y border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-xs">
                    {/* URL row */}
                    {activeItem.challengeUrl && (
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="text-white/40 shrink-0">URL:</span>
                        <a
                          href={activeItem.challengeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:underline truncate inline-flex items-center gap-1"
                        >
                          <span className="truncate">{activeItem.challengeUrl}</span>
                          <ExternalLink size={10} className="opacity-70 shrink-0" />
                        </a>
                      </div>
                    )}

                    {/* Credentials row */}
                    <div className="flex items-center gap-4 flex-wrap shrink-0">
                      {activeItem.username && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-white/40">User:</span>
                          <span className="text-white font-medium">
                            {activeItem.username}
                          </span>
                          <CopyButton text={activeItem.username} />
                        </div>
                      )}

                      {activeItem.password && (
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-white/40 shrink-0">Pass:</span>
                          <span
                            className="text-emerald-400 font-medium truncate max-w-[130px] sm:max-w-[200px] md:max-w-none"
                            title={activeItem.password}
                          >
                            {activeItem.password}
                          </span>
                          <CopyButton text={activeItem.password} />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Markdown Body */}
                <div className="pt-2 max-w-full">
                  <ReactMarkdown components={markdownComponents}>
                    {cleanedContent}
                  </ReactMarkdown>
                </div>

                {/* Bottom Level Pagination - Anti-Card, Pure Typography */}
                <div className="pt-6 sm:pt-8 mt-10 sm:mt-12 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between gap-4">
                    {prevItem ? (
                      <button
                        type="button"
                        onClick={() => goToLevel(prevItem.id)}
                        className="group flex flex-col text-left transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a853] rounded p-1 -m-1"
                      >
                        <span className="text-xs font-mono text-white/40 group-hover:text-[#d4a853] transition-colors flex items-center gap-1">
                          <ChevronLeft size={13} />
                          <span>Previous</span>
                        </span>
                        <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors truncate max-w-[130px] sm:max-w-[240px]">
                          {prevItem.name}
                        </span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {nextItem && (
                      <button
                        type="button"
                        onClick={() => goToLevel(nextItem.id)}
                        className="group flex flex-col text-right transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a853] rounded p-1 -m-1"
                      >
                        <span className="text-xs font-mono text-white/40 group-hover:text-[#d4a853] transition-colors flex items-center justify-end gap-1">
                          <span>Next</span>
                          <ChevronRight size={13} />
                        </span>
                        <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors truncate max-w-[130px] sm:max-w-[240px]">
                          {nextItem.name}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      ) : (
        /* ══════════════════════════════════════════════════════════ */
        /* VIEW B: ROOT WRITES PAGE (ONLY PLATFORMS WITH REAL DATA)   */
        /* ══════════════════════════════════════════════════════════ */
        <div className="mx-auto max-w-[680px] px-4 sm:px-6 pt-20 sm:pt-24 pb-24 sm:pb-28">
          <div className="space-y-10">
            {/* Page Header */}
            <div className="pt-2 pb-2">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-mono text-xs text-white/45 hover:text-[#d4a853] transition-colors duration-200 mb-8 active:scale-[0.98]"
              >
                <ArrowLeft
                  size={13}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
                <span>Back to Home</span>
              </Link>

              <div className="space-y-2">
                <h1
                  className="text-3xl sm:text-4xl font-serif font-semibold text-[#e8e8f0] tracking-tight leading-tight"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
                >
                  Writes
                </h1>
                <p className="text-[15px] sm:text-base text-white/65 leading-relaxed font-sans">
                  Essays, security research, and step-by-step exploitation
                  walkthroughs from the machines and wargames I've rooted.
                </p>
              </div>
            </div>

            <hr className="dotted-divider" />

            {/* List of Platforms with Real Data (Only OverTheWire) - Anti-card */}
            <div className="space-y-4 pt-2">
              {WRITES_PLATFORMS.map((platform) => (
                <article
                  key={platform.id}
                  onClick={() => goToPlatform(platform.id)}
                  className="group cursor-pointer space-y-1.5 py-3 border-b border-white/[0.06] last:border-b-0 active:scale-[0.99] transition-all"
                >
                  {/* Top Row: Name on Left, Tag & Level Count on Right */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base sm:text-[17px] font-semibold text-white group-hover:text-[#d4a853] transition-colors tracking-tight">
                      {platform.name}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-[#d4a853]">
                        {platform.count} {platform.id === "portswigger" ? "labs" : "levels"}
                      </span>
                      <span className="font-mono text-xs text-white/40">
                        {platform.tag}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-white/60 leading-relaxed group-hover:text-white/75 transition-colors">
                    {platform.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WritesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[100dvh] flex items-center justify-center font-mono text-xs text-white/40">
          Loading Writes...
        </div>
      }
    >
      <WritesContent />
    </Suspense>
  );
}
