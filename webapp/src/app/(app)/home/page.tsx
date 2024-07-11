import { LuClipboardCheck, LuSquareStack } from "react-icons/lu";

export default function HomePage() {
  const TASKS = [];
  const RESOURCES = [];

  return (
    <div className="grid grid-cols-2 gap-32 mx-auto max-w-[48rem] pt-24">
      <div className="w-96 border border-neutral-800 px-6 py-4 rounded-xl">
        <h3 className="font-medium mb-8 text-neutral-300 text-base">
          <LuClipboardCheck className="inline-block size-5 text-neutral-400 -mt-1 mr-2" />
          Tasks for Today
        </h3>

        <div></div>
      </div>

      <div className="w-96 border border-neutral-800 px-6 py-4 rounded-xl">
        <h3 className="font-medium mb-8 text-neutral-300 text-base">
          <LuSquareStack className="inline-block size-5 text-neutral-400 -mt-1 mr-2" />
          Resources to be sorted
        </h3>

        <div></div>
      </div>
    </div>
  );
}
