'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { AREAS } from './list'
import { cn } from '@/lib/utils'

export default function AreasLayout(props: { children: React.ReactNode }) {
	const segment = useSelectedLayoutSegment()
	return (
		<div className='grid h-full grid-cols-[16rem_auto]'>
			<nav className='relative border-r border-neutral-900 bg-neutral-950 px-6 pt-6'>
				{AREAS.map((area) => (
					<Link
						key={area.name}
						href={`/areas/${area.name
							.toLowerCase()
							.replace(/[\s|\W]+/g, '-')
							.replace(/-+/g, '-')}`}
						className={cn(
							'group my-1 block rounded-md px-4 py-3 text-sm hover:bg-neutral-900/80',
							segment === area.slug
								? 'text-text-1'
								: 'text-text-4 hover:text-text-2',
						)}
					>
						<area.icon
							className={cn(
								'-mt-1 mr-2 inline-block size-5',
								segment === area.slug
									? 'text-text-1'
									: 'group-hover:text-text-1 text-zinc-500',
							)}
						/>
						{area.name}
					</Link>
				))}

				<Link
					href='/areas/lost'
					className='absolute bottom-5 w-[calc(100%-3rem)] text-center text-sm text-neutral-500 underline-offset-8 hover:underline'
				>
					Overwhelmed, or Lost?
				</Link>
			</nav>

			<div>{props.children}</div>
		</div>
	)
}
