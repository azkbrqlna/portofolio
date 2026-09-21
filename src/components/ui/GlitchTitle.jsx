"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

export default function GlitchTitle({
    text,
    delay = 150,
    className = "",
    as: Tag = "h2",
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <Tag ref={ref} className={className}>
            {isInView ? (
                <GlitchText text={text} delay={delay} />
            ) : (
                <span className="invisible" aria-hidden="true">
                    {text}
                </span>
            )}
        </Tag>
    );
}