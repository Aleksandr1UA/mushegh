import { useState, type FC } from 'react'

interface IModalItem {
	title: string
}

const ModalItem: FC<IModalItem> = ({ title }) => {
	const [isClick, setIsClick] = useState(false)

	return (
		<div
			className='flex items-center cursor-pointer mb-4 last:mb-0'
			onClick={() => setIsClick(!isClick)}
		>
			<span
				className={`relative rounded-full w-5 h-5 mr-2 block ${
					isClick ? 'bg-green' : 'bg-gray-100'
				}`}
			>
				{isClick && (
					<span className='absolute top-1/3 left-1/3 rounded-full w-2 h-2 block bg-white z-10' />
				)}
			</span>
			<span
				className={`uppercase text-sm font-extrabold hover:text-black transition-colors ${
					isClick ? 'text-black' : 'text-gray'
				}`}
			>
				{title}
			</span>
		</div>
	)
}

export default ModalItem
