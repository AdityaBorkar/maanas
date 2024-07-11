'use client'

// import {
// 	EditorBubble,
// 	EditorBubbleItem,
// 	EditorCommand,
// 	EditorCommandItem,
// 	EditorContent,
// 	EditorRoot,
// } from 'novel'
import { Editor } from 'novel'
import { useState } from 'react'
import { LuFileText, LuInfo, LuLock, LuPresentation } from 'react-icons/lu'

import ToggleSelector from '@/components/ToggleSelector'

export default function NotePage(props: { params: { id: string } }) {
	const id = props.params.id

	const [format, setFormat] = useState<'markdown' | 'canvas'>('markdown')

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
					<div className='rounded-md border border-neutral-800 bg-neutral-950 px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-900'>
						<LuLock className='size-4' />
					</div>
					<div className='rounded-md border border-neutral-800 bg-neutral-950 px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-900'>
						<LuInfo className='size-4' />
					</div>
				</div>
			</aside>
			<div className='mx-auto mb-16 mt-24 min-h-screen max-w-[56rem] rounded-xl border border-neutral-800 px-12 py-10 text-neutral-400'>
				<h2 className='py-4 text-4xl font-bold text-neutral-200'>{id}</h2>

				{/* <div className='text-right text-xs'>
            <div>Last Viewed</div>
            <div>Created On</div>
            <div>Modified On</div>
            <div>Edit Log</div>
            </div> */}
				{/* <EditorRoot>
					<EditorContent>
						<EditorCommand>
							<EditorCommandItem  />
							<EditorCommandItem />
							<EditorCommandItem />
						</EditorCommand>
						<EditorBubble>
							<EditorBubbleItem />
							<EditorBubbleItem />
							<EditorBubbleItem />
						</EditorBubble>
					</EditorContent>
				</EditorRoot> */}

				<Editor />

				<div>Write anything you want in Notion/Coda Styled Blocks.</div>
				<div>Attach Links / Images / Videos</div>
			</div>
		</div>
	)
}

function LinkBlock({ link }: { link: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<div className='h-4 w-4 rounded-full bg-neutral-800' />
				<div className='text-sm text-neutral-400'>{link}</div>
			</div>
		</div>
	)
}

function ImageBlock({ image }: { image: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<div className='h-4 w-4 rounded-full bg-neutral-800' />
				<div className='text-sm text-neutral-400'>{image}</div>
			</div>
		</div>
	)
}

function VideoBlock({ video }: { video: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<div className='h-4 w-4 rounded-full bg-neutral-800' />
				<div className='text-sm text-neutral-400'>{video}</div>
			</div>
		</div>
	)
}

function TextBlock({ text }: { text: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='text-sm text-neutral-400'>{text}</div>
		</div>
	)
}

function CodeBlock({ code }: { code: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='bg-neutral-800 p-2 text-sm text-neutral-400'>{code}</div>
		</div>
	)
}
