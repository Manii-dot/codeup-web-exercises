console.log("weather map");

/*
how to get one day of weather to appear with the html
 and then to five days
 */

//$("#find").on()('click', function(){


$.get("https://api.openweathermap.org/data/2.5/forecast", {
    q: "Killeen, US",
    appid: openWeatherKey,
    units:"imperial"
}).done(function(results){
console.log(results);
// Displaying the date
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
$('.date').html("<b>" + day + "-" + month + "-" + year + "</b>");
    let fiveDaysForecast = [0, 1, 9, 17, 25, 33];
    for(let days of fiveDaysForecast){

    }
    // displaying the temperature, icon, desc, hum, wind, press
    $('.temperature').html(results.list[0].main.temp_max+"/"+results.list[0].main.temp_min+ "'F");
    $('img').attr("src", "http://openweathermap.org/img/w/" + results.list[0].weather[0].icon+ ".png")
    $('.description').html("Description: " +results.list[0].weather[0].description);
    $('.humidity').html("Humidity: " +results.list[0].main.humidity);
    $('.wind').html("Wind: "+results.list[0].wind.speed);
    $('.pressure').html("Pressure: " +results.list[0].main.pressure);
});

