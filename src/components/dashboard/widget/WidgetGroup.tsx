import Line from '@/components/ui/line/Line'
import { FC } from 'react'

const WidgetGroup: FC = ({}) => {
	return (
		<div className='w-[361px] ml-4 mb-4 self-end'>
			<Line className='!rounded-[4px] !py-2 w-full !bg-white mb-4' />
			<Line className='rounded-lg w-[200px] !bg-white mb-3' />
			<Line className='rounded-lg w-[220px] !bg-white mb-3' />
			<Line className='rounded-lg w-[120px] !bg-white mb-6' />
			<div className='rounded-[4px] py-4 w-[80px] bg-white' />
		</div>
	)
}

export default WidgetGroup
