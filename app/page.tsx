import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/hero/Hero";
import Section from "@/components/Section";
import ExperienceGallery from "@/components/experience/ExperienceGallery";
import ArchiveList from "@/components/archive/ArchiveList";
import Projects from "@/components/projects/Projects";
import Writing from "@/components/writing/Writing";
import StarField from "@/components/atmosphere/StarField";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <StarField />
      <Navbar />

      <section id="about">
        <Hero />
      </section>

      <Section id="experience" thought="Every place taught me a different way to ask better questions.">
        <ExperienceGallery />
      </Section>

      <Section id="projects" thought="Some ideas became products. Others became lessons. Every one of them started with a question.">
       <Projects />
      </Section>

      <Section id="writing" thought="I write to understand. Publishing is just a side effect.">
        <Writing />
      </Section>

      <Section id="archive" thought="A record, kept simply.">
        <ArchiveList />
      </Section>
    </main>
  );
}
