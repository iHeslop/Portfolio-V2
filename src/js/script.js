function updateSection(section) {
  let prev = document.querySelector(".nav-indicator");
  prev.classList.remove("nav-indicator");
  let curr = document.getElementById(section);
  curr.classList.add("nav-indicator");
}
