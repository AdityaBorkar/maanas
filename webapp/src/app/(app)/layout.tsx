import Link from 'next/link'
import {
	FiAirplay,
	FiCalendar,
	FiFolder,
	FiGrid,
	FiInbox,
	FiPlus,
	FiSearch,
	FiZap,
} from 'react-icons/fi'
import { LuHistory } from 'react-icons/lu'

const Navigation = [
	{ name: 'Home', path: '/', icon: FiAirplay },
	{ name: 'Diary', path: '/diary', icon: FiCalendar },
	{ name: 'Projects', path: '/projects', icon: FiFolder },
	{ name: 'Notes', path: '/notes', icon: FiInbox },
	{ name: 'Neurons', path: '/neurons', icon: FiZap },
	{ name: 'Areas', path: '/areas', icon: FiGrid },
]

export default function AppLayout(props: { children: React.ReactNode }) {
	return (
		<div className='grid min-h-screen grid-cols-[12rem_auto]'>
			<nav className='relative border-r border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-400'>
				<div className='mb-8 mt-4 text-center font-title text-xl font-semibold uppercase text-neutral-400'>
					Maanas
				</div>

				{Navigation.map((item) => {
					return (
						<Link
							key={item.name}
							title={item.name}
							href={item.path}
							className='my-0.5 block rounded-md px-4 py-2 hover:bg-neutral-800/80 hover:text-neutral-100'
						>
							<item.icon className='-mt-0.5 mr-2.5 inline-block size-4' />
							{item.name}
						</Link>
					)
				})}

				<div className='mt-12'>
					<NavButton>
						<FiPlus className='-mt-0.5 mr-2.5 inline-block size-4' /> New
						{/* <ShortcutDiv>Ctrl + N</ShortcutDiv> */}
					</NavButton>
					<NavButton>
						<FiSearch className='-mt-0.5 mr-2.5 inline-block size-4' /> Search
						{/* <ShortcutDiv>Ctrl + K</ShortcutDiv> */}
					</NavButton>
				</div>

				<div className='absolute bottom-0 -ml-4 w-[100%] border-t border-neutral-700 py-2'>
					<div className='-ml-2 px-2 text-center text-neutral-400'>
						<LuHistory className='-mt-0.5 mr-2 inline-block size-4 text-neutral-500' />
						Recent Visited
					</div>
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
