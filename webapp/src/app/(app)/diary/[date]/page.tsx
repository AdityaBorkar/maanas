export default function DatePage(props: { params: { date: string } }) {
	const date = props.params.date
	return (
		<div className='flex h-screen items-center justify-center text-neutral-500'>
			{date}
		</div>
	)
}
