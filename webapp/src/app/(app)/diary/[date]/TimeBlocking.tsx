'use client'

import { usePathname } from 'next/navigation'

export default function TimeBlocking() {
	const date = usePathname().split('/')[2]

	// TODO: Starts at specific time
	const timePeriods = [
		7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0,
	]
	const tasks = []

	return (
		<div className='px-12 text-left'>
			<div className='mt-8 text-2xl font-medium text-neutral-400'>
				{new Date(date).toLocaleDateString('en', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</div>

			<div className='mt-8'>
				{timePeriods.map((timePeriod) => {
					return (
						<div
							key={timePeriod}
							className='border-t border-neutral-800 pb-6 text-sm'
						>
							<div className='text-neutral-400'>
								{timePeriod.toString().padStart(2, '0')}:00
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
