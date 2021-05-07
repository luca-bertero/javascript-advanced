import {colorArray, result, description } from "./view.js"

const apitoken = process.env.API_TOKEN;
const inputarea = document.querySelector(".input_area");
const searchButton = document.querySelector(".search-btn");
const geolocButton = document.querySelector(".geo-btn");
const container = document.querySelector(".weather-box");

searchButton.onclick = searchStart;
geolocButton.onclick = searchGeo;

function searchStart(event) {
  event.preventDefault();
  var city = inputarea.value;
  if(city){

    var url = "https://api.waqi.info/feed/" + city +"/?token=" + apitoken;
    fetch(url)
    .then(result => result.json())
    .then(data => {
      if (data.status === "ok") {
        Dom(data);
      }
      else{
        MsgError("Wrong query");
      }
    })
    .catch(error => MsgError(error));
  }
  else{
    MsgError("inserisci una città");
  }
}


function searchGeo(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(
    position => {
      var pos = "geo:" + position.coords.latitude + ";"
      + position.coords.longitude;
  
  var url = "https://api.waqi.info/feed/" + pos +"/?token=" + apitoken;
  fetch(url)
  .then(result => result.json())
  .then(data => {
    if (data.status === "ok") {
      Dom(data);
    }
    else{
      MsgError("Wrong query");
    }
  })
  .catch(error => MsgError(error));

  });
}

function MsgError(error){
  cleanDOM();
  generateError(error);
}

function generateError(error){
  
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error-box");
  container.appendChild(errorMsg);
  
  errorMsg.innerText = "ERRORE \n" + error;
  
}

function Dom(data){
  cleanDOM();
  changeDOM(data);
}

function cleanDOM() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function changeDOM(info){

  var aqi = info.data.aqi;
  var city_name = info.data.city.name;

  genElementDOM(aqi,city_name);
}

function genElementDOM(aqi,city_name){

  //div città
  const city_box = document.createElement("div");
  city_box.classList.add("city-container");
  container.appendChild(city_box);
  
  //div aqi-box
  const aqi_box = document.createElement("div");
  aqi_box.classList.add("aqi-container");
  container.appendChild(aqi_box);
  
  //city name
  const cityH = document.createElement("h2");
  cityH.textContent = city_name;
  city_box.appendChild(cityH);
  
  //paragraph for display aqi value
  const aqi_p = document.createElement("p")
  aqi_p.textContent="AQI value: " + aqi;
  aqi_box.appendChild(aqi_p);

  //div result_box
  const result_box = document.createElement("div");
  result_box.classList.add("result-box");
  container.appendChild(result_box);

  //div description_box
  const description_box = document.createElement("div");
  description_box.classList.add("description-box");
  container.appendChild(description_box);

  styleDom(aqi,aqi_box,result_box,description_box);
}

function styleDom(aqi_value,aqi_box,result_box,description_box){
  
  switch(true){

    case aqi_value <= 50:
      aqi_box.style.background = colorArray[0];
      result_box.innerHTML = result[0];
      description_box.innerHTML = description[0];
    break;
    
    case aqi_value <= 100:
      aqi_box.style.background = colorArray[1];
      result_box.innerHTML = result[1];
      description_box.innerHTML = description[1];
    break;

    case aqi_value <= 150:
      aqi_box.style.background = colorArray[2];
      result_box.innerHTML = result[2];
      description_box.innerHTML = description[2];
    break;

    case aqi_value <= 200:
      aqi_box.style.background = colorArray[3];
      result_box.innerHTML = result[3];
      description_box.innerHTML = description[3];
    break;

    case aqi_value <= 300:
      aqi_box.style.background = colorArray[4];
      result_box.innerHTML = result[4];
      description_box.innerHTML = description[4];
    break;
    
    case aqi_value > 300:
      aqi_box.style.background = colorArray[5];
      result_box.innerHTML = result[5];
      description_box.innerHTML = description[5];
    break;

    default:
      aqi_box.style.background = colorArray[6];
      result_box.innerHTML = result[6];
      description_box.innerHTML = description[6];
    break;

  }
  
}


