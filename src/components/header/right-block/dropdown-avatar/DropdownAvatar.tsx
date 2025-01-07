import type { FC } from 'react'
import DropdownLink from './DropdownLink'
import { dropdownLinks } from './dropdownLinks.data'

const DropdownAvatar: FC = ({}) => {
	return (
		<ul className='absolute top-11 right-0 bg-white p-6 z-20 rounded-xl shadow-base'>
			{dropdownLinks.slice(0, 2).map(link => (
				<DropdownLink key={link.id} {...link} />
			))}
			<hr className='my-4 border border-[rgba(238,238,238,1)]' />
			{dropdownLinks.slice(2, 4).map(link => (
				<DropdownLink key={link.id} {...link} />
			))}
		</ul>
	)
}

export default DropdownAvatar
