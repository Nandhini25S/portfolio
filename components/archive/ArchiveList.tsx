import { archiveItems } from "@/data/archive";
import ArchiveEntry from "./ArchiveEntry";

export default function ArchiveList() {
    return (
        <div className="max-w-lg mx-auto divide-y divide-[color:var(--border)]">
            {archiveItems.map((item) => (
                <ArchiveEntry key={item.id} item={item} />
            ))}
        </div>
    );
}
