const mobileHamburger = document.querySelector("#mobile");
const sidePannel = document.querySelector(".side-pannel");
mobileHamburger.addEventListener("click", () => {
  if (sidePannel.style.display === "none") {
    sidePannel.style.display = "inline-block";
  } else {
    sidePannel.style.display = "none";
  }
});
