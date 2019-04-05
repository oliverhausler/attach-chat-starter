function showOptions(e) {
	const el = e.target
	const item = closest(el, 'item')
	toggleClass(item.querySelector('.pick__list'), 'show')
}

function hideOption(el) {
	const item = closest(el, 'item')
	removeClass(item.querySelector('.pick__list'), 'show')
}

function hideOptions(e) {
	const current = e.target
	const pickList = document.querySelectorAll('.pick__list.show')
	pickList.forEach(el => {
		if (!el.contains(current) && !hasClass(current, 'picker-value') && hasClass(el, 'show')) {
			toggleClass(el, 'show')
		}
	})
}

function updateColorPicker(type, value) {
	const selector = document.querySelector('.picker-value' + '.' + type)
	selector.style.background = value
	hideOption(selector)
}

function updateShapePicker(value) {
	const shape = document.querySelector('.picker-value.shape')
	shape.className = 'picker-value shape ' + value
	hideOption(shape)
}
