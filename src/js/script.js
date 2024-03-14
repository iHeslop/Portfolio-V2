function updateSection(section) {
  let prev = document.querySelector(".nav-indicator");
  prev.classList.remove("nav-indicator");
  let curr = document.getElementById(section);
  curr.classList.add("nav-indicator");
}

function displayText(a) {
  let b = document.getElementById(a + "Text");
  console.log(b);
  b.classList.contains("_show")
    ? ((b.style.opacity = "0"),
      setTimeout(function () {
        (b.style.display = "none"), b.classList.remove("_show");
      }, 500))
    : ((b.style.display = "block"),
      setTimeout(function () {
        (b.style.opacity = "0.75"), b.classList.add("_show");
      }, 10),
      setTimeout(function () {
        (b.style.opacity = "0"), b.classList.remove("_show");
      }, 2e3));
}
