import type { FC } from 'react'

const Line: FC<{ className?: string }> = ({ className }) => {
	return <div className={`py-0.5 rounded-lg bg-gray-100 ${className}`} />
}

export default Line
