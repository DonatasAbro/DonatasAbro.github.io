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

function getFullYearsSince(targetYear) {
  const target = new Date(targetYear);
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
  yearsOfExperience.innerHTML = getFullYearsSince("2022-10-10T08:00:00+03:00");
}

function setYearsOld() {
  const yearsOld = document.getElementsByClassName("years-old")[0];
  yearsOld.innerHTML = getFullYearsSince("1997-04-11T00:00:00+03:00");
}

function setCurrentYear() {
  const currentYear = document.getElementsByClassName("current-year")[0];
  currentYear.innerHTML = new Date().getFullYear();
}

// Run functions on load
(() => {
  setYearsOld();
  setYearsOfExperience();
  setCurrentYear();
})();
