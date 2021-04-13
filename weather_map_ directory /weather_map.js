console.log("weather map");

/*

 */

$.get("https://api.openweathermap.org/data/2.5/weather", {
    q: "Killeen, US",
    appid: openWeatherKey,
    units:"imperial"
}).done(function(results){
console.log(results)
});

