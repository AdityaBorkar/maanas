'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Calendar from '@/components/Calendar'

export default function DiaryLayout(props: { children: React.ReactNode }) {
	const [date, setDate] = useState(new Date())

	const router = useRouter()
	router.replace(`/diary/${date.toISOString().slice(0, 10)}`)

	return (
		<div className='grid h-screen grid-cols-[32rem_auto]'>
			<div className='border-r border-neutral-900 pt-12'>
				<Calendar state={[date, setDate]} />
			</div>
			<div className='overflow-auto'>{props.children}</div>
		</div>
	)
}
