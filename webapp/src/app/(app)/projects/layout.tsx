import Link from 'next/link'

type ProjectType = {
	id: string
	name: string
	icon: string
}

export default function ProjectsLayout(props: { children: React.ReactNode }) {
	const PriorityProjects = [
		{ id: '', name: 'Platipie', icon: '' },
		{ id: '', name: 'Personal Brand', icon: '' },
		{ id: '', name: 'Freelancing', icon: '' },
		{ id: '', name: 'Vasundhara', icon: '' },
		{ id: '', name: 'Maanas', icon: '' },
	]
	const AllProjects = [
		{ id: '', name: 'Open Source', icon: '' },
		{ id: '', name: 'Software Development', icon: '' },
		{ id: '', name: 'Plants', icon: '' },
		{ id: '', name: 'Chess', icon: '' },
		{ id: '', name: 'Workout', icon: '' },
		{ id: '', name: 'Voice/Speaking', icon: '' },
	]

	// TODO: V2: Copy "Projects" as labels in inbox and other apps

	return (
		<div className='grid h-full grid-cols-[16rem_auto]'>
			<nav className='border-r border-neutral-900 bg-neutral-950 px-6'>
				<div className='mb-2 mt-8 pl-4 text-sm font-semibold text-neutral-500'>
					Priority
				</div>
				<div>
					{PriorityProjects.map((project) => (
						<ProjectItem key={project.id} {...project} />
					))}
				</div>

				<div className='mb-2 mt-8 pl-4 text-sm font-semibold text-neutral-500'>
					All Projects
				</div>
				<div>
					{AllProjects.map((project) => (
						<ProjectItem key={project.id} {...project} />
					))}
				</div>
			</nav>

			<div>{props.children}</div>
		</div>
	)
}

function ProjectItem(props: ProjectType) {
	return (
		<Link
			href={`/projects/${props.name
				.toLowerCase()
				.replace(/[\s|\W]+/g, '-')
				.replace(/-+/g, '-')}`}
			className='block rounded-md px-4 py-1 text-sm text-neutral-300 hover:bg-neutral-900/80'
		>
			{props.name}
		</Link>
	)
}
