import { Experience } from "@/data/experience";

export default function ExperienceFrame({
    experience,
    isActive,
    onSelect,
}: {
    experience: Experience;
    isActive: boolean;
    onSelect: () => void;
}) {
    return (
        <button
            type="button"
            onMouseEnter={onSelect}
            onFocus={onSelect}
            onClick={onSelect}
            className="group flex flex-col items-center text-left"
        >
            <svg width="80" height="44" className="mb-[-2px]">
                <line x1="40" y1="0" x2="10" y2="40" strokeWidth="1" className="exp-rope" />
                <line x1="40" y1="0" x2="70" y2="40" strokeWidth="1" className="exp-rope" />
                <circle cx="40" cy="2" r="3" className="exp-pin" />
            </svg>

            <div
                className={`exp-frame-swing frame-${experience.frame} exp-frame-border w-full aspect-[4/5] border-[3px] p-2 ${isActive ? "is-active" : ""
                    }`}
            >
                {/* artwork area — intentionally empty, to be filled later */}
                <div className="w-full h-full bg-[color:var(--surface)]" />
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
