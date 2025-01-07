import Line from '@/components/ui/line/Line'
import type { FC } from 'react'

const WidgetItem: FC = ({}) => {
	return (
		<div className='border border-gray-200 rounded-[14px] p-4 h-[206px]'>
			<Line className='w-[220px] py-[9px] mb-4' />
			<Line className='w-[154px] mb-3' />
			<Line className='w-[169px] mb-3' />
			<Line className='w-[92px] mb-3' />
			<Line className='w-[42px]' />
		</div>
	)
}

export default WidgetItem
