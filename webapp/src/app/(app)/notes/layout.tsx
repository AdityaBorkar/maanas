import Link from "next/link";

type NoteType = {
  id: string;
  name: string;
  icon: string;
};

export default function NotesLayout(props: { children: React.ReactNode }) {
  // TODO: Rank notes by recency
  const Notes = [
    { id: "", name: "Open Source", icon: "" },
    { id: "", name: "Software Development", icon: "" },
    { id: "", name: "Plants", icon: "" },
    { id: "", name: "Chess", icon: "" },
    { id: "", name: "Workout", icon: "" },
    { id: "", name: "Voice/Speaking", icon: "" },
  ];

  return (
    <div className="grid grid-cols-[16rem_auto] h-full">
      <nav className="pt-12 border-r border-neutral-900 bg-neutral-950 px-6">
        <div>
          {Notes.map((project) => (
            <NoteItem key={project.id} {...project} />
          ))}
        </div>
      </nav>

      <div>{props.children}</div>
    </div>
  );
}

function NoteItem(props: NoteType) {
  return (
    <Link
      href={`/notes/${props.name
        .toLowerCase()
        .replace(/[\s|\W]+/g, "-")
        .replace(/-+/g, "-")}`}
      className="px-4 py-1 text-sm text-neutral-300 block rounded-md hover:bg-neutral-900/80"
    >
      {props.name}
    </Link>
  );
}
