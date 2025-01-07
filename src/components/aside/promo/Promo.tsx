import { FC } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

const Promo: FC = ({}) => {
	return (
		<div className='bg-gray-100 rounded-[10px] px-6 py-4 mx-7 shrink-0 mt-auto'>
			<p className='text-center font-extrabold text-xs text-gray mb-4 px-2'>
				A new way to buy modern and sell old cars
			</p>
			<button
				type='button'
				className='flex items-center justify-center rounded-lg bg-white py-2 w-full shadow-xs text-xs font-extrabold text-black'
			>
				<MdAddShoppingCart size={18} className='text-blue mr-2' />
				Sell Your Car
			</button>
		</div>
	)
}

export default Promo
