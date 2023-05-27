const button = document.querySelector(".button");
function openText() {
  let text = document.querySelector("p");
  let headline = document.querySelector("h1");
  text.classList.toggle("animate-paragraph");
  headline.classList.toggle("animate-header");
}

button.addEventListener("click", openText);
