// console.log("Hello from external JavaScript");
//
// //Alert
// alert('Welcome to my Website!');
//
// //Prompt
//
// var favoriteColor = prompt("What is your favorite color?");
// console.log("Great, " + favoriteColor + " is my favorite color too!");
//
// //Fun exercise
//
// var number = prompt('What is your number Gir?');
// console.log("Alrighty, that is what I will play tonight!");
//

// Exercise 3
// var pPDay = 3;
//
// var MerpD = parseInt(prompt("How much to rent the lil Mermaid?"));
// alert("it will cost $" + (pPDay * MerpD));
//
// var BroB = parseInt(prompt("How much to rent Brother Bear"));
// alert("it will cost $" + (pPDay * BroB));
//
// var Herc = parseInt(prompt("How much to rent Hercules?"));
// alert("it will cost $" + (pPDay * Herc));
//
// alert("The total will be $" + (MerpD + BroB + Herc))

//______________________________________________________________________
// var gPay = 400;
// var amPay = 380;
// var facePay = 350;
//
// var Google = parseInt(prompt("How much hours did you work for Google this week?"));
// alert("Well you will get paid $" + (gPay * Google) + "this week!!!");
//
// var Amazon = parseInt(prompt("How much hours did you work for Amamzon this week?"));
// alert("Well you will get paid $" + (amPay * Amazon) + "this week!!!");
//
// var Facebook = parseInt(prompt("How much hours did you work for Facebook this week?"));
// alert("Well you will get paid $" + (facePay * Facebook) + "this week!!!");

//_________________________________________________________________________

// var classFull = confirm("Is the class you are trying to join full");
// var scheduleCon = confirm("Do you have class at 2:30 already?");
//
// alert("You can join the class is a " + (!classFull && !scheduleCon) + " statement.");

//---------------YES OR NO Version -------------------------------------------------------------

// var hasMoreThanTwoItems = confirm("Do you have more than two Items in your Cart??");
//
// var isOfferValid = confirm("Is the offer still valid?");
//
// var premiumMember = confirm("Are you a premium member?");
//
// var canUserUseOffer = (hasMoreThanTwoItems || premiumMember) && isOfferValid;
//
// alert("You can use this offer is a " + canUserUseOffer + " statement.");

//----------------- Doing it in a different way----------------------------------------------------
var isOfferValid = confirm("Is the offer still valid?");

var hasMoreThanTwoItems = parseInt(confirm("Do you have more than two Items in your Cart??")) >= 2;

var premiumMember = confirm("Are you a premium member?");

var canUserUseOffer = (hasMoreThanTwoItems || premiumMember) && isOfferValid;

alert("You can use this offer is a " + canUserUseOffer + " statement.");