gsap.defaults({ autoAlpha: 0, ease: "linear" });

gsap.fromTo(
  ".heading__container",
  {
    autoAlpha: 0,
    y: "+=300",
  },
  {
    duration: 1,
    autoAlpha: 1,
    y: "-=300",
  }
);

const modal = document.querySelector(".login__modal");
const unlockButton = document.querySelector(".unlock__button");
const cancelButton = document.querySelector(".cancel__button");
const background = document.querySelector(".background");
unlockButton.addEventListener("click", () => {
  modal.classList.add("login__modal--active");
  background.classList.add("background--active");
});

cancelButton.addEventListener("click", () => {
  modal.classList.remove("login__modal--active");
  background.classList.remove("background--active");
});
background.addEventListener("click", () => {
  modal.classList.remove("login__modal--active");
  background.classList.remove("background--active");
});
