import type { IconType } from 'react-icons'
import {
	MdBookmark,
	MdEventNote,
	MdGavel,
	MdHeadsetMic,
	MdInbox,
	MdRadioButtonChecked,
	MdSearch,
	MdTimelapse,
	MdUpdate,
} from 'react-icons/md'

export interface IAsideLink {
	id: number
	title?: string
	items: IAsideLinkItem[]
}

export interface IAsideLinkItem {
	href: string
	title: string
	Icon: IconType
}

export const dashboardMenu: IAsideLink[] = [
	{
		id: 1,
		items: [
			{
				href: '/',
				title: 'Dashboard',
				Icon: MdTimelapse,
			},
		],
	},
	{
		id: 2,
		title: 'Auction',
		items: [
			{
				href: '/auctions',
				title: 'Auctions',
				Icon: MdGavel,
			},
			{
				href: '/calendar',
				title: 'Calendar',
				Icon: MdEventNote,
			},
			{
				href: '/active-bids',
				title: 'Active Bids',
				Icon: MdUpdate,
			},
			{
				href: '/saved',
				title: 'Saved',
				Icon: MdBookmark,
			},
		],
	},
	{
		id: 3,
		title: 'Vehicle finder',
		items: [
			{
				href: '/search',
				title: 'Search',
				Icon: MdSearch,
			},
			{
				href: '/listings',
				title: 'Listings',
				Icon: MdInbox,
			},
			{
				href: '/book-service',
				title: 'Book Service',
				Icon: MdRadioButtonChecked,
			},
			{
				href: '/help-center',
				title: 'Help Center',
				Icon: MdHeadsetMic,
			},
		],
	},
]
