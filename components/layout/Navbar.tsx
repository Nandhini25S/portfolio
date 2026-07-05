export default function Navbar() {
  const items = ["About", "Experience", "Projects", "Writing", "Resume"];

  return (
    <nav className="w-full flex justify-center gap-8 py-8 font-[var(--font-literata)] text-sm text-neutral-600">
      {items.map((item) => (
        <span key={item} className="cursor-pointer">
          {item}
        </span>
      ))}
    </nav>
  );
}
