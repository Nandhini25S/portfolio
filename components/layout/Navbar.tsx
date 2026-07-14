"use client";

const items = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Writing", id: "writing" },
  { label: "Archive", id: "archive" },
];

export default function Navbar() {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-8 py-6 font-[family-name:var(--font-literata)] text-sm text-[color:var(--text-secondary)] backdrop-blur-sm">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className="cursor-pointer transition-colors duration-300 hover:text-[color:var(--accent-lavender)]"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
