"use strict";

function scrollToSection(targetSectionId) {
  var targetElement = document.getElementById(targetSectionId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
