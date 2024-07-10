// Component:
export default function InputTags(props: { placeholder: string }) {
  return (
    <div className="relative">
      <label className="pb-1 text-sm text-neutral-500">
        {props.placeholder}
      </label>
      <input
        type="text"
        className="w-full rounded-md border border-neutral-800 bg-inherit px-3 py-2 text-neutral-300 placeholder:text-neutral-700 focus:outline-0"
        placeholder={props.placeholder}
      />
    </div>
  )
}