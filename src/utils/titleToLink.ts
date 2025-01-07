export const titleToLink = (title: string) => {
	const quantityWord = title.split(' ')

	if (quantityWord.length < 2) {
		return title.toLowerCase()
	}

	return quantityWord.join('-').toLowerCase()
}
