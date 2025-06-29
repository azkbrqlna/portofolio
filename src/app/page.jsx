"use client";

import { useEffect } from "react";
import AboutSection from "./portofolio/About";
import SocialLinks from "./portofolio/SocialLinks";
import ProjectSection from "./portofolio/Project";
import ExperienceSection from "./portofolio/Experience";

export default function PortfolioPage() {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();
      sr.reveal(".reveal-bottom", {
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        reset: true,
      });
      sr.reveal(".reveal-left", {
        origin: "left",
        distance: "20px",
        duration: 1000,
        reset: true,
      });
      sr.reveal(".reveal-right", {
        origin: "right",
        distance: "20px",
        duration: 1000,
        reset: true,
      });
      sr.reveal(".reveal-top", {
        origin: "top",
        distance: "20px",
        duration: 1000,
        reset: true,
      });
    });
  }, []);

  return (
    <>
      <AboutSection />
      <SocialLinks />
      <ProjectSection />
      <ExperienceSection />
    </>
  );
}
