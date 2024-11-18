document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modals = document.querySelectorAll(".modal");
  const terminal = document.querySelector(".terminal-content");

  // Dragging functionality
  cards.forEach((card) => {
    card.addEventListener("mousedown", startDrag);
    card.addEventListener("touchstart", startDrag);
  });

  function startDrag(e) {
    e.preventDefault();
    const card = e.target.closest(".card");
    let offsetX = e.clientX - card.offsetLeft;
    let offsetY = e.clientY - card.offsetTop;

    function moveCard(e) {
      card.style.left = `${e.clientX - offsetX}px`;
      card.style.top = `${e.clientY - offsetY}px`;
      card.style.zIndex = 10;
    }

    function stopDrag() {
      document.removeEventListener("mousemove", moveCard);
      document.removeEventListener("mouseup", stopDrag);
      card.style.zIndex = 1;
    }

    document.addEventListener("mousemove", moveCard);
    document.addEventListener("mouseup", stopDrag);
  }

  // Modal functionality
  document.querySelectorAll(".modal-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.target);
      modal.classList.add("active");
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", () => modal.classList.remove("active"));
  });

  // Terminal simulation
  const commands = ["Initializing...", "Loading modules...", "Complete!"];
  let i = 0;

  function typeCommand() {
    if (i < commands.length) {
      terminal.textContent += commands[i] + "\n";
      i++;
      setTimeout(typeCommand, 1000);
    }
  }
  typeCommand();
});
