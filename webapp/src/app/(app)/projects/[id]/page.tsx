export default function ProjectPage(props: { params: { id: string } }) {
  const id = props.params.id;

  // TODO: Combine Tabs and Projects with Resources

  return (
    <div className="overflow-auto max-h-screen">
      <aside className="fixed top-4 right-10">
        <div className="flex flex-row rounded-md *:rounded-md">
          <div className="bg-neutral-800 py-1 px-4 text-sm">Canvas</div>
          <div className="bg-neutral-800 py-1 px-4 text-sm">Paper</div>
        </div>
      </aside>
      <div className="mt-24 text-neutral-400 mb-16 mx-auto px-12 py-10 max-w-[56rem] min-h-screen border rounded-xl border-neutral-800">
        <div className="mb-12 border-b border-neutral-800 py-4 relative">
          <h2 className="text-neutral-200 text-4xl font-bold">{id}</h2>
          <div className="mt-2">Caption</div>
          <div className="absolute -top-2 right-2 bg-orange-600 text-sm py-1 px-2 rounded text-white font-semibold">
            Deadline: 07/07/2024
          </div>

          <div>Area: Career (Computer Science)</div>
          {/* <div className='text-right text-xs'>
            <div>Last Viewed</div>
            <div>Created On</div>
            </div> */}
        </div>

        <div>
          Tasks = Laser Focused SMART goals. Tasks can be divided into
          meta-tasks that are to be completed in a single day/go.
        </div>
        <div>
          Outcome = Write the desired outcome in present tense (Think & Grow
          Rich))
        </div>
        <div>Content</div>

        <div>Brief</div>
        <div>Who</div>
        <div>What</div>
        <div>When</div>
        <div>Why</div>

        <div>Collaborators</div>
        <div>...</div>

        <div>Motivation</div>
        <div>...</div>

        <div>Notes-first approach. A note is an atomic form / summary</div>
        {/* // Write Note status labels and how are you feeling, with whom collaborating, actions taken and what's next */}

        <div>Notes Resources Examples Website</div>
        <div>
          Store both - your notes and images as well as original sources
        </div>
      </div>
    </div>
  );
}

// Bio chemistry
// dopamines endorphins nitric-oxide seratonin neopinephrine anandamine

// TO ENTER FLOW STATE, WE REQUIRE: Clear Goals, feedback, challenge & skills
