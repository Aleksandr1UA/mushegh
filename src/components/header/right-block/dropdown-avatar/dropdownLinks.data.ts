import { IconType } from 'react-icons'
import { MdAutorenew, MdHeadsetMic, MdInput, MdSettings } from 'react-icons/md'

export interface IDropdownLink {
	id: number
	Icon: IconType
	title: string
}

export const dropdownLinks: IDropdownLink[] = [
	{
		id: 1,
		title: 'Profile Settings',
		Icon: MdSettings,
	},
	{
		id: 2,
		title: 'Help Center',
		Icon: MdHeadsetMic,
	},
	{
		id: 3,
		title: 'Switch to Seller',
		Icon: MdAutorenew,
	},
	{
		id: 4,
		title: 'Log Out',
		Icon: MdInput,
	},
]
