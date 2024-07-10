import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const sansFont = localFont({
	src: '../fonts/GeistVF.woff',
	variable: '--font-import-sans',
})

const titleFont = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-import-title',
})

export const metadata: Metadata = {
	title: 'Maanas (Beta)',
	description: 'Second Brain for Aditya Borkar',
	// maanas.adityab.tech
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`font-sans ${sansFont.variable} ${titleFont.variable}`}>
				{children}
			</body>
		</html>
	)
}
