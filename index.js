const shapeList = document.querySelector('.shape__list')
const pickerValues = document.querySelectorAll('.picker-value')

const avatarBorderRadius = 'round'
const editorBackgroundColor = '#4D368A'
const viewerBackgroundColor = '#9F14C0'

const colors = [
	'#F23A2F',
	'#D31B5B',
	'#9F14C0',
	'#4D368A',
	'#434CC6',
	'#44BA4F',
	'#009C8E',
	'#11ABD8',
	'#01AAEA',
	'#0798F0',
	'#88CB2D',
	'#CFDB02',
	'#F6E912',
	'#FBC705',
	'#FD9200',
	'#000002',
	'#5D7E92',
	'#9B99A9',
	'#796B5F',
	'#F95A10',
]

function setAvatarBorderRadius(shape) {
	attachSdk.setProperty('attach:participants:avatar-border-radius', shape)
}

function setViewerBackgroundColor(color) {
	attachSdk.setProperty('attach:chat:viewer-background-color', color)
}

function setEditorBackgroundColor(color) {
	attachSdk.setProperty('attach:chat:editor-background-color', color)
}

new ColorPicker({
	id: 'color-editor',
	defaultValue: editorBackgroundColor,
	colors: colors,
	onChange: function(newColor) {
		setEditorBackgroundColor(newColor)
		updateColorPicker('editor', newColor)
	},
})

new ColorPicker({
	id: 'color-viewer',
	defaultValue: viewerBackgroundColor,
	colors: colors,
	onChange: function(newColor) {
		setViewerBackgroundColor(newColor)
		updateColorPicker('viewer', newColor)
	},
})

document.addEventListener('click', hideOptions)
pickerValues.forEach(el => el.addEventListener('click', showOptions))
shapeList.addEventListener('click', function(e) {
	const shape = e.target.value
	setAvatarBorderRadius(shape)
	updateShapePicker(shape)
})

// Set initial values
// Pass multiple properties at once.
attachSdk.setProperties({
	'attach:chat:viewer-background-color': viewerBackgroundColor,
	'attach:chat:editor-background-color': editorBackgroundColor,
	'attach:participants:avatar-border-radius': avatarBorderRadius,
})
