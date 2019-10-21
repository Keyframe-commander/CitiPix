document.addEventListener("DOMContentLoaded", function() {
  console.log;
  const selectCities = document.querySelector("select");
  selectCities.addEventListener("change", function(event) {
    console.log(event);
    const selectCiti = event.target.value;
    if (selectCiti === "la") {
      setLaBackgroundImage();
    } else if (selectCiti === "nyc") {
      setNycBackgroundImage();
    } else if (selectCiti === "sf") {
      setSfBackgroundImage();
    } else if (selectCiti === "austin") {
      setAustinBackgroundImage();
    } else if (selectCiti === "sydney") {
      setSydneyBackgroundImage();
    } else if (selectCiti === "orlando") {
      setOrlandoBackgroundImage();
    }
  });
});
