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

function getFullYearsSinceVilnius2022() {
  const target = new Date("2022-10-10T08:00:00+03:00");
  const now = new Date();

  let years = now.getFullYear() - target.getFullYear();
  let months = now.getMonth() - target.getMonth();
  let days = now.getDate() - target.getDate();

  // Adjust if we haven't reached the anniversary yet this year
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
  }

  return years;
}

function setYearsOfExperience() {
  const yearsOfExperience = document.getElementsByClassName(
    "years-of-experience",
  )[0];
  yearsOfExperience.innerHTML = getFullYearsSinceVilnius2022();
}

function setCurrentYear() {
  const currentYear = document.getElementsByClassName("current-year")[0];
  currentYear.innerHTML = new Date().getFullYear();
}

// Run functions on load
(() => {
  setYearsOfExperience();
  setCurrentYear();
})();
