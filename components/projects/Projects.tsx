// components/projects/Projects.tsx
import { caseFiles } from "@/data/projects";

export default function Projects() {
    return (
        <div className="flex flex-col gap-16">
            {caseFiles.map((file) => (
                <div key={file.id} className="border-b border-[color:var(--border)] pb-12">
                    <p className="text-xs uppercase tracking-wide text-[color:var(--accent-periwinkle)] mb-2">
                        {file.caseNumber} · {file.badge}
                    </p>
                    <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl text-[color:var(--text-primary)] mb-3">
                        {file.title}
                    </h3>
                    <p className="mb-4">{file.summary}</p>
                    <div className="flex gap-4 text-sm">
                        {file.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                className="text-[color:var(--accent-lavender)] hover:underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
