// Задание 1
function getArrayParams(arr) {
  let min = Infinity; 
  let max = -Infinity; 
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 

    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];

    } if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = sum/(Number(arr.length.toFixed(2));

  }

  avg = sum/(Number(arr.length.toFixed(2));
  
  return { min: min, max: max, avg: avg };
}





// Задание 2

arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
 

function worker(arr) {
  let sum = 0;


// Задание 2
function worker(arr) {
  let sum = 0;


  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  

  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i] > max)) {
    max = func(arrOfArr[i]);
  }
  }

  return max;
}

makeWork(arrOfArr,worker);

  
  for (let i = 0; i < arrOfArr.length; i++) {
    max += arrOfArr[i];
  }

  if (func(arrOfArr[i] > max) {
    func(arrOfArr[i]) = max;
  }
  

  return max;
}



// Задание 3

function worker2(arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);
let distance = Math.abs(min - max);
console.log(distance);
}
worker2([1,15,567,55,777]);


makeWork(arrOfArr,worker2);


