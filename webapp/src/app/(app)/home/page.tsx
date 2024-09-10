import { LuCheckSquare, LuClipboardCheck, LuSquareStack } from 'react-icons/lu'

export default function HomePage() {
	const TASKS = [
		{ name: 'Buy a new laptop', dueDate: new Date() },
		{ name: 'Go to the gym', dueDate: new Date() },
		{ name: 'Read a book', dueDate: new Date() },
	]
	const RESOURCES = []

	return (
		<div className='mx-auto grid max-w-[48rem] grid-cols-2 gap-32 pt-24'>
			<div className='w-96 rounded-xl border border-neutral-800 px-6 py-4'>
				<h3 className='text-text-3 mb-8 text-base font-medium'>
					<LuClipboardCheck className='text-text-4 -mt-1 mr-2 inline-block size-5' />
					Tasks for Today
				</h3>

				<div className=''>
					{TASKS.map((task) => (
						<div
							className='text-text-3 flex items-center justify-between py-4'
							key={task.name}
						>
							<div className='flex items-center space-x-2'>
								<LuCheckSquare className='text-text-4 -mt-1 mr-2 inline-block size-5' />
								<span>{task.name}</span>
							</div>
							<span className='text-text-4'>
								{task.dueDate.toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className='w-96 rounded-xl border border-neutral-800 px-6 py-4'>
				<h3 className='text-text-3 mb-8 text-base font-medium'>
					<LuSquareStack className='text-text-4 -mt-1 mr-2 inline-block size-5' />
					Resources to be sorted
				</h3>

				<div></div>
			</div>
		</div>
	)
}
