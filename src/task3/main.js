// const apiUrl = 'https://restcountries.com/v3.1/name/azerbaijan';

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const country = data[0];
//         document.getElementById('country-name').textContent = country.name.common;
//         document.getElementById('country-flag').src = country.flags.svg;
//         document.getElementById('country-area').textContent = country.area;
//         document.getElementById('country-coat-of-arms').src = country.coatOfArms.svg || '';
//         document.getElementById('country-capital').textContent = country.capital ? country.capital[0] : 'Bilinmir';
//     })
//     .catch(error => {
//         console.error('Xəta baş verdi:', error);
//     });
const name = document.querySelector("ad")
const area = document.querySelector("area")
const capital = document.querySelector("capital")
const flag = document.querySelector(".flag")
const gerb = document.querySelector(".gerb")

fetch("https://restcountries.com/v3.1/name/azerbaijan")
.then(res=> res.json())
.then(data=>  data.forEach(item => {
    console.log(item.coatOfArms.png)
        name.innerHTML = `Country: ${item.name.common}`
        flag.src = `${item.flags.png}`
        area.innerHTML = `Area: ${item.area} km`
        capital.innerHTML = `Capital: ${item.capital}`
        gerb.src = `${item.coatOfArms.png}`
  }));



