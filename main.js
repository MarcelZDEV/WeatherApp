const api = {
    key: 'c8fb59692388fbc9563d8f8b750ecb90',
    base: "https://api.openweathermap.org/data/2.5/"
}

let search = document.querySelector('.search');
search.addEventListener('keypress', setQuery)

function setQuery(evt) {
    if (evt.keyCode === 13) {
        getResults(search.value)
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    document.querySelector('.location .city').innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    document.querySelector('.location .date').innerHTML = dateBuilder(now)
    document.querySelector('.weather .temp').innerHTML = `${Math.round(weather.main.temp)}<span>&deg</span>`
    document.querySelector('.weather .weather-type').innerHTML = weather.weather[0].main;
    document.querySelector('.lowest-highest').innerHTML = `${Math.round(weather.main.temp_min)}<span>&deg</span> / ${Math.round(weather.main.temp_max)}<span>&deg</span>`
}

function dateBuilder(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[date.getDay()];
    let dates = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear()

    return `${day} ${dates} ${month} ${year}`
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date()
let year = date.getFullYear()
let month = months[date.getMonth()]
let day = days[date.getDay()]

document.getElementById('date').innerHTML = day + " " + month + " " + year