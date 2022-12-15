function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesCityNameElement = document.querySelector("#city-name-la");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  
  losAngelesCityNameElement.innerHTML = "Los Angeles";
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
  
  let parisElement = document.querySelector("#paris");
  let parisCityNameElement = document.querySelector("#city-name-p");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  
  parisCityNameElement.innerHTML = "Paris";
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
  }

  function updateCity(event) {
    let cityElement = document.querySelector("#cities");
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);

    cityElement.innerHTML += `
      <div class="clock-display" id="los-angeles">
        <div>
          <div class="city">${cityName}</div>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
         </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
  }

  let citiesSelect = document.querySelector("#city");
  citiesSelect.addEventListener("change", updateCity); 

  updateTime();
  setInterval(updateTime, 1000);