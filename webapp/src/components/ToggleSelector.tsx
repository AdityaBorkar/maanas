import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

export default function ToggleSelector<VT>(props: {
	value: VT
	setValue: (value: VT) => void
	options: {
		icon: IconType
		value: VT
	}[]
}) {
	// TODO: Add tooltips
	return (
		<div className='flex flex-row items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-950 px-1 py-1 font-medium'>
			{props.options.map((option, index) => (
				<option.icon
					key={`${index}:${option.value}`}
					onClick={() => props.setValue(option.value)}
					className={twMerge(
						'box-content block size-4 rounded-md px-1.5 py-1',
						props.value === option.value
							? 'bg-neutral-800 text-neutral-200'
							: 'text-neutral-400 hover:bg-neutral-800/50',
					)}
				/>
			))}
		</div>
	)
}
