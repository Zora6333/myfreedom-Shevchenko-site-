fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });


const city = "Minsk";
const units = "metric";
const apiKey = "a94d0a5ac08570add4b47b8da933f247";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

const currentDate = new Date().toLocaleDateString();

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // добавляем данные в HTML разметку
    document.getElementById("city").textContent = `${data.city.name}, ${data.city.country}`;
    document.getElementById("date").textContent = currentDate;

    // получаем данные о текущей погоде из первого элемента массива "list"
    const currentWeather = data.list[0];
    const currentTemperature = Math.round(currentWeather.main.temp);
    const currentDescription = currentWeather.weather[0].description;

    // добавляем данные о текущей погоде на страницу
    document.querySelector(".current-weather .temperature").textContent = `${currentTemperature} °C`;
    document.querySelector(".current-weather .description").textContent = currentDescription;

    // получаем список прогнозов на каждый день
    const forecasts = data.list.filter((item, index) => {
      return index % 8 === 0;
      
    });

    // добавляем прогнозы на страницу
    const forecastContainer = document.querySelector(".forecast");
    forecasts.forEach(forecast => {

      const date = new Date(forecast.dt_txt).toLocaleDateString();
      const temperature = Math.round(forecast.main.temp);
      const description = forecast.weather[0].description;
      const windSpeed = forecast.wind.speed;
      const iconCode = forecast.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      const iconElement = document.createElement("img");
      iconElement.setAttribute("src", iconUrl);
      iconElement.setAttribute("alt", forecast.weather[0].description);


      const forecastItem = document.createElement("div");
      forecastItem.classList.add("forecast-item");

      const dateElement = document.createElement("div");
      dateElement.classList.add("date");
      dateElement.textContent = date;

      const temperatureElement = document.createElement("div");
      temperatureElement.classList.add("temperature");
      temperatureElement.textContent = `${temperature} °C`;

      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("description");
      descriptionElement.textContent = description;

      const windElement = document.createElement("div");
      windElement.classList.add("wind");
      windElement.textContent = `${windSpeed} m/s`;

      forecastItem.appendChild(iconElement);
      forecastItem.appendChild(dateElement);
      forecastItem.appendChild(temperatureElement);
      forecastItem.appendChild(descriptionElement);
      forecastItem.appendChild(windElement);
      forecastContainer.appendChild(forecastItem);
    });
  })
  .catch(error => {
    console.error(error);
  });
