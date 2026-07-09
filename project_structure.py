import os

# ===== CONFIG =====
PROJECT_ROOT = "."

ALLOWED_EXTENSIONS = {
    ".py", ".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".sql", ".db",
    ".css", ".scss", ".html", ".yml", ".yaml", ".mjs", ".sh", ".svg"}

IGNORE_DIRS = {".git", "__pycache__", "node_modules", ".idea", ".vscode", "venv", ".venv", "dist", "build", "coverage"}
IGNORE_FILES = {".DS_Store"}


def should_include(filename):
    _, ext = os.path.splitext(filename)
    return ext.lower() in ALLOWED_EXTENSIONS


def build_tree(root):
    lines = []

    def walk(path, prefix=""):
        entries = sorted(os.listdir(path), key=lambda x: (os.path.isfile(os.path.join(path, x)), x.lower()))
        entries = [e for e in entries if e not in IGNORE_DIRS and e not in IGNORE_FILES]
        visible = []

        for e in entries:
            full = os.path.join(path, e)
            if os.path.isdir(full):
                visible.append(e)
            elif should_include(e):
                visible.append(e)

        for i, entry in enumerate(visible):
            full = os.path.join(path, entry)
            last = i == len(visible) - 1
            connector = "└── " if last else "├── "
            lines.append(prefix + connector + entry)
            if os.path.isdir(full):
                extension = "    " if last else "│   "
                walk(full, prefix + extension)

    lines.append(os.path.basename(root.rstrip(os.sep)) + "/")
    walk(root)

    return "\n".join(lines)


if __name__ == "__main__":
    tree = build_tree(PROJECT_ROOT)
    print(tree)
    output_file = os.path.join(PROJECT_ROOT, "project_structure.txt")

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(tree)
    print(f"\nSaved to: {output_file}")
