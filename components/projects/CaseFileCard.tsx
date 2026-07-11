import { CaseFile } from "@/data/projects";

export default function CaseFileCard({
    caseFile,
    onSelect,
}: {
    caseFile: CaseFile;
    onSelect: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-label={`Open case file: ${caseFile.title}`}
            className={`case-cover type-${caseFile.type} w-full max-w-sm text-left p-8`}
        >
            <span className="block font-[family-name:var(--font-geist-mono)] text-xs tracking-wide text-[color:var(--text-secondary)]">
                CASE FILE {caseFile.caseNumber}
            </span>

            <span className={`case-badge type-${caseFile.type} mt-3 inline-block w-fit font-[family-name:var(--font-geist-mono)] text-xs`}>
                {caseFile.badge}
            </span>

            <h3 className="mt-4 font-[family-name:var(--font-instrument-serif)] text-3xl text-[color:var(--text-primary)]">
                {caseFile.title}
            </h3>

            <p className="mt-3 font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)]">
                {caseFile.summary}
            </p>
        </button>
    );
}
