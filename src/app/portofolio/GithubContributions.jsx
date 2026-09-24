"use client";

import React, { useMemo, useState, useEffect } from "react";

const GITHUB_USERNAME = "azkbrqlna";

const LEVEL_CLASSES = {
  0: "bg-[#161b22] border border-white/[0.04]",
  1: "bg-[#0e4429] border border-[#006d32]/30",
  2: "bg-[#006d32] border border-[#26a641]/30",
  3: "bg-[#26a641] border border-[#39d353]/30",
  4: "bg-[#39d353] border border-[#39d353]/50 shadow-[0_0_6px_rgba(57,211,83,0.35)]",
};

export default function GithubContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch 100% real-time contributions from GitHub API
  useEffect(() => {
    let isMounted = true;
    async function fetchRealtimeContributions() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        if (!res.ok) throw new Error("Failed to fetch GitHub contributions");
        const json = await res.json();
        if (
          isMounted &&
          json &&
          json.contributions &&
          json.contributions.length > 0
        ) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load contributions");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchRealtimeContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Group contributions by weeks (7 days per week)
  const weeks = useMemo(() => {
    if (!data?.contributions) return [];
    const list = data.contributions;
    const grouped = [];
    for (let i = 0; i < list.length; i += 7) {
      grouped.push(list.slice(i, i + 7));
    }
    return grouped;
  }, [data]);

  // Compute month labels aligned with week columns
  const monthLabels = useMemo(() => {
    if (!weeks.length) return [];
    const labels = [];
    let prevMonth = -1;

    weeks.forEach((week, idx) => {
      if (!week || week.length === 0) return;
      const date = new Date(week[0].date + "T00:00:00Z");
      const month = date.getUTCMonth();

      if (month !== prevMonth) {
        // Skip first partial week to align starting from Oct like GitHub
        if (idx === 0) {
          prevMonth = month;
          return;
        }
        labels.push({
          colIndex: idx,
          name: date.toLocaleDateString("en-US", {
            month: "short",
            timeZone: "UTC",
          }),
        });
        prevMonth = month;
      }
    });

    return labels;
  }, [weeks]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00Z");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <div className="w-full">
      {/* Main Contribution Card */}
      <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0c0d12]/80 backdrop-blur-sm shadow-sm">
        <div className="overflow-x-auto pb-1 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-fit select-none mx-auto sm:mx-0">
            {/* Loading Skeleton */}
            {loading && !data ? (
              <div className="space-y-2 py-1">
                <div className="h-3.5 w-full bg-white/[0.04] rounded animate-pulse mb-2" />
                <div className="flex gap-[2.5px]">
                  {Array.from({ length: 53 }).map((_, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[2.5px]">
                      {Array.from({ length: 7 }).map((_, dIdx) => (
                        <div
                          key={dIdx}
                          className="w-[8.5px] h-[8.5px] rounded-[2px] bg-white/[0.04] animate-pulse"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : error && !data ? (
              <div className="py-6 text-center text-xs font-mono text-white/40">
                <p>Failed to load real-time contributions from GitHub.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 text-[#d4a853] hover:underline"
                >
                  Retry
                </button>
              </div>
            ) : (
              <>
                {/* Month Labels */}
                <div className="relative h-4 mb-1.5 text-[10px] font-mono text-white/40">
                  {monthLabels.map(({ colIndex, name }) => (
                    <span
                      key={`${name}-${colIndex}`}
                      className="absolute"
                      style={{ left: `${colIndex * 11}px` }}
                    >
                      {name}
                    </span>
                  ))}
                </div>

                {/* Contribution Grid */}
                <div className="flex gap-[2.5px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[2.5px]">
                      {week.map((day) => {
                        const levelClass =
                          LEVEL_CLASSES[day.level] || LEVEL_CLASSES[0];
                        const tooltipText =
                          day.count === 0
                            ? `No contributions on ${formatDate(day.date)}`
                            : `${day.count} contribution${
                                day.count === 1 ? "" : "s"
                              } on ${formatDate(day.date)}`;

                        return (
                          <div
                            key={day.date}
                            title={tooltipText}
                            className={`w-[8.5px] h-[8.5px] rounded-[2px] transition-transform duration-150 hover:scale-150 hover:z-10 cursor-pointer ${levelClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Card Footer: Learn link & Legend */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 mt-2.5 border-t border-white/[0.04]">
          <a
            href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white/40 hover:text-white/70 transition-colors"
          >
            Learn how GitHub counts contributions
          </a>

          {/* Color Scale Legend */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/40">
            <span>Less</span>
            <div className="w-[8.5px] h-[8.5px] rounded-[2px] bg-[#161b22] border border-white/[0.04]" />
            <div className="w-[8.5px] h-[8.5px] rounded-[2px] bg-[#0e4429] border border-[#006d32]/30" />
            <div className="w-[8.5px] h-[8.5px] rounded-[2px] bg-[#006d32] border border-[#26a641]/30" />
            <div className="w-[8.5px] h-[8.5px] rounded-[2px] bg-[#26a641] border border-[#39d353]/30" />
            <div className="w-[8.5px] h-[8.5px] rounded-[2px] bg-[#39d353] border border-[#39d353]/50" />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
