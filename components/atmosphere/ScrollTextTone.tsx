"use client";

import { useEffect } from "react";

function lerpColor(hexA: string, hexB: string, t: number) {
    const a = hexA.match(/\w\w/g)!.map((h) => parseInt(h, 16));
    const b = hexB.match(/\w\w/g)!.map((h) => parseInt(h, 16));
    const rgb = a.map((v, i) => Math.round(v + (b[i] - v) * t));
    return `rgb(${rgb.join(",")})`;
}

export default function ScrollTextTone() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

            document.documentElement.style.setProperty(
                "--text-primary",
                lerpColor("EDEAE8", "1A1610", progress)
            );
            document.documentElement.style.setProperty(
                "--text-secondary",
                lerpColor("A79FA5", "3A3436", progress)
            );
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return null;
}
