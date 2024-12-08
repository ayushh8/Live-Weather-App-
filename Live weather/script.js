async function getWeather() {
    const apiKey = '68bee99d57e19edc895963bb72f55462'; 
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            alert('City not found. Please enter a valid city name.');
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}
