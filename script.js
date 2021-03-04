"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
  `;
  console.log(countriesContainer);
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryDataAndNeighbour = function (country) {
//   //Ajax call country (1)
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//     //Render country (1)
//     renderCountry(data);
//     //Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     //Ajax call country (2)
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       //   console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

//getCountryDataAndNeighbour("portugal");
//getCountryDataAndNeighbour("croatia");
//getCountryDataAndNeighbour("usa");
// getCountryDataAndNeighbour("germany");

//callback hell looks messy - use promises to escape it
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//         setTimeout(() => {
//           console.log("5 second passed");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (
//     response
//   ) {
//     console.log(response);
//     return response.json().then(function (data) {
//       console.log(data);
//       renderCountry(data);
//     });
//   });
// };
// getCountryData("croatia");

// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = "fddfg";

//       if (!neighbour) return;

//       //country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💣💣💣💣💣`);
//       renderError(
//         `Something went wrong 💣💣💣💣💣 ${err.message}. Try again!!`
//       );
//     });
//   // .finaly(() => {
//   //   countriesContainer.style.opacity = 1;
//   // });
// };

// const getCountryData = function (country) {
//   //country 1
//   getJson(
//     `https://restcountries.eu/rest/v2/name/${country}, Country not found!`
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(data);
//       if (!neighbour) throw new Error("No neighbour found");
//       //country 2
//       return getJson(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}, Neighbour country not found!`
//       );
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💣💣💣💣💣`);
//       renderError(
//         `Something went wrong 💣💣💣💣💣 ${err.message}. Try again!!`
//       );
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// // Coding challange 1
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message}`));
// };

// whereAmI(43.5126272, 16.4626432);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log("Test start");
// setTimeout(() => {
//   console.log("0 sec timer");
// }, 0);
// Promise.resolve("resolved promise 1").then((res) => console.log(res));
// Promise.resolve("resolved promise 2").then((res) => {
//   for (let index = 0; index < 10000000000; index++) {}
//   console.log(res);
// });
// console.log("Test end");

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is going on...");
//   setTimeout(function () {
//     if (Math.random() > 0.5) resolve("You win!");
//     else reject(new Error("You lose!"));
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// //promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I waited for 1 second");
//   });

// Promise.resolve("res").then(() => console.log("fulfill"));
// Promise.reject(new Error("Error")).catch(() => console.error("rejected"));

// getPosition().then((pos) => console.log(pos));

// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       //console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message}`));
// };

// btn.addEventListener("click", whereAmI);

// //Coding challenge2

// const imgContainer = document.querySelector(".images");

// let currentImg;

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImg = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;

//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("Image not found error"));
//     });
//   });
// };

// createImg("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImg("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("image 2 loaded");
//     return wait(2);
//   })
//   .catch((err) => console.error(err));

//Async await is syntax suger for promises, looks prettier then callbacks hell

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //geolocation
  const pos = await getPosition();

  const { latitude: lat, longitude: lng } = pos.coords;

  //reverse geocoding
  const responseGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  );
  const dataGeo = await responseGeo.json();
  console.log(dataGeo);
  //country data
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log("First");
