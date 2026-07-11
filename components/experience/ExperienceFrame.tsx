import { Experience } from "@/data/experience";

export default function ExperienceFrame({
    experience,
    onSelect,
}: {
    experience: Experience;
    onSelect: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-label={`View ${experience.role} at ${experience.company}`}
            className="flex flex-col items-center text-left w-56 sm:w-60 lg:w-64"
        >
            <div className={`exp-hang frame-${experience.frame} w-full`}>
                <svg viewBox="0 0 100 44" className="w-full h-11 mb-[-2px]" preserveAspectRatio="none">
                    <path d="M50,2 Q30,20 12,42" fill="none" strokeWidth="1" className="exp-rope" />
                    <path d="M50,2 Q70,20 88,42" fill="none" strokeWidth="1" className="exp-rope" />
                    <circle cx="50" cy="2" r="3" className="exp-pin" />
                </svg>

                <div className="exp-frame-border w-full aspect-[4/5] border-[3px] p-2">
                    {/* artwork area — intentionally empty, to be filled later */}
                    <div className="w-full h-full bg-[color:var(--surface)]" />
                </div>
            </div>

            <p className="mt-4 font-[family-name:var(--font-literata)] text-[15px] text-[color:var(--text-primary)]">
                {experience.role}
            </p>
            <p className="italic font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)]">
                {experience.company}
            </p>
        </button>
    );
}
