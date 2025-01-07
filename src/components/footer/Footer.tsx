'use client'

import Link from 'next/link'
import { useState, type FC } from 'react'
import { MdMoreHoriz, MdPublic } from 'react-icons/md'
import Modal from '../ui/modal/Modal'
import { currency } from './currency.data'
import { language } from './language.data'

const Footer: FC = ({}) => {
	const [isOpenLang, setIsOpenLang] = useState(false)
	const [isOpenCur, setIsOpenCur] = useState(false)

	return (
		<>
			<footer className='flex items-center justify-between shrink-0 px-10 py-6 w-full'>
				<div className='flex items-center'>
					<Link
						className='font-extrabold text-sm text-black mr-4'
						href={'/privacy-policy'}
					>
						Privacy Policy
					</Link>
					<Link
						className='font-extrabold text-sm text-black mr-4'
						href={'/term-use'}
					>
						Term of Use
					</Link>
					<p className='font-normal text-sm text-gray'>
						© 2021 All rights reserved
					</p>
				</div>
				<div className='flex items-center'>
					<button
						type='button'
						className='flex items-center text-gray text-sm font-extrabold mr-4'
						onClick={() => setIsOpenLang(true)}
					>
						<MdPublic size={18} className='mr-1' />
						English
					</button>
					<button
						type='button'
						className='flex items-center text-gray text-sm font-extrabold'
						onClick={() => setIsOpenCur(true)}
					>
						<MdMoreHoriz size={18} className='mr-1' />
						USD
					</button>
				</div>
			</footer>
			<Modal
				title='Select currency'
				items={currency}
				isOpenModal={isOpenCur}
				setIsModalOpen={setIsOpenCur}
			/>
			<Modal
				title='Select language'
				items={language}
				isOpenModal={isOpenLang}
				setIsModalOpen={setIsOpenLang}
				isInputSearch
			/>
		</>
	)
}

export default Footer
