"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import ExperienceFrame from "./ExperienceFrame";
import ExperiencePanel from "./ExperiencePanel";

export default function ExperienceGallery() {
    const [activeId, setActiveId] = useState<string | null>(null);

    const active = experiences.find((e) => e.id === activeId) ?? null;

    return (
        <div className="px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                {experiences.map((experience) => (
                    <ExperienceFrame
                        key={experience.id}
                        experience={experience}
                        onSelect={() => setActiveId(experience.id)}
                    />
                ))}
            </div>

            {active && <ExperiencePanel experience={active} onClose={() => setActiveId(null)} />}
        </div>
    );
}
