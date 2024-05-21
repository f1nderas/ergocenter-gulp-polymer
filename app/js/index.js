import "./components/aside";
import "./components/main";

function toggleParameters() {
  const toggleSection = document.getElementById("toggle-section");
  const toggleButton = document.getElementById("toggle-button");
  if (toggleSection.style.display === "none") {
    toggleSection.style.display = "block";
    toggleButton.textContent = "Меньше параметров";
  } else {
    toggleSection.style.display = "none";
    toggleButton.textContent = "Больше параметров";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("toggle-button")
    .addEventListener("click", toggleParameters);
});

// function adjustMainMargin() {
//   const aside = document.querySelector(".aside");
//   const main = document.querySelector(".main");

//   const asideWidth = aside.offsetWidth;
//   main.style.marginLeft = `${asideWidth}px`;
// }

// window.addEventListener("load", adjustMainMargin);
// window.addEventListener("resize", adjustMainMargin);
