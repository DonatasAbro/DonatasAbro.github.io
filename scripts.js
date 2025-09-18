function removeOverlay() {
  const overlayElement = document.getElementById("faded-overlay");
  overlayElement.remove();
  document.body.style = "";
  const bodyContentElement = document.getElementById("body-content");
  bodyContentElement.style = "";
}

function playAudio() {
  console.log("🎶");
  const audioElement = document.getElementById("audio_1");
  audioElement.volume = 0.5;
  audioElement.play();
  removeOverlay();
}

function dontPlayAudio() {
  const audioElement = document.getElementById("audio_1");
  audioElement.remove();
  removeOverlay();
}
