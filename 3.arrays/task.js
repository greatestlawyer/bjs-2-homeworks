function compareArrays(arr1, arr2) {
  let result;

  let result = arr1.every((i, index) => i === arr2[index]);

  return result;
}

function advancedFilter(arr) {
  let resultArr;
  
  let result = arr.filter((number) => number > 0 ).filter((number) => number % 3 == 0).map((number) => number * 10);
 
  return resultArr;
}
