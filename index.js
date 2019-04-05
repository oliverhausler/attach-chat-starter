var avatarBorderRadius = "round";
var viewerBackgroundColor = "#01AAEA";
var editorBackgroundColor = "#4D368A";

var colors = [
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

var avatarsList = document.querySelector(".avatars__list");
avatarsList.addEventListener("click", function(e) {
  updateChat({ avatarBorderRadius: e.target.value });
});

new ColorPicker({
  id: "color-viewer",
  colors: colors,
  defaultValue: viewerBackgroundColor,
  onChange: function(newColor) {
    updateChat({ viewerBackgroundColor: newColor });
  }
});

new ColorPicker({
  id: "color-editor",
  colors: colors,
  defaultValue: editorBackgroundColor,
  onChange: function(newColor) {
    updateChat({ editorBackgroundColor: newColor });
  }
});

var updateChat = function({ avatarBorderRadius, viewerBackgroundColor, editorBackgroundColor }) {
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
  avatarBorderRadius: avatarBorderRadius,
  viewerBackgroundColor: viewerBackgroundColor,
  editorBackgroundColor: editorBackgroundColor
});
