// Leet code problem easy
// How to do a simple reverse interger 

// function reverse(x) {
//     return (
//     parseFloat(
//       x
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//     ) * Math.sign(x)
//   )               
// };

console.log(reverse(774883993));


// although the solution works above but for some reason the answer was wrong regardless. 

 function reverse(x) {
  
    let xrev = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    return xrev > Math.pow(2,31) - 1 ? 0 : x > 0 ? xrev : xrev * -1;
    
  };

  //*********************************************************************************/

  //Opposite number
  function opposite(number) {
    //your code here
    return (-number)
  }

  console.log(opposite(3889))
  //*********************************************************************************/

  /*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/

function list(arr){
  let len = arr.length;
  if(len==0) return '';
  return arr.slice(0, len-1).map(p=>p.name).join(", ") + (len>1 ? ' & ' : '') + arr[len-1].name;
}



/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    //You got this!
    str1 = str.split('');
    str1.shift();
    str1.pop();
    return str1.join('');
};