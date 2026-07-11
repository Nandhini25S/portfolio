import { CaseFile } from "@/data/projects";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mt-6">
            <h4 className="font-[family-name:var(--font-cormorant-garamond)] italic text-lg text-[color:var(--text-primary)]">
                {title}
            </h4>
            <div className="mt-1 font-[family-name:var(--font-literata)] text-[15px] leading-relaxed text-[color:var(--text-secondary)]">
                {children}
            </div>
        </div>
    );
}

export default function CaseFilePanel({
    caseFile,
    onClose,
}: {
    caseFile: CaseFile;
    onClose: () => void;
}) {
    return (
        <div className="case-backdrop" onClick={onClose}>
            <div className="case-panel" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close case file"
                    className="case-close absolute top-6 right-6 cursor-pointer font-[family-name:var(--font-literata)] text-xl leading-none text-[color:var(--text-secondary)]"
                >
                    ×
                </button>

                <span className={`case-badge type-${caseFile.type} font-[family-name:var(--font-geist-mono)] text-xs`}>
                    {caseFile.badge}
                </span>

                <h2 className="mt-4 font-[family-name:var(--font-instrument-serif)] text-4xl text-[color:var(--text-primary)]">
                    {caseFile.title}
                </h2>

                {caseFile.whyThisExists && (
                    <Section title="Why this exists">{caseFile.whyThisExists}</Section>
                )}
                {caseFile.problem && <Section title="Problem">{caseFile.problem}</Section>}
                {caseFile.solution && <Section title="Solution">{caseFile.solution}</Section>}
                {caseFile.architecture && (
                    <Section title="Architecture">{caseFile.architecture}</Section>
                )}
                {caseFile.technologies.length > 0 && (
                    <Section title="Technologies">
                        <span className="font-[family-name:var(--font-geist-mono)]">
                            {caseFile.technologies.join(" · ")}
                        </span>
                    </Section>
                )}
                {caseFile.challenges && <Section title="Challenges">{caseFile.challenges}</Section>}
                {caseFile.results && <Section title="Results">{caseFile.results}</Section>}

                {caseFile.links.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-4">
                        {caseFile.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                className="case-link font-[family-name:var(--font-geist-mono)] text-xs"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
