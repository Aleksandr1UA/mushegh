'use client'

import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type FC,
	type SetStateAction,
} from 'react'
import { createPortal } from 'react-dom'
import { MdClose, MdSearch } from 'react-icons/md'
import ModalItem from './ModalItem'

interface IModal {
	title: string
	items: string[]
	isOpenModal: boolean
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
	isInputSearch?: boolean
}

const Modal: FC<IModal> = ({
	title,
	items,
	isOpenModal,
	setIsModalOpen,
	isInputSearch = false,
}) => {
	const [render, setRender] = useState(false)

	const modalRef = useRef<HTMLElement | null>(
		typeof window !== 'undefined' ? document.getElementById('modal') : null
	)

	useEffect(() => {
		setRender(true)
	}, [])

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsModalOpen(false)
		}

		document.addEventListener('keydown', handler)

		return () => {
			document.removeEventListener('keydown', handler)
		}
	}, [setIsModalOpen])

	if (!modalRef.current || !isOpenModal) {
		return null
	}

	return render
		? createPortal(
				<div className='absolute left-0 right-0 top-0 w-full h-full bg-black opacity-75 drop-shadow-[0_-6px_20px_rgba(13,10,25,0.1)] z-20'>
					<div className='fixed top-1/3 left-1/3 flex flex-col w-1/3 rounded-xl bg-white z-30'>
						<div className='flex items-center justify-between text-black border-b border-b-[rgba(238,238,238,1)] p-2 py-4 mb-4'>
							<h4 className='font-extrabold mx-auto'>{title}</h4>
							<button type='button' onClick={() => setIsModalOpen(false)}>
								<MdClose size={22} />
							</button>
						</div>
						{isInputSearch && (
							<div className='bg-white border border-[#eeeeee] rounded-lg flex items-center justify-between mx-4'>
								<input
									type='text'
									className='outline-none w-full placeholder:text-gray placeholder:font-extrabold placeholder:text-sm px-4 py-5'
									placeholder='Type to search for a language'
								/>
								<MdSearch size={18} className='text-gray mr-4' />
							</div>
						)}
						<div className='p-4'>
							{items.map(item => (
								<ModalItem key={item} title={item} />
							))}
						</div>
					</div>
				</div>,
				modalRef.current
		  )
		: null
}

export default Modal
