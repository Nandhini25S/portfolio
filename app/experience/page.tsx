import Navbar from "@/components/layout/Navbar";
import ExperienceGallery from "@/components/experience/ExperienceGallery";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="flex flex-col items-center text-center px-4 pt-4 pb-20">
                <p className="font-[family-name:var(--font-instrument-serif)] text-xl text-[color:var(--text-secondary)] max-w-lg">
                    Every place taught me a different way to ask better questions.
                </p>
                <h1 className="font-[family-name:var(--font-instrument-serif)] text-6xl mt-4 text-[color:var(--text-primary)]">
                    Experience
                </h1>
                <p className="font-[family-name:var(--font-literata)] text-[color:var(--text-secondary)] mt-4">
                    A few places where I&apos;ve learned, built and grown.
                </p>
            </section>

            <ExperienceGallery />
        </main>
    );
}
