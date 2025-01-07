import type { FC } from 'react'
import { MdSearch } from 'react-icons/md'

const Search: FC = ({}) => {
	return (
		<div className='relative text-gray font-normal'>
			<input
				className='outline-none placeholder:text-gray placeholder:text-sm placeholder:text-end placeholder:pl-5 w-[131px]'
				placeholder='Type to search'
			/>
			<span className='absolute top-1 left-0'>
				<MdSearch size={22} />
			</span>
		</div>
	)
}

export default Search
