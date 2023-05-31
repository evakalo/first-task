const button = document.querySelector(".button");
function openText() {
  let text = document.querySelector("p");
  text.classList.toggle("animate-paragraph");
}

button.addEventListener("click", openText);
