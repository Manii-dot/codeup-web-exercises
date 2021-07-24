// Leet code problem easy
// How to do a simple reverse interger 

function reverse(x) {
    return (
    parseFloat(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(x)
  )               
};

console.log(reverse(774883993));