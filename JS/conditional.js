// var color = "red";
// var secColor = "blue";
//
// if (color === "red"){
//     console.log("nice, I love that color too!")
//
// }


"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var color = "purple";

function analyzeColor(color){
    if (color === "red"){
        return ("Strawberries are red")
    }else if(color === "blue"){
        return ("blue is the color of the sky")
    }else if(color === "cyan"){
        return ("I don't know anything about cyan")
    }else{
        return ("Oh well, you suck!")
    }
}
analyzeColor(color);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch(randomColor) {
    case "red":
        ("What a coincidence, that's my favorite!");
        break;
    case "blue":
        ("Hmmm wow!");
        break;
    case "orange":
        ("That is my wife's favorite color!! I love my wife!");
    default:
        (randomColor + " isn't my favorite, but it's all good for you!");
        break;
}
analyzeColor(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt("What is your favorite color?");
// alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var num = [1, 2, 3, 4, 5, 0];
var randomNum = num[Math.floor(Math.random() * num.length)];
console.log(randomNum);
var totalAmount = 90;
function calculateTotal(randomNum, totalAmount){
    if (randomNum === 0){
        return totalAmount - (totalAmount * 0.0)
    }else if (randomNum === 1){
        return totalAmount - (totalAmount * 0.10)
    }else if (randomNum === 2){
        return totalAmount - (totalAmount * 0.25)
    }else if (randomNum === 3){
        return totalAmount - (totalAmount * 0.35)
    }else if (randomNum === 4){
        return totalAmount - (totalAmount * 0.50)
    }else if (randomNum === 5){
        return totalAmount * 0
    }
}
console.log(calculateTotal(randomNum, totalAmount));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var userBillInput = parseFloat(prompt("How much is your bill?"));
// alert(calculateTotal(luckyNumber, userBillInput));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var askUser = confirm("Would you like to enter a number?");

// if(askUser === true){
//     if(parseFloat(prompt("Enter a number here please!"))
// }else if(askUser % 2 == 0){
//     alert("The number is even!");
// }else{
//     alert("The number is odd!");
// }else{
//     alter("This is not a number at all!!!!!!!")
// }

if(askUser){
   var userNum = parseInt(prompt("Enter a number here please"))
    if(!isNaN(userNum)){
        // alert((userNum % 2 === 0) + " it is an even number")
        var isEven = userNum % 2 === 0;
        if(isEven){
            alert("Your number is even")
        }else{
           alert("your number is odd")
        }
        alert(userNum + 100)
        var isPositive = userNum > 0;
        if(isPositive){
            alert("the number is positive")
        }else{
            alert("the number is negative")
        }
    }else{
        alert("it is not a number at all!!")

    }
}else{
    alert("Well forget you then!")
}

