const main = () => {
	const billboardRow = document.getElementsByClassName('billboard-row')[0]

	if (!billboardRow) {
		console.log('Billboard ad not found! 😭')
		console.log('Netflix may have changed something in their website which broke the Netflix Banner Blocker extension.');
		console.log('Let me know about it here: https://github.com/andyfry01/netflix_banner_blocker/issues');

		return;
	}

	console.log('Mischeif managed 😈. Billboard row removed.');
	console.log('Thanks for using Netflix Banner Blocker');
	billboardRow.remove();
}

main()
