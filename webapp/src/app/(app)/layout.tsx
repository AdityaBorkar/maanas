import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
	FiAirplay,
	FiCalendar,
	FiFolder,
	FiGrid,
	FiInbox,
	FiPlus,
	FiSearch,
	FiSettings,
	FiZap,
} from 'react-icons/fi'

const Navigation = [
	{ name: 'Home', path: '/home', icon: FiAirplay },
	{ name: 'Notes', path: '/notes', icon: FiInbox },
	{ name: 'Projects', path: '/projects', icon: FiFolder },
	{ name: 'Areas', path: '/areas', icon: FiGrid },
	{ name: 'Diary', path: '/diary', icon: FiCalendar },
	{ name: 'Neurons', path: '/neurons', icon: FiZap },
]

const Storage = dynamic(() => import('./Storage'), { ssr: false })

export default function AppLayout(props: { children: React.ReactNode }) {
	return (
		<div className='grid min-h-screen grid-cols-[12rem_auto]'>
			<nav className='relative flex flex-col justify-between border-r border-neutral-800 bg-neutral-900 px-4 pt-6 text-sm font-medium text-neutral-400'>
				<div>
					<div className='mb-8 flex items-center justify-between'>
						<div>
							<div className='tracking-tighter'>Aditya B.</div>
							{/* <div>Workspace Settings</div> */}
							{/* <div>Device Settings</div> */}
							{/* <div>Account Settings</div> */}
							{/* <div>Logout</div> */}
						</div>

						<div className='flex items-center space-x-2'>
							<div>
								<FiSearch className='inline-icon' />
								{/* <ShortcutDiv>Ctrl + K</ShortcutDiv> */}
							</div>
							<div>
								<FiPlus className='inline-icon' />
								{/* <ShortcutDiv>Ctrl + N</ShortcutDiv> */}
							</div>
						</div>
					</div>

					{Navigation.map((item) => (
						<Link
							key={item.name}
							title={item.name}
							href={item.path}
							className='my-0.5 block rounded-md px-4 py-2 hover:bg-neutral-800/80 hover:text-neutral-100'
						>
							<item.icon className='inline-icon' />
							{item.name}
						</Link>
					))}
				</div>

				<Storage />
				<div>
					<div className='mx-auto mb-2 w-fit rounded border border-neutral-700 px-2 py-1 text-center font-mono text-xs font-semibold text-neutral-500'>
						⚡ OFFLINE
					</div>
					{/* <div className='my-4 w-full rounded-md px-3 py-2 hover:bg-neutral-800'>
						<LuCog className='-mt-0.5 mr-1 inline-block size-4 text-neutral-400' />
						Settings
					</div> */}
					{/* <div className='-ml-4 w-[calc(100%+2rem)] border-t border-neutral-700 py-2'>
						<div className='-ml-2 px-2 text-center text-neutral-400'>
							<LuHistory className='-mt-0.5 mr-2 inline-block size-4 text-neutral-500' />
							Recent Visited
						</div>
					</div> */}
				</div>
			</nav>

			<main>{props.children}</main>
		</div>
	)
}

function NavButton(props: { children: React.ReactNode }) {
	return (
		<button
			type='button'
			className='relative my-0.5 block w-full rounded-md px-4 py-2 text-left hover:bg-neutral-800/80 hover:text-neutral-100'
		>
			{props.children}
		</button>
	)
}

function ShortcutDiv(props: { children: React.ReactNode }) {
	return (
		<span className='absolute right-0 top-1.5 rounded border border-neutral-700 bg-neutral-800 px-1 py-0.5 text-[0.65rem] font-semibold uppercase text-neutral-500'>
			{props.children}
		</span>
	)
}
