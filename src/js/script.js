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

// Navigation Functionality
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-links-list-item");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver((entries) => {
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

// Enter loading screen
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function enter() {
  const enterView = document.querySelector(".enterView"),
    text1 = enterView.querySelector(".enterView-text__1"),
    text2 = enterView.querySelector(".enterView-text__2"),
    image = enterView.querySelector(".enterView-image");

  await delay(1000);
  text1.style.transition = "opacity 0.8s";
  text2.style.transition = "opacity 0.8s";
  image.style.transition = "opacity 0.5s";

  text1.style.opacity = 1;
  text2.style.opacity = 1;
  image.style.opacity = 1;

  await delay(1500);

  text1.style.transition = "opacity 0.8s";
  text2.style.transition = "opacity 0.8s";
  enterView.style.transition = "opacity 1.2s";

  text1.style.opacity = 0;
  text2.style.opacity = 0;
  enterView.style.opacity = 0;

  setTimeout(() => {
    enterView.remove();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", enter);

//Change Theme

let isDarkTheme = false;

function changeTheme(theme) {
  const root = document.documentElement;
  const alpine = document.querySelector(".exp-alpine");
  const css = document.querySelector(".exp-css");
  const docker = document.querySelector(".exp-docker");
  const git = document.querySelector(".exp-git");
  const html = document.querySelector(".exp-html");
  const js = document.querySelector(".exp-js");
  const node = document.querySelector(".exp-node");
  const react = document.querySelector(".exp-react");
  if (theme === "light" && isDarkTheme) {
    root.style.setProperty("--c-bg", "#ece7e1");
    root.style.setProperty("--c-txt", "#1a1818");
    alpine.src = "/assets/tech/alpine-black.png";
    css.src = "/assets/tech/css-black.png";
    docker.src = "/assets/tech/docker-black.png";
    git.src = "/assets/tech/git-black.png";
    html.src = "/assets/tech/html-black.png";
    js.src = "/assets/tech/javascript-black.png";
    node.src = "/assets/tech/nodejs-black.png";
    react.src = "/assets/tech/reactjs-black.png";
    isDarkTheme = false;
  } else if (theme === "dark" && !isDarkTheme) {
    root.style.setProperty("--c-bg", "#1a1818");
    root.style.setProperty("--c-txt", "#ece7e1");
    alpine.src = "/assets/tech/alpine-white.png";
    css.src = "/assets/tech/css-white.png";
    docker.src = "/assets/tech/docker-white.png";
    git.src = "/assets/tech/git-white.png";
    html.src = "/assets/tech/html-white.png";
    js.src = "/assets/tech/javascript-white.png";
    node.src = "/assets/tech/nodejs-white.png";
    react.src = "/assets/tech/reactjs-white.png";
    isDarkTheme = true;
  }
}

// Display Project

function displayProject(id) {
  let project = document.getElementById("project-" + id);
  if (!project.classList.contains("active")) {
    project.style.display = "flex";
    project.classList.add("active");
  } else {
    project.style.display = "none";
    project.classList.remove("active");
  }
}
