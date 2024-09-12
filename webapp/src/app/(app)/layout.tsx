'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
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

import { StorageProvider } from '../../components/Storage'
import { cn } from '@/lib/utils'

const Navigation = [
	{ name: 'Home', path: 'home', icon: FiAirplay },
	{ name: 'Notes', path: 'notes', icon: FiInbox },
	{ name: 'Projects', path: 'projects', icon: FiFolder },
	{ name: 'Areas', path: 'areas', icon: FiGrid },
	{ name: 'Diary', path: 'diary', icon: FiCalendar },
	{ name: 'Neurons', path: 'neurons', icon: FiZap },
]

export default function AppLayout(props: { children: React.ReactNode }) {
	const segment = useSelectedLayoutSegment()

	return (
		<StorageProvider>
			<div className='grid min-h-screen grid-cols-[12rem_auto]'>
				<nav className='relative flex flex-col justify-between border-r border-neutral-800 bg-neutral-900 px-4 pt-6 text-sm font-medium text-text-4'>
					<div>
						<div className='mb-8 flex items-center justify-between'>
							<div>
								<div className='tracking-tighter'>Aditya B.</div>
								{/* <div>Workspace Settings</div> */}
								{/* <div>Device Settings</div> */}
								{/* <div>Account Settings</div> */}
								{/* <div>Logout</div> */}
							</div>

							<div className='flex items-center gap-x-1'>
								<button type='button'>
									<FiSearch className='inline-icon' />
									{/* <ShortcutDiv>Ctrl + K</ShortcutDiv> */}
								</button>
								<button type='button'>
									<FiPlus className='inline-icon' />
									{/* <ShortcutDiv>Ctrl + N</ShortcutDiv> */}
								</button>
							</div>
						</div>

						{Navigation.map((item) => (
							<Link
								key={item.name}
								title={item.name}
								href={`/${item.path}`}
								className={cn(
									'my-0.5 block rounded-md px-4 py-2 hover:bg-neutral-800/80 hover:text-text-2',
									segment === item.path && 'text-text-2',
								)}
							>
								<item.icon className='inline-icon' />
								{item.name}
							</Link>
						))}
					</div>

					<div>
						<div className='mx-auto mb-2 w-fit rounded border border-neutral-700 px-2 py-1 text-center font-mono text-xs font-semibold text-neutral-500'>
							⚡ OFFLINE
						</div>
					</div>
				</nav>

				<main>{props.children}</main>
			</div>
		</StorageProvider>
	)
}
