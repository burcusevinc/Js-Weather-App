//api url:
const url = 'https://api.openweathermap.org/data/2.5/'

//api key:
const key = '4bac79ef5a5683b6a00ee0516595bd10'


const setQuery = (e) => {
    //event'in keyCode'u 13'e eşit ise, entera basılmıştır.
    if(e.keyCode ==13) {
        //entera basıldığında çalışacak olan fonksiyon, inputa yazılan değeri parametre alır.
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    //dönen promise
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

//parametreden dönen result(weather)
const displayResult = (result) => {
    //console.log(result);
    let city = document.querySelector('.city')
    //name ve sys.country değerlerine, result logundan bakıp ulaşıldı
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`

}

//request; inputa yazılan şehire göre oluşturulacak.
const searchBar = document.getElementById('searchBar')
//enter tuşuna basıldığında şehir girilmiş olacak, setQuery fonk. çalışacak.
searchBar.addEventListener('keypress',setQuery)