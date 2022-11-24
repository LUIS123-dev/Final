//Variáveis e seleção de elementos

const apiKey = "fb69ee8ce5babaa6413a67da683d6c9c";
const apiCountryURL = "https://countryflagsapi.com/png/";




const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherData = document.querySelector("#weather-data");

//Funções
const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWheatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    //Por que o main ? ***********************
    tempElement.innerText = parseInt(data.main.temp)
    //porque data.weather[0].description **************8
    descElement.innerText = data.weather[0].description
    //inserindo
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    weatherData.classList.remove("hide")
};


//Eventos

searchBtn.addEventListener("click", (e) => {

    //pesquisar mais sobre e.preventDefault()
    //vai barrar o envio do formulario.
    e.preventDefault()

    const city = cityInput.value;

    showWheatherData(city);

});

cityInput.addEventListener("keyup", (e) => {

    if (e.code === "Enter") {
        const city = e.target.value;

        showWheatherData(city);
    }
})

function home(){
    window.location.href = "../../index.html";
  }

