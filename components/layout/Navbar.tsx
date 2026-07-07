export default function Navbar() {
  const items = ["About", "Experience", "Projects", "Writing", "Resume"];

  return (
    <nav className="w-full flex justify-center gap-8 py-8 font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)]">
      {items.map((item) => (
        <span
          key={item}
          className="cursor-pointer transition-colors duration-300 hover:text-[color:var(--accent-lavender)]"
        >
          {item}
        </span>
      ))}
    </nav>
  );
}
