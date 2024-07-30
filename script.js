const apiKey = '0c449d157a8b9de6f21d52bcf8e31189'; 

document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
