import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import type { IAsideLinkItem } from '../../aside/asideMenu.data'

const DashboardLinkItem: FC<IAsideLinkItem> = ({ href, title, Icon }) => {
	const pathname = usePathname()

	const isCurrentHref = pathname.startsWith(href)

	return (
		<Link
			href={href}
			className={`w-full py-[17px] rounded-[10px] text-sm text-nowrap font-extrabold flex items-center justify-start pl-[29px] ${
				isCurrentHref ? 'bg-gray-100 text-black' : 'text-gray'
			} hover:bg-gray-100  `}
		>
			<Icon
				size={22}
				className={`mr-[29px]  ${isCurrentHref ? 'text-blue ' : ''}`}
			/>
			{title}
		</Link>
	)
}

export default DashboardLinkItem
