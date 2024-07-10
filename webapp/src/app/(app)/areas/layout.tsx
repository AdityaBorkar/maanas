import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AREAS } from "./list";

export default function AreasLayout(props: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_auto] h-full">
      <nav className="border-r pt-20 border-neutral-900 bg-neutral-950 px-6">
        {AREAS.map((area) => (
          <Link
            key={area.name}
            href={`/areas/${area.name
              .toLowerCase()
              .replace(/[\s|\W]+/g, "-")
              .replace(/-+/g, "-")}`}
            className={twMerge(
              "px-4 py-3 my-1 text-sm text-neutral-400 block rounded-md hover:text-neutral-200 group hover:bg-neutral-900/80",
              ""
            )}
          >
            <area.icon className="size-5 text-neutral-500 group-hover:text-neutral-100 inline-block mr-2 -mt-1" />
            {area.name}
          </Link>
        ))}
      </nav>

      <div>{props.children}</div>
    </div>
  );
}
