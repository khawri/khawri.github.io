function handleAudio() {
  // play audio
  const audio = document.getElementById("audio");
  const btnAudio = document.getElementById("audio-button");

  btnAudio.addEventListener("click", () => {
    audio.paused ? audio.play() : audio.pause();
  });
}

function playAudio() {
  const audio = document.getElementById("audio");
  audio.play();
}

function openModal() {
  const modalOpening = new bootstrap.Modal(
    document.getElementById("modal-opening")
  );
  const btnModalClose = document.querySelector(".modal-close");

  modalOpening.show();

  btnModalClose.addEventListener("click", playAudio);
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  handleAudio();
  openModal();
});
