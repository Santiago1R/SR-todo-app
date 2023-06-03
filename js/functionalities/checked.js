export const EventChecked = function (input, span) {
  if (input.checked) {
    span.style.color = "var(--Light-Grayish-Blue)";
    span.style.textDecoration = "line-through";
  } else {
    span.style.color = "var(--Ver-Dark-Grayish-Blue)";
    span.style.textDecoration = "none";
  }
};

