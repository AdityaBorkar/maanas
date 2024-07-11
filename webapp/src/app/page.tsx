import Image from 'next/image'
import type { IconType } from 'react-icons'
import { FaGithub, FaGoogle } from 'react-icons/fa'

import Logo from './logo.png'

// import { auth, signIn } from '@/auth'

export default async function Login() {
	// const session = await auth()
	// if (session) redirect('/overview')

	return (
		<div className='flex min-h-screen select-none items-center justify-center'>
			<div className='-mt-16 rounded-3xl px-16 py-8 text-neutral-400 backdrop-blur-2xl'>
				<div className='mb-12 text-center font-title text-4xl font-semibold text-neutral-100'>
					<Image
						src={Logo}
						alt=''
						className='mx-auto -mt-2 mr-4 inline-block size-14 rounded-full bg-neutral-300 text-center'
					/>
					Maanas
				</div>

				<LoginFormButton icon={FaGoogle} name='google'>
					Continue with Google
				</LoginFormButton>
				<LoginFormButton icon={FaGithub} name='github'>
					Continue with GitHub
				</LoginFormButton>
			</div>
		</div>
	)
}

function LoginFormButton(props: {
	name: string
	icon: IconType
	children: string
}) {
	return (
		<form
		// action={async () => {
		// 	'use server'
		// 	await signIn(props.name, {
		// 		redirect: true,
		// 		callbackUrl: '/',
		// 	})
		// }}
		>
			<button
				type='submit'
				className='my-4 block w-full min-w-64 rounded-md border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-800 active:scale-95'
			>
				<props.icon className='-mt-1 mr-2 inline-block size-4' />
				{props.children}
			</button>
		</form>
	)
}
