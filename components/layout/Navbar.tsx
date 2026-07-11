import Link from "next/link";

export default function Navbar() {
  const items = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/writing" },
    { label: "Archive", href: "/archive" },
  ];

  return (
    <nav className="w-full flex justify-center gap-8 py-8 font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="cursor-pointer transition-colors duration-300 hover:text-[color:var(--accent-lavender)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
