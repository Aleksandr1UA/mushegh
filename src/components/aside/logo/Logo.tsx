import Image from 'next/image'
import type { FC } from 'react'

interface ILogo {
	src: string
	alt?: string
}

const Logo: FC<ILogo> = ({ src, alt = 'logo' }) => {
	return (
		<div className='my-[30px] ml-12'>
			<Image src={src} alt={alt} width={40} height={40} priority />
		</div>
	)
}

export default Logo
