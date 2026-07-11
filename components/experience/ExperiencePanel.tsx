import { Experience } from "@/data/experience";

export default function ExperiencePanel({
    experience,
    onClose,
}: {
    experience: Experience;
    onClose: () => void;
}) {
    return (
        <div
            key={experience.id}
            className={`exp-panel-enter frame-${experience.frame} relative mt-16 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-8`}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-6 right-6 text-[color:var(--text-secondary)]"
            >
                ×
            </button>

            {/* artwork area — intentionally empty, to be filled later */}
            <div className="exp-frame-border border-[3px] aspect-[4/5] w-full p-6">
                <div className="w-full h-full bg-[color:var(--surface)]" />
            </div>

            <div>
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl text-[color:var(--text-primary)]">
                    {experience.role}
                </h2>
                <p className="italic font-[family-name:var(--font-literata)] text-lg text-[color:var(--text-secondary)] mt-1">
                    {experience.company}
                </p>
                {experience.duration && (
                    <p className="font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)] mt-3">
                        {experience.duration}
                    </p>
                )}
                {experience.description && (
                    <p className="font-[family-name:var(--font-literata)] text-[15px] text-[color:var(--text-primary)] mt-4 leading-relaxed">
                        {experience.description}
                    </p>
                )}
                {experience.responsibilities.length > 0 && (
                    <ul className="mt-4 space-y-2 list-disc list-inside">
                        {experience.responsibilities.map((item) => (
                            <li
                                key={item}
                                className="font-[family-name:var(--font-literata)] text-[15px] text-[color:var(--text-primary)]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                {experience.technologies.length > 0 && (
                    <p className="mt-4 font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)]">
                        {experience.technologies.join(" · ")}
                    </p>
                )}
            </div>
        </div>
    );
}
