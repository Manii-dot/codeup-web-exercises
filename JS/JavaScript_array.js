/*
1- Write a JavaScript function to check whether an `input` is an array or not.
 */
// function IsArray(input){
//     return (Array.isArray(input));
// }
// console.log(IsArray('w3resource'));

/*
2- Write a JavaScript function to clone an array.
 */
// function cloneArray(array){
//     return array.slice(0);
// }
// console.log([1, 2, 4, 0]);

/*
3- Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 */
// function first(n){
//     return n[0];
// }
// console.log(first(['string', 'yes', 3]));

/*
4-
 */
// function last(n){
//     return n[n.length -1];
// }
// console.log(last(['string', 'yes', 3]));

/*
5-Write a simple JavaScript program to join all elements of the following array into a string.
 */
// var myColor = ["Red", "Green", "White", "Black"];
// function joining(array){
//     return array.join(" ");
// }
// console.log(joining(myColor));

/*
6-Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
 */
// function program(num) {
//     var strArr = num.split('');
//     var numArr = strArr.map(Number);
//     for (var i = 0; i < numArr.length; i++) {
//         if (numArr[i-1]%2===0 && numArr[i]%2===0 ) {
//             numArr.splice(i, 0, '-');
//         }
//     }
//     return numArr.join('');
// }
// console.log(program('025468'));


//For Loops
// var Shapes = ['square', 'rectangle', 'circle', 'triangle', 'Pentagons', 'hexagon', 'heptagram', 'triquetra', 'lemniscate'];

// for(var i=0; i<Shapes.length; i++){
//     console.log('The shape at index '+i+' is: '+Shapes[i]);
// };

// var intervalId = Shapes.forEach(fuction(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });

// var i =-1;
// var max = Shapes.length;
// var intervalId = setInterval(function(){
//     if(i>=max){
//         clearInterval(intervalId);
//         console.log('No more shapes to show!')
//     }else{
//         i++;
//         console.log('The shape at index '+i+' is: '+Shapes[i])
//     }
//      }, 5000);

//Not sure how to take care of the imdex 9 being undefined.

//-----------------------------------------------------------------------------------------------------//

// function pipeFix(numbers){
//     var first = numbers[0];
//     var last = numbers[numbers.length-1];
//
//     var arr = [];
//     for(var i = first; i <= last; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(pipeFix([1,2,3,5,6,8,9,20]));


// Assessment Prep
//
// function totalPet(array)
//     var sum = 0;
//     for(var = i; i < petsArray.length; i++ ){
//         sum = sum + petsArray[i].numPets;
//     }
//     return sum;
// }
// console.log(totalPets())

// band.shred = function() {
//     console.log('RAAAAAAAAAA!!!!');
// }
//
// shred();
//
// console.log(10 % 3);

// var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
//
// console.log(array[array.length - 3]);

//----------------------------------------------------------------------------------------

// let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
// function myAlphabetLength(){
//     console.log(myAlphabet.length);
//     if(myAlphabet.length < 4){
//         return ("Oops it is not greater than 4!!");
//     }
// }
//
// myAlphabetLength();
//
// function checkFunc(string, boolean){
//
// }
// console.log(checkFunc("a", true));

// var Planets = ["Earth", "Jupiter", "Mercury", "Mars", "Venus"];
// for( var i =0; i < Planets.length; i++) {
//     console.log("Planet " + Planets[i]+ " is found at the index of "+ i);
// }
// console.log(Planets)
//
//
// var wowDatatypes = [ " yes", 3, !false, "ok.", 4];
// for( var i =0; i < wowDatatypes.length; i++) {
//     console.log(wowDatatypes[i]+" is a " + typeof wowDatatypes[i] + " data that is found at the index of " + i);
// }
//
//
// let myArr = [ 1, 2, 'One', true];
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);

// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
// totalPets([{name: 'Fernando Mendoza', numPets: 1},{name: 'Douglas Hirsh', numPets: 8}, {name: 'Kenneth Howell', numPets: 3}]) //11

var petsArray = [{
    name: "Fernando Mendoza",
    numPets: 1
},{
    name: "Douglas Hirsh",
    numPets: 8
},{
    name: "Kenneth Howell",
    numPets: 3
}]
// our game plan:
//     * write the function first
// * one parameter
// * deal with the array
// ** extract what we need (RV) AND we probably need a LOOP [FD]
// *** need a loop? that's what a for loop is FOR!
//     *** extraction: extract each individual numPets in this loop
// ** how about a BUCKET [a place to store our running sum]
//
// our function:

// function totalPets(petsArray){
//
//     var sum = 0;
//     for(var i = 0; i < petsArray.length; i++){
//         sum = sum + petsArray[i].numPets;
//         console.log("var 'sum' is currently " + sum + " "+ petsArray[i].name) //uncomment if you want to track the running total of sum
//     }
//     return sum;
// }
// totalPets(petsArray);
// more drills:
// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.
// countPosi([-2, 7, 4, -9, 1]) //3
// countPosi([3, 6, 9, -1]) //3
// countPosi([10]) //1

// function countPosi(arr){
//     // for(var i = 0; i>arr.length; i++ ){
//     //
//     // }
//     var posArr = arr.filter(function(num){
//         return num > -1;
//     })
//     return posArr.length;
// }
// console.log(countPosi([3, 6, 9, -1, 8, -12, 200]));

// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
//     Example object:
//      var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
// Expected look in console from running printRecipe(caldoRecipe):
// Caldo con Pollo
// Serves: 4
// Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder

// function printRecipe(recipe){
//     console.log(recipe.name);
//     console.log("Serves: " + recipe.servings);
//     console.log("Required ingredients: " + recipe.ingredients);
// }
//
// printRecipe(caldoRecipe);




// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}
// function convertAddressToObject(string){
//     var array = string.split(" ");
//     var address = {};
//     address.streetNumber = array[0];
//     address.streetName = array[1] +" " + array[2];
//
//     // console.log(address);
// }

function convertAddressToObject(x) {
    var addressNum = '';
    var addressString = '';
    var address = {};
    for (var i = 0; i < x.length; i++) {
        if (x[i] === '0'|| x[i] === '1' || x[i] === '2' || x[i] === '3' || x[i] === '4' || x[i] === '5' || x[i] === '6' || x[i] === '7' || x[i] === '8' || x[i] === '9') {
            addressNum = addressNum + x[i];
        } else {
            addressString = addressString + x[i];
        }
    }
    address.streetNumber = addressNum;
    address.streetName = addressString;
    return address;
}

console.log(convertAddressToObject('5408 Villa Nueva'));