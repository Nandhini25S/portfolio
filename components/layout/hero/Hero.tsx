import HeroThought from "./HeroThought";
import HeroName from "./HeroName";
import HeroIntro from "./HeroIntro";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 px-4">
      <HeroThought />
      <HeroName />
      <HeroIntro />
    </section>
  );
}
