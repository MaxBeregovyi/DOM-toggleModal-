document.querySelector(".btn").onclick = () => {
  toggleModal("Привіт 1");
  toggleModal(
    "Qui tempore modi et ipsa porro et nihil sequi ut alias saepe. Et corrupti enim non eveniet fuga sit illo enim hic repellendus earum."
  );
  toggleModal("Привіт 2");
};

function toggleModal(content) {
  let existedModals = document.querySelectorAll("dialog[open]");
  let offset = 0;

  if (existedModals[0]) {
    offset = Array.from(existedModals).reduce((acc, modal) => {
      return acc + modal.offsetHeight + 20;
    }, 0);
  }

  let modal = createModal(content, offset);
  document.querySelector("body").appendChild(modal);
}

function createModal(content, top = 0) {
  let modal = document.createElement("dialog");
  modal.innerText = content;
  modal.classList.add("active");
  modal.style.top = `${top}px`;
  modal.setAttribute("open", "");
  return modal;
}
