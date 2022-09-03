function handleAudio() {
  // play audio
  const audio = document.getElementById("audio");
  const btnAudio = document.getElementById("audio-button");

  btnAudio.addEventListener("click", () => {
    audio.paused ? audio.play() : audio.pause();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  handleAudio();
});
