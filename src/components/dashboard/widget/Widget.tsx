import { FC } from 'react'
import WidgetGroup from './WidgetGroup'

const Widget: FC = ({}) => {
	return (
		<div className='flex w-full rounded-2xl bg-blue opacity-15 h-[246px] mb-6'>
			<WidgetGroup />
		</div>
	)
}

export default Widget
