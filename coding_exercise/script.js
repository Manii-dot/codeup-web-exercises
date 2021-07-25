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