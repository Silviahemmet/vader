// ======================================
// Silviahemmet Dashboard
// Steg 12.3 - Open-Meteo + Clock
// MASTER design remains untouched
// ======================================
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = time;
    }
}


setInterval(updateClock, 1000);
updateClock();


// Open-Meteo Helsingfors

async function loadWeather() {

    const url =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=60.1699" +
    "&longitude=24.9384" +
    "&current=temperature_2m,weather_code,wind_speed_10m" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min" +
    "&timezone=Europe%2FHelsinki";


    const response = await fetch(url);
    const data = await response.json();


    console.log(data);


    const temp =
        document.getElementById("temperature");

    if(temp){
        temp.textContent =
        Math.round(data.current.temperature_2m) + "°C";
    }


    const wind =
        document.getElementById("wind");

    if(wind){
        wind.textContent =
        "Vind " +
        Math.round(data.current.wind_speed_10m)
        + " km/h";
    }


}


loadWeather();
