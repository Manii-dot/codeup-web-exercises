console.log("weather map");

/*
how to get one day of weather to appear with the html
 and then to five days
 */

/*==============================WEATHER SECTION========================================*/

//----------* DISPLAY THE WEATHER INFO ON THE MAP *------------------------------//

function displayWeatherInFiveDays (results){
    console.log(results);
    console.log(results.city.name)
    $('.cityDisplay').html(results.city.name);
    let fiveDaysForecast = [0, 9, 17, 25, 33];
    for(let i = 0; i <fiveDaysForecast.length; i++){
        console.log(results.list[fiveDaysForecast[i]])

        // displaying the temperature, icon, desc, hum, wind, press
       $('.date').eq(i).html(results.list[fiveDaysForecast[i]].dt_txt.split(" ")[0]);
        $('.temperature').eq(i).html(results.list[fiveDaysForecast[i]].main.temp_max+"/"+results.list[fiveDaysForecast[i]].main.temp_min+ "'F");
        $('img').eq(i).attr("src", "http://openweathermap.org/img/w/" + results.list[fiveDaysForecast[i]].weather[0].icon+ ".png")
        $('.description').eq(i).html("Description: " +results.list[fiveDaysForecast[i]].weather[0].description);
        $('.humidity').eq(i).html("Humidity: " +results.list[fiveDaysForecast[i]].main.humidity);
        $('.wind').eq(i).html("Wind: "+results.list[fiveDaysForecast[i]].wind.speed);
        $('.pressure').eq(i).html("Pressure: " +results.list[fiveDaysForecast[i]].main.pressure);
    }
}

// Submit city function
$('#find').click(function(e){
    e.preventDefault()
    let userCity = $('#city').val();
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        q: userCity,
        appid: openWeatherKey,
        units:"imperial"
    }).done(displayWeatherInFiveDays);
})

// original loading page
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    q: "Killeen, US",
    appid: openWeatherKey,
    units:"imperial"
}).done(displayWeatherInFiveDays);

/*================================MAPBOX PORTION ==================================*/

mapboxgl.accessToken = mapboxToken;

