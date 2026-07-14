import { posts } from "@/data/writing";

export default function Writing() {
    return (
        <div className="flex flex-col gap-12">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.url}
          className="block border-b border-[color:var(--border)] pb-8 group"
        >
          <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl text-[color:var(--text-primary)] mb-2 group-hover:text-[color:var(--accent-lavender)] transition-colors duration-300">
            {post.title}
          </h3>
          <p>{post.summary}</p>
          {post.date && (
            <p className="text-xs text-[color:var(--accent-mist)] mt-2">{post.date}</p>
          )}
        </a>
      ))}
    </div>
  );
}
