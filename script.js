// "use strict";

// let zaskrolujAlzabox = document.querySelector(".scroll__Alzabox");
// zaskrolujAlzabox.addEventListener("click", function () {
//   zaskrolujAlzabox.scrollIntoView({
//     // block: "start",
//     behavior: "smooth",
//     // inline: "start",
//   });
// });

function scrollToSection(targetSectionId) {
  var targetElement = document.getElementById(targetSectionId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
