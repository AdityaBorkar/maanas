import Image from 'next/image'
import { FaGithub, FaGoogle } from 'react-icons/fa'

import Logo from '@/assets/logo.png'
import Button from '@/components/ui/Button'

// import { auth, signIn } from '@/auth'

export default async function Login() {
	// const session = await auth()
	// if (session) redirect('/overview')

	return (
		<div className='flex-screen-center'>
			<div className='text-text-4 -mt-16 rounded-3xl px-16 py-8 backdrop-blur-2xl'>
				<h1 className='font-title text-text-1 mb-12 text-center text-4xl font-semibold'>
					<Image
						src={Logo}
						alt=''
						className='mx-auto -mt-2 mr-4 inline-block size-14 rounded-full bg-neutral-300 text-center'
					/>
					Maanas
				</h1>

				<form
					action={async () => {
						'use server'
						// await signIn('google', { redirect: true, callbackUrl: '/' })
					}}
				>
					<Button type='submit'>
						<FaGoogle className='-mt-1 mr-2 inline-block size-4' /> Continue
						with Google
					</Button>
				</form>
				<form
					action={async () => {
						'use server'
						// await signIn('github', { redirect: true, callbackUrl: '/' })
					}}
				>
					<Button type='submit'>
						<FaGithub className='-mt-1 mr-2 inline-block size-4' /> Continue
						with GitHub
					</Button>
				</form>
			</div>
		</div>
	)
}
