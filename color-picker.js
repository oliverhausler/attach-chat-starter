var createElement = function(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstChild;
};

var ColorPicker = function({ id, defaultValue, colors, onChange }) {
  var listEl = document.querySelector("#" + id);
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
        (color === defaultValue ? "checked" : "") +
        ">"
    );
    var label = createElement(
      '<label for="' +
        color +
        id +
        '" class="color circle" style="background:' +
        color +
        ';"></label>'
    );
    listEl.appendChild(input);
    listEl.appendChild(label);
  });
  listEl.addEventListener("click", function(e) {
    onChange(e.target.value);
  });
};
