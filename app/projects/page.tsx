import CaseFileGallery from "@/components/projects/CaseFileGallery";
import "@/styles/projects.css";

export default function ProjectsPage() {
    return (
        <main className="pt-32 pb-32">
            <div className="text-center max-w-2xl mx-auto px-8">
                <p className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[color:var(--text-primary)]">
                    Every project began with a question worth chasing.
                </p>
                <h1 className="mt-6 font-[family-name:var(--font-instrument-serif)] text-5xl text-[color:var(--text-primary)]">
                    Projects
                </h1>
                <p className="mt-4 font-[family-name:var(--font-literata)] italic text-[color:var(--text-secondary)]">
                    A collection of case files documenting systems built from curiosity.
                </p>
            </div>

            <div className="mt-20">
                <CaseFileGallery />
            </div>
        </main>
    );
}
