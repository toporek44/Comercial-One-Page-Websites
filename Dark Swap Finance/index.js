

const modal = document.querySelector(".login__modal");
const unlockButtons = document.querySelectorAll(".unlock__button");
const cancelButton = document.querySelector(".cancel__button");
const background = document.querySelector(".background");

unlockButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("login__modal--active");
    background.classList.add("background--active");
  });
});
cancelButton.addEventListener("click", () => {
  modal.classList.remove("login__modal--active");
  background.classList.remove("background--active");
});

background.addEventListener("click", () => {
  modal.classList.remove("login__modal--active");
  background.classList.remove("background--active");
});
