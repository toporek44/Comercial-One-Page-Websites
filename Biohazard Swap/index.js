gsap.defaults({ autoAlpha: 0, ease: "linear" });

gsap.fromTo(
  ".biohazard",
  {
    autoAlpha: 1,
  },
  {
    scale: 0.5,
    duration: 1.5,
    rotate: 360,
  }
);

gsap.fromTo(
  ".banner",
  {
    autoAlpha: 1,
  },
  {
    ease: "Power3.easeOut",
    autoAlpha: 1,
    duration: 1,
    y: "-=100%",
    delay: 1.5,
  }
);

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
    delay: 1.6,
  }
);

gsap.fromTo(
  "#barrel",
  {
    autoAlpha: 0,
    y: "+=400",
  },
  {
    duration: 1,
    autoAlpha: 1,
    y: "-=400",
    delay: 1.8,
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
