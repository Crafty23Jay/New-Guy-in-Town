// API CONSUMPTION
// APPLICATION PROGRAMMING INTERFACE

// fetch (inbuilt)
// Axious (third party)
//Jquary (libary)

// Promise
//rejected, rejected, fulfilled


// async function getCountries(){
//     const result = await fetch('https://restcountries.com/v3.1/all')
//     const data = await result.json()
//     console.log(data)
// }

// getCountries()


const inputCountryEl = document.querySelector('#country-input')
const btnEl = document.querySelector('#btn')
const countryNameEl = document.querySelector('#country-name')
const flagEl = document.querySelector('#flag-img')
const coaEl = document.querySelector('#coa-img')
const commonEl = document.querySelector('#common')
const officialEl = document.querySelector('#official')
const mapEl = document.querySelector('#map')
const continentEl = document.querySelector('#continent')
const regionEl = document.querySelector('#region')
const currencyEl = document.querySelector('#currency')

// function inputResult() =>{
//     inputCountryEl('')
// }


async function getOneCountry(country){
    const result = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await result.json()
    console.log(data)
    countryNameEl.textContent=` Name: ${data[0].name.common}`
    coaEl.setAttribute('src',data[0].coatOfArms.png)
    flagEl.setAttribute('src',data[0].flags.png)
    officialEl.textContent=data[0].name.official
    mapEl.setAttribute('href',data[0].maps.googleMaps)
    continentEl.textContent=`Continent: ${data[0].region}`
    regionEl.textContent=`Region: ${data[0].subregion}`
    currencyEl.textContent=`Currency: ${data[0].currencies.XAF.name}`
} 


btnEl.addEventListener('click', function(){
    console.log(inputCountryEl.value)
    getOneCountry(inputCountryEl.value)
    inputCountryEl("")
    
})

// getOneCountry('nigeria')