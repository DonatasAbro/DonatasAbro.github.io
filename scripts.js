var casiopea_audio = new Audio("https://nonstopcasiopea.radioca.st/;");

function removeOverlay() {
  const overlayElement = document.getElementById("faded-overlay");
  overlayElement.remove();
  document.body.style = "";
  const bodyContentElement = document.getElementById("body-content");
  bodyContentElement.style = "";
}

function playAudio() {
  console.log("🎶");
  casiopea_audio.volume = 0.5;
  casiopea_audio.play();
  removeOverlay();
}

function setCurrentYear() {
  const currentYear = document.getElementsByClassName("current-year")[0];
  currentYear.innerHTML = new Date().getFullYear();
}

setCurrentYear();
