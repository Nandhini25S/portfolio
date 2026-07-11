import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
