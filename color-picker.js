var createElement = function(html) {
	var template = document.createElement('template')
	template.innerHTML = html
	return template.content.firstChild
}

var ColorPicker = function({ id, defaultValue, colors, onChange }) {
	var list = document.querySelector('#' + id)
	colors.forEach(function(color) {
		var input = createElement(
			'<input id="' +
				color +
				id +
				'" type="radio" name="color' +
				id +
				'" value="' +
				color +
				'"' +
				(color === defaultValue ? 'checked' : '') +
				'>'
		)
		var label = createElement(
			'<label for="' +
				color +
				id +
				'" class="color round" style="background:' +
				color +
				';"></label>'
		)
		list.appendChild(input)
		list.appendChild(label)
	})
	list.addEventListener('click', function(e) {
		onChange(e.target.value)
	})
}
