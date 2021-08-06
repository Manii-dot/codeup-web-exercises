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

/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
*/

function updateLight(current) {
  
  //your code here!

}


function multiTable(number) {
  // good luck
}

function getRealFloor(n) {
}

function mouthSize(animal) {
  // code here
}

var replaceDots = function(str) {
  return str.replace(/./, '-');
}

function arrayDiff(a, b) {
  
}

function divisors(integer) {
  
};

function isValidWalk(walk) {
  //insert brilliant code here
}


/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/

function spEng(sentence){
  //write your code here
  }


  // leetcode problems

  /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
};


/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
};



/*
 Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
};