const main = () => {
	chrome.runtime.onMessage.addListener(data => {
		if (data.action === "browse") {
			console.log('we browsin?');
			removeBillboard()
		}
	});
}

const removeBillboard = () => {
	const billboardRow = document.getElementsByClassName('billboard-row')[0]

	if (!billboardRow) {
		logError()
		return;
	}

	billboardParent = billboardRow.parentNode 
	billboardParent.replaceChild(spacer(headerHeight()), billboardRow)

	logSuccess()
}

const spacer = height => {
	const spacerDiv = document.createElement('div')
	spacerDiv.className = 'tester-div'
	spacerDiv.style.height = `${height}px`

	return spacerDiv
}

const headerHeight = () => {
	const header = document.getElementsByClassName('main-header')[0]

	if (header) {
		return header.clientHeight
	}
}

const logSuccess = () => {
	console.log('Mischeif managed 😈. Billboard row removed.');
	console.log('Thanks for using Netflix Banner Blocker');
}

const logError = () => {
	console.log('Billboard ad not found! 😭')
	console.log('Netflix may have changed something in their website which broke the Netflix Banner Blocker extension.');
	console.log('Let me know about it here: https://github.com/andyfry01/netflix_banner_blocker/issues');
}

main()
