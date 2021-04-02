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
// function totalPets(array){
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

var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];

console.log(array[array.length - 3]);