function getWeather() {
    const apiKey = '43df2bd385d7137581397bdc14a6e94a'; //  Your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=germany&appid=43df2bd385d7137581397bdc14a6e94a'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
