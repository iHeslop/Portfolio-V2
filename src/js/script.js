function displayText(txt) {
  let curr = document.getElementById(txt + "Text");
  curr.classList.contains("_show")
    ? ((curr.style.opacity = "0"),
      setTimeout(function () {
        (curr.style.display = "none"), curr.classList.remove("_show");
      }, 500))
    : ((curr.style.display = "block"),
      setTimeout(function () {
        (curr.style.opacity = "0.75"), curr.classList.add("_show");
      }, 10),
      setTimeout(function () {
        (curr.style.opacity = "0"), curr.classList.remove("_show");
      }, 2e3));
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-links-list-item");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("nav-indicator");
      });
      document.querySelector(`[href="#${id}"]`).classList.add("nav-indicator");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
