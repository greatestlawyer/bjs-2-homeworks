"use strict";


function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  console.log(discriminant);
  
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
    
} else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  
}
  return arr; 
}

//function calculateTotalMortgage(percent, contribution, amount, date) {
 // let totalAmount;
 // return totalAmount;
//}
