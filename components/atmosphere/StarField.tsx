"use client";

import { useEffect, useRef, useState } from "react";

type Star = {
    id: number;
    top: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
    isDiamond: boolean;
};

export default function StarField() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setStars(
            Array.from({ length: 90 }, (_, i) => {
                const isDiamond = Math.random() > 0.7;
                return {
                    id: i,
                    top: Math.random() * 100,
                    left: Math.random() * 100,
                    size: isDiamond ? Math.random() * 3 + 3 : Math.random() * 1.5 + 0.5,
                    delay: Math.random() * 6,
                    duration: 2.5 + Math.random() * 4,
                    isDiamond,
                };
            })
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
            const fade = 1 - Math.min(progress / 0.85, 1);
            containerRef.current?.style.setProperty("--star-fade", fade.toString());
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            style={{ ["--star-fade" as string]: 1 }}
        >
            {stars.map((star) => (
                <span
                    key={star.id}
                    className={`absolute bg-white animate-twinkle ${star.isDiamond ? "star-diamond" : "rounded-full"
                        }`}
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        opacity: "calc(var(--star-fade))",
                    }}
                />
            ))}
        </div>
    );
}
