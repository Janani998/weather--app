function drawWeather(d){
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    // var farenheit = Math.round(parseFloat(d.main.temp) -273.15)
    document.getElementById("description").innerHTML = d.weather[0].description;
    document.getElementById("temp").innerHTML = celcius+ "&deg;";
    document.getElementById("location").innerHTML = d.name;
}

function weatherBalloon(cityID){
    var key = "f6785d1c7184e3f7326e7f4094dbeff1";
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=" +
        cityID+
        "&appid=" +
        key
    )
    .then(function(resp){
        return resp.json();
    }).then(function(data){
        console.log(data);
        drawWeather(data);
    }).catch(function(){

    })
}

