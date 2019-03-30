var defaultEditorColor = "#4D368A";
var defaultViewerColor = "#01AAEA";

new ColorPicker({
  id: "color-editor",
  defaultValue: defaultEditorColor,
  colors: [
    "#F23A2F",
    "#D31B5B",
    "#9F14C0",
    "#4D368A",
    "#434CC6",
    "#44BA4F",
    "#009C8E",
    "#11ABD8",
    "#01AAEA",
    "#0798F0",
    "#88CB2D",
    "#CFDB02",
    "#F6E912",
    "#FBC705",
    "#FD9200",
    "#000002",
    "#5D7E92",
    "#9B99A9",
    "#796B5F",
    "#F95A10"
  ],
  onChange: function(newColor) {
    updateChatSDK({ editorColor: newColor });
  }
});

new ColorPicker({
  id: "color-viewer",
  defaultValue: defaultViewerColor,
  colors: [
    "#F23A2F",
    "#D31B5B",
    "#9F14C0",
    "#4D368A",
    "#434CC6",
    "#44BA4F",
    "#009C8E",
    "#11ABD8",
    "#01AAEA",
    "#0798F0",
    "#88CB2D",
    "#CFDB02",
    "#F6E912",
    "#FBC705",
    "#FD9200",
    "#000002",
    "#5D7E92",
    "#9B99A9",
    "#796B5F",
    "#F95A10"
  ],
  onChange: function(newColor) {
    updateChatSDK({ viewerColor: newColor });
  }
});

var shapeList = document.querySelector(".shape__list");
shapeList.addEventListener("click", function(e) {
  updateChatSDK({ shape: e.target.value });
});

var updateChatSDK = function({ editorColor, viewerColor, shape }) {
  if (editorColor) {
    attachSdk.setProperty("attach:chat:editor-background-color", editorColor);
  }
  if (viewerColor) {
    attachSdk.setProperty("attach:chat:viewer-background-color", viewerColor);
  }
  if (shape) {
    attachSdk.setProperty("attach:participants:avatar-border-radius", shape);
  }
};

updateChatSDK({
  editorColor: defaultEditorColor,
  viewerColor: defaultViewerColor,
  shape: "round"
});

var currentValues = document.querySelectorAll(".current-value");
currentValues.forEach(el => el.addEventListener("click", showOptions));

function closest(el, className) {
  while ((el = el.parentElement) && !el.classList.contains(className));
  return el;
}

function _toggleClass(el, className) {
  el.classList.toggle(className);
}

function showOptions(e) {
  const el = e.target;
  const item = closest(el, "item");
  _toggleClass(item.querySelector(".pick__list"), "show");
}
