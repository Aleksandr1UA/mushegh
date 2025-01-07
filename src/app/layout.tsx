import Aside from '@/components/aside/Aside'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} antialiased relative`}>
				<Aside />
				<div className='flex flex-col sm:w-full lg:w-[78.82%]'>
					<Header />
					{children}
					<Footer />
				</div>
				<div id='modal'></div>
			</body>
		</html>
	)
}