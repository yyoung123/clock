const API_KEY = config.apikey;
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(`You live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // console.log(url);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherBox = document.querySelector("#weather li:first-child");
      const weatherIconCode = data.weather[0].icon;
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `images/icon/${weatherIconCode}.png`;
      weatherIcon.alt = "icon";
      weatherBox.appendChild(weatherIcon);

      const weather = document.querySelector("#weather li:first-child span");
      const city = document.querySelector("#weather li:last-child span");
      city.innerText = data.name;
      // console.log(data.name, data.weather[0].main);
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    })
  );
}

function onGeoError() {
  alert("Can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
