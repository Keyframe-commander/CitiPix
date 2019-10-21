function backgroundImage() {
  return document.querySelector("#container");
}

function clearBackgroundImage() {
  backgroundImage().classList.remove("nyc");
  backgroundImage().classList.remove("sf");
  backgroundImage().classList.remove("la");
  backgroundImage().classList.remove("austin");
  backgroundImage().classList.remove("sydney");
  backgroundImage().classList.remove("orlando");
}
function setNycBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("nyc");
}

function setSfBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("sf");
}

function setLaBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("la");
}

function setAustinBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("austin");
}

function setSydneyBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("sydney");
}
function setOrlandoBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("orlando");
}
