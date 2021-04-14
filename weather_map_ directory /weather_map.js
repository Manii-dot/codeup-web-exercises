console.log("weather map");

/*
how to get one day of weather to appear with the html
 and then to five days
 */

//$("#find").on()('click', function(){


$.get("https://api.openweathermap.org/data/2.5/onecall", {
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
    // displaying the temperature, icon, desc, hum, wind, press
    $('.temperature').html(results.main.temp_max+"/"+results.main.temp_min+ "'F");
    $('img').attr("src", "http://openweathermap.org/img/w/" + results.weather[0].icon+ ".png")
    $('.description').html("Description: " +results.weather[0].description);
    $('.humidity').html("Humidity: " +results.main.humidity);
    $('.wind').html("Wind: "+results.wind.speed);
    $('.pressure').html("Pressure: " +results.main.pressure);
});

