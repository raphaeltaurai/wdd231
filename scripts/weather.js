const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = "d7b550e8f4fcd45a1601942facd66407";
const city = "Trier";
const countryCode = "DE";

//Open weather API
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok)//checking if response is OK 
        {
            const data = await response.json(); //Storing response
            console.log(data);
            // displayResults(data); // uncomment when ready
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

apiFetch();

function dispalyResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0]}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
