const shapeList = document.querySelector(".shape__list");
const pickerValues = document.querySelectorAll(".picker-value");

const defaultEditorColor = "#4D368A";
const defaultViewerColor = "#9F14C0";
const colors = [
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
];

new ColorPicker({
  id: "color-editor",
  defaultValue: defaultEditorColor,
  colors: colors,
  onChange: function(newColor) {
    updateChatSDK({ editorColor: newColor });
    updatePicker("editor", newColor);
  }
});

new ColorPicker({
  id: "color-viewer",
  defaultValue: defaultViewerColor,
  colors: colors,
  onChange: function(newColor) {
    updateChatSDK({ viewerColor: newColor });
    updatePicker("viewer", newColor);
  }
});

document.addEventListener("click", hideOptions);
pickerValues.forEach(el => el.addEventListener("click", showOptions));
shapeList.addEventListener("click", function(e) {
  const shape = e.target.value;
  updateChatSDK({ shape });
  updatePicker("shape", shape);
});

const updateChatSDK = function({ editorColor, viewerColor, shape }) {
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
