function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesCityNameElement = document.querySelector("#city-name-la");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  
  losAngelesCityNameElement.innerHTML = "Los Angeles";
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
  
  let romeElement = document.querySelector("#rome");
  let romeCityNameElement = document.querySelector("#city-name-r");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeCityNameElement.innerHTML = "Rome";
  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
}
let cityInterval = null;
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){ 
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  clearInterval(cityInterval);

  setCityInterval(cityTimeZone, cityName);
  cityInterval = setInterval(setCityInterval, 1000, cityTimeZone, cityName);
}
function setCityInterval(cityTimeZone, cityName) { 
  let cityElement = document.querySelector("#cities");
  let cityTime = moment.tz(cityTimeZone);
  cityElement.innerHTML = `
    <div class="clock-display" id="los-angeles">
      <div>
        <div class="city">${cityName}</div>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div></div>
  `;
}

  let citiesSelect = document.querySelector("#city");
  citiesSelect.addEventListener("change", updateCity); 

  updateTime();
  setInterval(updateTime, 1000);