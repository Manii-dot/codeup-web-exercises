$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");

var car = {
    make: "Chrysler",
    model: "Pacifica",
    year: 2018,
    funToDrive: true
}
console.log("Should be a string", JSON.stringify(car));
var jsonOfCar = JSON.stringify(car)
    console.log("json in a variable", jsonOfCar);
    console.log("the object car",car);

    //JSON?


    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    // var hookbinURL = 'https://hookb.in/2qjKpOzVYQu9BBKGpOng';
    // $.ajax(hookbinURL);
    //

    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */
    // $.ajax(hookbinURL, {
    //     method: "POST",
    //     data: JSON.stringify(car)
    // });

    //Send a get request and query for the username bob.
    //$.ajax(hookbinURL + "?username=bob");

    /*
     * TO DO: Refactor the first example using a GET request object instead of
     * appending a query to the url.
     */
    // $.ajax(hookbinURL, {
    //     method: "POST",
    //     data: {
    //         username: "bob",
    //         active: true
    //     }
    // });

    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */
    var swapiBaseURL = 'https://swapi.dev/api/'

    $.ajax(swapiBaseURL + "people", {
        method: "GET",
        data: {
            search: "r2"
        }
    }).done(function(data){
        console.log(data);
    });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */
    $.ajax(swapiBaseURL + "films/").done(function (data){
        console.log(data);
    });



    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
    var myBooks = $.ajax("data/book.json")

    function onSuccess (data){
        console.log(data);
    }

    function onFail(jqXhr){
        console.log("Check your file path.");
    }

    function onAlways(){
        console.log("Looking for books...");
    }


    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */
    myBooks.fail(onFail);


    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */
    myBooks.always(onAlways);


    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */

    var swapiFilm = $.ajax(swapiBaseURL+ "films/").fail(function(){
        console.log("Fail to load")
    });

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */


    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */
    var newHopeRequest = $.ajax(swapiBaseURL+ "films/", {
        method: "GET",
        data: {
            search: "A New Hope"
        }
    });

    newHopeRequest.done(function(data){
       console.log(data.results[0].director);// this is how to look for a specific items within the result
    });

    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */



    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */
    var myBooks1 = $.ajax("data/book.json");

    myBooks1.done(function(data){
        data.forEach(function (book){
            if(book.title === "The Canterbury Tales"){
                console.log("The Canterbury Tales author is: "+book.author);
            }
        });
    });



    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */

    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */

    // this variable stores our request

    function generateBooks(){
        var booksRequest = $.ajax("data/book.json");

        booksRequest.done(function(data){

            $.each(data, function(index, book){
                var content = "";
                content += "<h2>" + book.title + "</h2>"
                content += "<h4>" + book.author + "</h4>"
                console.log(content);
                $('#main').append(content);
            });
        });

        booksRequest.fail(function(){
            $('#main').append("<h1>Error getting books! :(</h1>")
        })
    }



    // call the function to generate data on page load
    generateBooks();


    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button that refreshes the contents of your html
     * without refreshing the page.
     */

    // event listener on refresh button
    $('#refresh').click(function(e){
        console.log("Refresh button was clicked.");
        $('#main').html('');
        generateBooks();
    });

});