'use client'

import WidgetItem from '@/components/dashboard/items/WidgetItem'
import Widget from '@/components/dashboard/widget/Widget'
import type { FC, PropsWithChildren } from 'react'

const Dashboard: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className='flex flex-col px-10 mb-2'>
			<Widget />
			<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
				{Array.from({ length: 4 }, (_, i) => (
					<WidgetItem key={i} />
				))}
			</div>
		</main>
	)
}

export default Dashboard
