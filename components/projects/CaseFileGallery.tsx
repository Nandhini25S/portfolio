"use client";

import { useState } from "react";
import { caseFiles } from "@/data/projects";
import CaseFileCard from "./CaseFileCard";
import CaseFilePanel from "./CaseFilePanel";

export default function CaseFileGallery() {
    const [activeId, setActiveId] = useState<string | null>(null);

    const active = caseFiles.find((c) => c.id === activeId) ?? null;

    return (
        <div className="px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center max-w-4xl mx-auto">
                {caseFiles.map((caseFile) => (
                    <CaseFileCard
                        key={caseFile.id}
                        caseFile={caseFile}
                        onSelect={() => setActiveId(caseFile.id)}
                    />
                ))}
            </div>

            {active && <CaseFilePanel caseFile={active} onClose={() => setActiveId(null)} />}
        </div>
    );
}
