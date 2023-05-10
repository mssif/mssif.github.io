let menuButton = document.getElementById("mButton");
let menuElement = document.getElementById("theoryMenu");
let stickyRow = document.getElementsByClassName("stickyRow")[0];
let menuIsOpen = true;

menuButton.addEventListener('click', () => {
  if (menuIsOpen == true) {
    menuElement.classList.add("closeMenuStyle");
    menuElement.classList.remove("openMenuStyle");
    stickyRow.classList.add("menuAdaptLeft");
    stickyRow.classList.remove("menuAdaptRight");
    document.getElementById("menuArrow").src="images/arrowRight.png";
    menuIsOpen = false;
  } else {
    menuElement.classList.add("openMenuStyle");
    menuElement.classList.remove("closeMenuStyle");
    stickyRow.classList.add("menuAdaptRight");
    stickyRow.classList.remove("menuAdaptLeft");
    document.getElementById("menuArrow").src="images/arrowLeft.png";
    menuIsOpen = true;
  }
});

theoryMenu.addEventListener('click', () => {
  menuElement.classList.add("closeMenuStyle");
  menuElement.classList.remove("openMenuStyle");
  stickyRow.classList.add("menuAdaptLeft");
  stickyRow.classList.remove("menuAdaptRight");
  document.getElementById("menuArrow").src="images/arrowRight.png";
  menuIsOpen = false;
});
