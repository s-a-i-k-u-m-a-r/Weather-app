const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fde930d237mshe5207ed7cf5aa29p1f0ef4jsn19fa5f2e8015",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
function createRaindrop() {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');
  raindrop.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(raindrop);

  setTimeout(() => {
    raindrop.remove();
  }, 1000); 
}
function convertUnixTimestampToTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return timeString;
}
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = convertUnixTimestampToTime(response.sunrise);
      sunset.innerHTML = convertUnixTimestampToTime(response.sunset);
      if(city=="delhi"){
        cityName.innerHTML = city
        Cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        Humidity.innerHTML = response.humidity
        Humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        Wind_speed.innerHTML = response.wind_speed
        Wind_speed2.innerHTML = response.wind_speed
        Wind_degrees.innerHTML = response.wind_degrees
        Sunrise.innerHTML = convertUnixTimestampToTime(response.sunrise)
        Sunset.innerHTML = convertUnixTimestampToTime(convertUnixTimestampToTime(response.sunset))
    }
  
    else if(city=="pune"){
    Cloud_pctpune.innerHTML = response.cloud_pct
    temppune.innerHTML = response.temp
    Humiditypune.innerHTML = response.humidity
    min_temppune.innerHTML = response.min_temp
    max_temppune.innerHTML = response.max_temp
    Wind_speedpune.innerHTML = response.wind_speed
    Wind_degreespune.innerHTML = response.wind_degrees
    Sunrisepune.innerHTML = convertUnixTimestampToTime(response.sunrise)
    Sunsetpune.innerHTML = convertUnixTimestampToTime(convertUnixTimestampToTime(response.sunset))
    }
    else if(city=="mumbai")
    {
    Cloud_pctmumbai.innerHTML = response.cloud_pct
    tempmumbai.innerHTML = response.temp
    Humiditymumbai.innerHTML = response.humidity
    min_tempmumbai.innerHTML = response.min_temp
    max_tempmumbai.innerHTML = response.max_temp
    Wind_speedmumbai.innerHTML = response.wind_speed
    Wind_degreesmumbai.innerHTML = response.wind_degrees
    Sunrisemumbai.innerHTML = convertUnixTimestampToTime(response.sunrise)
    Sunsetmumbai.innerHTML = convertUnixTimestampToTime(response.sunset)
    }
    else if(city=="hyderabad")
    {
    Cloud_pcthyderbad.innerHTML = response.cloud_pct
    temphyderbad.innerHTML = response.temp
    Humidityhyderbad.innerHTML = response.humidity
    min_temphyderbad.innerHTML = response.min_temp
    max_temphyderbad.innerHTML = response.max_temp
    Wind_speedhyderbad.innerHTML = response.wind_speed
    Wind_degreeshyderbad.innerHTML = response.wind_degrees
    Sunrisehyderbad.innerHTML = convertUnixTimestampToTime(response.sunrise)
    Sunsethyderbad.innerHTML = convertUnixTimestampToTime(response.sunset)
    }
    else if(city=="chennai")
    {
    Cloud_pctchennai.innerHTML = response.cloud_pct
    tempchennai.innerHTML = response.temp
    Humiditychennai.innerHTML = response.humidity
    min_tempchennai.innerHTML = response.min_temp
    max_tempchennai.innerHTML = response.max_temp
    Wind_speedchennai.innerHTML = response.wind_speed
    Wind_degreeschennai.innerHTML = response.wind_degrees
    Sunrisechennai.innerHTML = convertUnixTimestampToTime(response.sunrise)
    Sunsetchennai.innerHTML = convertUnixTimestampToTime(response.sunset)
    }
     
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("pune")
getWeather("mumbai")
getWeather("hyderabad")
getWeather("chennai")

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  const toggleText = document.getElementById("toggle-text");
  toggleText.textContent = body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// Check if dark mode is already enabled from previous session
if (localStorage.getItem("darkModeEnabled")) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

//   if (city == "Newyork") {
    //     cloud_pct_ny.innerHTML = response.cloud_pct;
    //     temp_ny.innerHTML = response.temp;
    //     feels_like_ny.innerHTML = response.feels_like;
    //     humidity_ny.innerHTML = response.humidity;
    //     min_temp_ny.innerHTML = response.min_temp;
    //     max_temp_ny.innerHTML = response.max_temp;
    //     wind_speed_ny.innerHTML = response.wind_speed;
    //     wind_degrees_ny.innerHTML = response.wind_degrees;
    //     sunrise_ny.innerHTML = convertUnixTimestampToTime(response.sunrise);
    //     sunset_ny.innerHTML = convertUnixTimestampToTime(convertUnixTimestampToTime(response.sunset));
    //   }

    