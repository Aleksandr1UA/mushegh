'use client'

import type { FC } from 'react'
import AsideLinks from './AsideLinks'
import { dashboardMenu } from './asideMenu.data'
import Logo from './logo/Logo'
import Promo from './promo/Promo'

const Aside: FC = ({}) => {
	return (
		<aside className=' sm:hidden lg:flex flex-col lg:w-[21.18%] border-r border-r-gray-200'>
			<Logo src='/Dark.png' />
			<div className='flex flex-col mx-7 w-[78.82%]'>
				{dashboardMenu.map(el => (
					<AsideLinks key={el.id} {...el} />
				))}
			</div>
			<Promo />
		</aside>
	)
}

export default Aside
