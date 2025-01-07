export const pathnameToTitle = (pathname: string) => {
	const word = pathname.split('/').join()

	return word.charAt(0).toUpperCase() + word.slice(1)
}
