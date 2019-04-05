function showOptions(e) {
  const el = e.target;
  const item = closest(el, "item");
  toggleClass(item.querySelector(".pick__list"), "show");
}

function hideOption(el) {
  const item = closest(el, "item");
  removeClass(item.querySelector(".pick__list"), "show");
}

function hideOptions(e) {
  const current = e.target;
  const pickList = document.querySelectorAll(".pick__list.show");
  pickList.forEach(el => {
    if (
      !el.contains(current) &&
      !hasClass(current, "picker-value") &&
      hasClass(el, "show")
    ) {
      toggleClass(el, "show");
    }
  });
}

function updatePicker(type, value) {
  switch (type) {
    case "editorBackgroundColor":
      const editor = document.querySelector(".picker-value.editor");
      editor.style.background = value;
      hideOption(editor);
      break;
    case "viewerBackgroundColor":
      const viewer = document.querySelector(".picker-value.viewer");
      viewer.style.background = value;
      hideOption(viewer);
      break;
    case "avatarBorderRadius":
      updateShapePicker(value);
      break;
  }
}

function updateShapePicker(prop) {
  const shape = document.querySelector(".picker-value.shape");
  const values = {
    round: "circle",
    rounded: "square-rounded",
    square: "square"
  };

  shape.className = "picker-value shape " + values[prop];
  hideOption(shape);
}
