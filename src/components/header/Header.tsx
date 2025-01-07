'use client'

import { pathnameToTitle } from '@/utils/pathnameToTitle'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import RightBlock from './right-block/RightBlock'
import Search from './search/Search'

const Header: FC = ({}) => {
	const pathname = usePathname()

	return (
		<header className='flex items-center justify-between py-7 px-14 w-full'>
			<h1 className='text-xl font-extrabold text-black'>
				{pathname === '/' ? 'Dashboard' : pathnameToTitle(pathname)}
			</h1>
			<div className='relative flex items-center justify-between w-1/3'>
				<Search />
				<RightBlock imgSrc='/Img.png' />
			</div>
		</header>
	)
}

export default Header
