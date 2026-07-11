import { ArchiveItem } from "@/data/archive";

export default function ArchiveEntry({ item }: { item: ArchiveItem }) {
    return (
        <div className="py-10">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl text-[color:var(--text-primary)]">
                {item.title}
            </h2>
            <p className="font-[family-name:var(--font-literata)] text-[15px] text-[color:var(--text-secondary)] mt-3 max-w-lg">
                {item.description}
            </p>
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-primary)] mt-5 underline underline-offset-4 decoration-[color:var(--border)] hover:decoration-[color:var(--accent-lavender)] transition-colors duration-300"
            >
                {item.actionText}
            </a>
        </div>
    );
}
