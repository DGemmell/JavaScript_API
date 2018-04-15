var weather;

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  weather = JSON.parse(jsonString);
  populateList(forecast);
};

  const app = function(){
    const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3351093e25c30f219696047357c3f23f";
    // const url ="https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json";
    // const button = document.getElementById('beer-list');
    // button.addEventListener('click', function(){
    makeRequest(url, requestComplete);
  }



// list types of weather
  const populateList = function(forecast){
    const ul = document.getElementById("weather-list");
    forecast.forEach(function(list){
      var li = document.createElement("li");
      li.innerText = list.weather.main;
      ul.appendChild(li);

    });
  }

  // const populateList = function(beers){
  //   const ul = document.getElementById("beer-list");
  //   beers.forEach(function(beer){
  //   // for (beer of beers){
  //     var li = document.createElement("li");
  //     li.innerText = beer.name;
  //     ul.appendChild(li);
  //
  //   });
  // }


window.addEventListener('load', app);
