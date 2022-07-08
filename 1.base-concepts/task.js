"use strict";


function solveEquation(a, b, c) {
  let root1;
  let root2;
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  console.log(discriminant);
  
  if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);
    //console.log(`${root1} и ${root2}`);
    console.log(arr.push(`${root1} и ${root2}`));
} else if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    //console.log(`${root1} и ${root2}`);
    console.log(arr.push(`${root1} и ${root2}`));
}
  return arr; 
}

//function calculateTotalMortgage(percent, contribution, amount, date) {
  //let totalAmount;

  

  //return totalAmount;
//}
