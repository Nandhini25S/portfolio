import { ReactNode } from "react";

type SectionProps = {
    id: string;
    thought: string;
    children: ReactNode;
};

export default function Section({ id, thought, children }: SectionProps) {
    return (
        <section id={id} className="min-h-screen px-6 py-32 md:px-16">
            <div className="mx-auto max-w-3xl">
                <p className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl text-[var(--text-primary)] mb-16">
                    {thought}
                </p>
                <div className="font-[family-name:var(--font-literata)] text-[var(--text-secondary)]">
                    {children}
                </div>
            </div>
        </section>
    );
}
