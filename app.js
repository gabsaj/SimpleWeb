"use strict";

const sidebar = document.querySelector(".nav");

function sidebarExtend() {
  if (sidebar.style.width === "80px") {
    sidebar.style.width = "220px";
    sidebar.style.transition = "150ms";
  } else {
    sidebar.style.width = "80px";
    sidebar.style.transition = "150ms";
  }
}
