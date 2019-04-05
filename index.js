const shapeList = document.querySelector(".shape__list");
const pickerValues = document.querySelectorAll(".picker-value");

const avatarBorderRadius = "round";
const editorBackgroundColor = "#4D368A";
const viewerBackgroundColor = "#9F14C0";

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
  defaultValue: editorBackgroundColor,
  colors: colors,
  onChange: function(newColor) {
    updateChat({ editorBackgroundColor: newColor });
    updatePicker("editorBackgroundColor", newColor);
  }
});

new ColorPicker({
  id: "color-viewer",
  defaultValue: viewerBackgroundColor,
  colors: colors,
  onChange: function(newColor) {
    updateChat({ viewerBackgroundColor: newColor });
    updatePicker("viewerBackgroundColor", newColor);
  }
});

document.addEventListener("click", hideOptions);
pickerValues.forEach(el => el.addEventListener("click", showOptions));
shapeList.addEventListener("click", function(e) {
  const shape = e.target.value;
  updateChat({ shape });
  updatePicker("avatarBorderRadius", shape);
});

const updateChat = function({ avatarBorderRadius, viewerBackgroundColor, editorBackgroundColor }) {
  if (avatarBorderRadius) {
    attachSdk.setProperty("attach:participants:avatar-border-radius", avatarBorderRadius);
  }
  if (viewerBackgroundColor) {
    attachSdk.setProperty("attach:chat:viewer-background-color", viewerBackgroundColor);
  }
  if (editorBackgroundColor) {
    attachSdk.setProperty("attach:chat:editor-background-color", editorBackgroundColor);
  }
};

updateChat({
  editorBackgroundColor: editorBackgroundColor,
  viewerBackgroundColor: viewerBackgroundColor,
  shape: avatarBorderRadius
});
