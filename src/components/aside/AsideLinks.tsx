import type { FC } from 'react'
import DashboardLinkItem from '../ui/dashboard-link/DashboardLinkItem'
import type { IAsideLink } from './asideMenu.data'

const AsideLinks: FC<IAsideLink> = ({ title, items }) => {
	return (
		<>
			{title && (
				<p className='text-sm font-normal text-gray ml-[29px] my-1'>{title}</p>
			)}
			{items.map(item => (
				<DashboardLinkItem key={item.title} {...item} />
			))}
		</>
	)
}

export default AsideLinks
