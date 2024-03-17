const api_key = "24e4c93b452fd29f14907d4b867e9b0f";
const dif_kelvin = 273.15;
const url_base = "https://api.openweathermap.org/data/2.5/weather";
const icon_url = "https://openweathermap.org/img/wn/";

const button = document.getElementById("botonBusqueda");
const input = document.querySelector("#ciudadEntrada");

button.addEventListener("click", () => {
  const city_name = input.value;
  if (city_name) {
    make_fetch(city_name);
  }
});

function make_fetch(city_name) {
  response = fetch(`${url_base}?q=${city_name}&appid=${api_key}`)
    .then((response) => response.json())
    .then((response) => show_data(response));
}

function show_data({ name, main, weather }) {
  const datos_clima = document.getElementById("datosClima");
  datos_clima.innerHTML = "";

  const { temp, feels_like, temp_max, temp_min, pressure, humidity } = main;
  const description = weather[0].description;
  const icon = weather[0].icon;

  const title = document.createElement("h2");
  title.textContent = name;

  const temp_info = document.createElement("p");
  temp_info.textContent = `Actual temperature: ${conversor_temp(temp)} °C`;

  const more_temp_info = document.createElement("p");
  more_temp_info.textContent = `Feels like: ${conversor_temp(
    feels_like
  )}°C  Min temp: ${conversor_temp(temp_min)}°C  Max temp: ${conversor_temp(
    temp_max
  )}°C`;

  const other_weather_info = document.createElement("p");
  other_weather_info.textContent = `Pressure: ${pressure} hPa  Humidity: ${humidity}%`;

  const temp_description = document.createElement("p");
  temp_description.textContent = description;

  const icon_info = document.createElement("img");
  icon_info.src = `${icon_url}${icon}@2x.png`;

  datos_clima.appendChild(title);
  datos_clima.appendChild(temp_info);
  datos_clima.appendChild(more_temp_info);
  datos_clima.appendChild(other_weather_info);
  datos_clima.appendChild(temp_description);
  datos_clima.appendChild(icon_info);
}

function conversor_temp(temp) {
  return Math.round(temp - dif_kelvin);
}
