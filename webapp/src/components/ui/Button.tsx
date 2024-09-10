import type { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

export default function Button({
	icon: Icon,
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
	onClick?: () => void
	icon?: IconType
}) {
	return (
		<button
			className={cn(
				'my-4 block w-full min-w-64 rounded-md border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-800 active:scale-95',
				className,
			)}
			{...props}
		>
			{Icon && <Icon className='-mt-1 mr-2 inline-block size-4' />}
			{children}
		</button>
	)
}
