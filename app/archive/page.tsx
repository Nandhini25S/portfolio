import Navbar from "@/components/layout/Navbar";
import ArchiveList from "@/components/archive/ArchiveList";

export default function ArchivePage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="flex flex-col items-center text-center px-4 pt-4 pb-20">
                <p className="font-[family-name:var(--font-instrument-serif)] text-xl text-[color:var(--text-secondary)] max-w-lg">
                    Some things are best understood outside projects and code.
                </p>
                <h1 className="font-[family-name:var(--font-instrument-serif)] text-6xl mt-4 text-[color:var(--text-primary)]">
                    Archive
                </h1>
                <p className="font-[family-name:var(--font-literata)] text-[color:var(--text-secondary)] mt-4">
                    A small collection of things that continue the story.
                </p>
            </section>

            <ArchiveList />
        </main>
    );
}
