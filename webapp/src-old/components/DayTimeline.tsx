export default function DayTimeline(props: any) {
  const days = new Array(16).fill({ photo: false }, 0, 16)
  return (
    <div className="relative ml-20 grid grid-cols-1">
      {days.map((day, index) => (
        <div className="relative min-h-[35px]" key={index}>
          <div className="absolute -left-28 font-medium -top-2 w-24 text-right text-sm text-neutral-500">
            {8 + index}:00 AM
          </div>

          <div className="h-full w-20 border-t border-gray-600"></div>

          {/* <div className="ml-20 text-sm">Learning LLMs, ML by YouTube</div> */}
        </div>
      ))}
    </div>
  )
}

function DayTimeline2() {
  // Props:
  const days = new Array(16).fill({ photo: false }, 0, 16)

  // Render:
  return (
    <div className="mt-8">
      <div className="cursor-pointer border-b border-neutral-800 px-2 pb-3 text-2xl font-medium text-neutral-300 hover:text-neutral-100">
        May 31, 2023
      </div>

      <div className="relative ml-64 mt-16 grid grid-cols-1">
        {days.map((day, index) => (
          <div className="relative h-[30px]" key={index}>
            <div className="absolute -left-28 -top-2 w-24 text-right text-sm text-neutral-500">
              {8 + index}:00 AM
            </div>

            <div className="h-full w-20 border-t border-neutral-600"></div>

            {/* <div className="ml-20 text-sm">Learning LLMs, ML by YouTube</div> */}
          </div>
        ))}
      </div>
    </div>
  )
}
