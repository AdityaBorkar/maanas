'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useMemo, useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

export default function Calendar(props: {
	linkPrefix: string
	className?: string
}) {
	const dateParam = useSelectedLayoutSegment() || new Date()
	const date = new Date(dateParam)
	const today = new Date()

	const [preview, setPreview] = useState({
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	})

	const changeMonthPreview = (increment: number) =>
		setPreview(({ month, year }) => {
			month += increment
			if (month > 12) return { month: 1, year: year + 1 }
			if (month < 1) return { month: 12, year: year - 1 }
			return { month, year }
		})

	const { CALENDAR, FirstDate } = useMemo(
		() => CalculateCalendarPreview(preview),
		[preview],
	)

	return (
		<div className={twMerge('mx-auto h-fit w-fit', props.className)}>
			<div className='mb-8 flex flex-row justify-between'>
				<div className='rounded-md pt-1 text-2xl font-medium text-neutral-400 hover:text-white'>
					{FirstDate.toLocaleDateString('en', {
						month: 'long',
						year: 'numeric',
					})}
				</div>
				<div className='flex flex-row divide-x divide-neutral-800 rounded-md border border-neutral-800 text-neutral-400'>
					<button
						type='button'
						className='px-2 py-2 hover:bg-neutral-900'
						onClick={() => changeMonthPreview(-1)}
					>
						<HiOutlineChevronLeft />
					</button>
					<Link
						href={`${props.linkPrefix}/${today.toISOString().slice(0, 10)}`}
						onClick={() =>
							setPreview({
								month: today.getMonth() + 1,
								year: today.getFullYear(),
							})
						}
						className='px-2 py-2 text-sm hover:bg-neutral-900'
					>
						Today
					</Link>
					<button
						type='button'
						className='px-2 py-2 hover:bg-neutral-900'
						onClick={() => changeMonthPreview(1)}
					>
						<HiOutlineChevronRight />
					</button>
				</div>
			</div>
			<div className='mx-auto grid w-fit grid-flow-row grid-cols-[repeat(7,minmax(0,1fr))] gap-2 text-sm'>
				{CALENDAR.map((day) => {
					const dateString = day.date.toISOString().slice(0, 10)
					return (
						<Link
							key={dateString}
							href={`${props.linkPrefix}/${dateString}`}
							className={twMerge(
								'flex size-12 items-center justify-center rounded-md bg-neutral-950 text-neutral-400',
								!day.current && 'text-neutral-600',
								dateString === date.toISOString().slice(0, 10)
									? 'bg-neutral-200 font-medium text-black'
									: 'hover:bg-neutral-900',
							)}
							onClick={() => {
								if (!day.current)
									setPreview({
										month: day.date.getMonth() + 1,
										year: day.date.getFullYear(),
									})
							}}
						>
							{day.dateNum}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

// Set the Preview Array:
function CalculateCalendarPreview(props: { year: number; month: number }) {
	const FirstDate = new Date(`${props.year}-${props.month}-1`)
	const FirstDay = FirstDate.getDay()
	const LastDate = new Date(props.year, props.month, 0)
	console.log(LastDate.toLocaleDateString('en'))
	const LastDay = LastDate.getDay()
	const TotalDays = LastDate.getDate()
	const CALENDAR: {
		date: Date
		dateNum: number
		current: boolean
	}[] = []
	// Blank Preceding Days:
	for (let i = FirstDay; i > 0; i--) {
		const date = new Date(FirstDate.valueOf() - i * 24 * 60 * 60 * 1000)
		const dateNum = date.getDate()
		CALENDAR.push({ date, dateNum, current: false })
	}
	// Days of the Month:
	for (let dateNum = 1; dateNum <= TotalDays; dateNum++) {
		const date = new Date(`${props.year}-${props.month}-${dateNum}`)
		CALENDAR.push({ date, dateNum, current: true })
	}
	// Blank Succeeding Days:
	for (let i = 1; i <= 6 - LastDay; i++) {
		const date = new Date(LastDate.valueOf() + i * 24 * 60 * 60 * 1000)
		const dateNum = date.getDate()
		CALENDAR.push({ date, dateNum, current: false })
	}

	return { CALENDAR, FirstDate }
}
