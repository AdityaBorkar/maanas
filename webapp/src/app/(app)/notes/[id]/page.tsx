'use client'

import { useState } from 'react'
import {
	LuFileText,
	LuInfo,
	LuLock,
	LuMessageSquare,
	LuPresentation,
} from 'react-icons/lu'

import ToggleSelector from '@/components/ToggleSelector'

export default function NotePage(props: { params: { id: string } }) {
	const id = props.params.id

	const [format, setFormat] = useState<'markdown' | 'canvas'>('markdown')
	// TODO: Add Comments (with delete only option)

	return (
		<div className='max-h-screen overflow-auto'>
			<aside className='fixed right-10 top-4'>
				<div className='flex flex-row gap-2'>
					<ToggleSelector
						value={format}
						setValue={setFormat}
						options={[
							{ icon: LuPresentation, value: 'canvas' },
							{ icon: LuFileText, value: 'markdown' },
						]}
					/>
					{/* <div className='rounded-md border border-neutral-800 bg-neutral-950 px-2 py-2 text-sm text-text-4 hover:bg-neutral-900'>
						<LuMessageSquare className='size-4' />
					</div> */}
					<div className='text-text-4 rounded-md border border-neutral-800 bg-neutral-950 px-2 py-2 text-sm hover:bg-neutral-900'>
						<LuLock className='size-4' />
					</div>
					<div className='text-text-4 rounded-md border border-neutral-800 bg-neutral-950 px-2 py-2 text-sm hover:bg-neutral-900'>
						<LuInfo className='size-4' />
					</div>
				</div>
			</aside>
			<div className='text-text-4 mx-auto mb-16 mt-24 min-h-screen max-w-[56rem] rounded-xl border border-neutral-800 px-12 py-10'>
				<h2 className='text-text-2 py-4 text-4xl font-bold'>{id}</h2>

				{/* <div className='text-right text-xs'>
            <div>Last Viewed</div>
            <div>Created On</div>
            <div>Modified On</div>
            <div>Edit Log</div>
            </div> */}

				<div>Write anything you want in Notion/Coda Styled Blocks.</div>
				<div>Attach Links / Images / Videos</div>
			</div>
		</div>
	)
}

// TODO: Notion like editor and integrations

function LinkBlock({ link }: { link: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<div className='h-4 w-4 rounded-full bg-neutral-800' />
				<div className='text-text-4 text-sm'>{link}</div>
			</div>
		</div>
	)
}

function ImageBlock({ image }: { image: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<div className='h-4 w-4 rounded-full bg-neutral-800' />
				<div className='text-text-4 text-sm'>{image}</div>
			</div>
		</div>
	)
}

function VideoBlock({ video }: { video: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<div className='h-4 w-4 rounded-full bg-neutral-800' />
				<div className='text-text-4 text-sm'>{video}</div>
			</div>
		</div>
	)
}

function TextBlock({ text }: { text: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='text-text-4 text-sm'>{text}</div>
		</div>
	)
}

function CodeBlock({ code }: { code: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='text-text-4 bg-neutral-800 p-2 text-sm'>{code}</div>
		</div>
	)
}
