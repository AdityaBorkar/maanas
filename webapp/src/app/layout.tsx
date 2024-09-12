import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import { cn } from '@/lib/utils'

const fontSans = localFont({
	src: '../assets/fonts/GeistVF.woff',
	variable: '--font-sans',
})

// const fontSans = Inter({
// 	subsets: ['latin'],
// 	variable: '--font-sans',
// })

const titleFont = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-title',
})

export const metadata: Metadata = {
	title: 'Maanas (Beta)',
	description: 'Second Brain for Aditya Borkar',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// TODO: Prelight Hints and LocalStorage. Do it with Settings.
	const theme = 'dark' // localStorage.getItem('theme') || ''
	return (
		<ViewTransitions>
			<html lang='en'>
				<head>
					<base href={process.env.DOMAIN} />
				</head>
				<body
					className={cn(
						theme,
						fontSans.variable,
						titleFont.variable,
						'bg-background text-foreground min-h-screen select-none font-sans text-sm antialiased',
					)}
				>
					{children}
				</body>
			</html>
		</ViewTransitions>
	)
}
