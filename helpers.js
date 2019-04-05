function closest(el, className) {
	while ((el = el.parentElement) && !el.classList.contains(className));
	return el
}

function hasClass(el, className) {
	return el.classList.contains(className)
}

function removeClass(el, className) {
	el.classList.remove(className)
}

function toggleClass(el, className) {
	el.classList.toggle(className)
}
