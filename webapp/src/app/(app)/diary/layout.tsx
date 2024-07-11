import Calendar from './Calendar'

export default function DiaryLayout(props: { children: React.ReactNode }) {
	return (
		<div className='grid h-screen grid-cols-[24rem_auto]'>
			<div className='border-r border-neutral-900 pt-8'>
				<Calendar linkPrefix='/diary' />
			</div>
			<div className='overflow-auto'>{props.children}</div>
		</div>
	)
}
