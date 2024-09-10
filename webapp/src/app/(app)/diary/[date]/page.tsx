import { twMerge } from 'tailwind-merge'

import TimeBlocking from './TimeBlocking'

type TaskType = {
	id: string
	status: 'DONE' | 'TODO' | 'IN-PROGRESS'
	title: string
	project?: {
		id: string
		name: string
	}
}

type NoteType = {
	link: string
	title: string
}

type ExperienceType = {
	text: string
	// TODO: Make this MDX type
}

export default function DatePage(props: { params: { date: string } }) {
	const date = props.params.date
	const day = {}

	const timeBlocking = []
	const tasks: TaskType[] = [
		{
			id: '1',
			status: 'DONE',
			title: 'Finish the diary page',
		},
		{
			id: '2',
			status: 'IN-PROGRESS',
			title: 'Finish the diary page',
			project: {
				id: '1',
				name: 'Journalling',
			},
		},
		{
			id: '3',
			status: 'TODO',
			title: 'Finish the diary page',
			project: {
				id: '1',
				name: 'Journalling',
			},
		},
	]
	const notes: NoteType[] = []
	const experiences: ExperienceType[] = []
	const feelings: string[] = []

	// CHECK-IN - Enter Tasks and Checklist
	// CHECK-OUT - Reflect on the day and tasks done and checklist

	return (
		<div className='grid h-screen grid-cols-[0.5fr_1fr] text-neutral-500'>
			<TimeBlocking />

			<div className='overflow-auto px-12 pt-10'>
				<H3>I did,</H3>
				<div>
					{tasks.map((task) => (
						<div key={task.id} className='my-2 flex flex-row'>
							<div
								className={twMerge(
									'mr-2 mt-0.5 size-4 rounded bg-neutral-600',
									task.status === 'DONE' && 'bg-green-600',
									task.status === 'IN-PROGRESS' && 'bg-amber-600',
								)}
							/>
							<div className='text-text-3 grow'>{task.title}</div>
						</div>
					))}
				</div>

				<H3>I learnt,</H3>
				<div>
					{notes.map((task, index) => (
						<div key={index} className='my-2 flex flex-row'>
							<div
								className={twMerge('mr-2 mt-0.5 size-4 rounded bg-red-800')}
							/>
							<div className='text-text-3 grow'>{task.title}</div>
						</div>
					))}
				</div>

				<H3>I experienced,</H3>
				<div>
					{experiences.map((task, index) => (
						<div key={index} className='my-2 flex flex-row'>
							<div
								className={twMerge('mr-2 mt-0.5 size-4 rounded bg-red-800')}
							/>
							<div className='text-text-3 grow'>{task.title}</div>
						</div>
					))}
				</div>

				<H3>I feel,</H3>
				<div>
					{feelings.map((task, index) => (
						<div key={index} className='my-2 flex flex-row'>
							<div
								className={twMerge('mr-2 mt-0.5 size-4 rounded bg-red-800')}
							/>
							<div className='text-text-3 grow'>{task.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

function H3(props: { children: React.ReactNode }) {
	return (
		<h3 className='text-text-2 mb-4 mt-12 text-xl font-medium'>
			{props.children}
		</h3>
	)
}
