import Image from 'next/image'
import { useState, type FC } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import DropdownAvatar from './dropdown-avatar/DropdownAvatar'

interface IRightBlock {
	imgSrc: string
	alt?: string
}

const RightBlock: FC<IRightBlock> = ({ imgSrc, alt = 'avatar' }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className='flex items-center justify-between'>
				<button type='button' className='relative'>
					<MdNotificationsNone size={22} className='text-gray' />
					<span className='absolute -top-1 -right-1 rounded-full bg-pink p-0.5 animate-pulse' />
				</button>
				<button
					type='button'
					className='rounded-full ml-4'
					onClick={() => setIsOpen(!isOpen)}
				>
					<Image src={imgSrc} alt={alt} width={40} height={40} priority />
				</button>
			</div>
			{isOpen && <DropdownAvatar />}
		</>
	)
}

export default RightBlock
