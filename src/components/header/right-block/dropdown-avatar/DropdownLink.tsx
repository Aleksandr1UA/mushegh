import { titleToLink } from '@/utils/titleToLink'
import Link from 'next/link'
import type { FC } from 'react'
import type { IDropdownLink } from './dropdownLinks.data'

const DropdownLink: FC<Omit<IDropdownLink, 'id'>> = ({ title, Icon }) => {
	return (
		<li className='mb-6 last:mb-0 pr-14'>
			<Link
				href={titleToLink(title)}
				className='flex items-center text-sm font-bold text-black hover:text-blue transition-colors'
			>
				<Icon size={18} className='mr-2' />
				{title}
			</Link>
		</li>
	)
}

export default DropdownLink
