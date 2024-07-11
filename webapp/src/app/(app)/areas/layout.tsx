import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { AREAS } from './list'

export default function AreasLayout(props: { children: React.ReactNode }) {
	return (
		<div className='grid h-full grid-cols-[16rem_auto]'>
			<nav className='border-r border-neutral-900 bg-neutral-950 px-6 pt-6'>
				{AREAS.map((area) => (
					<Link
						key={area.name}
						href={`/areas/${area.name
							.toLowerCase()
							.replace(/[\s|\W]+/g, '-')
							.replace(/-+/g, '-')}`}
						className={twMerge(
							'group my-1 block rounded-md px-4 py-3 text-sm text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200',
							'',
						)}
					>
						<area.icon className='-mt-1 mr-2 inline-block size-5 text-neutral-500 group-hover:text-neutral-100' />
						{area.name}
					</Link>
				))}
			</nav>

			<div>{props.children}</div>
		</div>
	)
}
