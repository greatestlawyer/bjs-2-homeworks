function compareArrays(arr1, arr2) {
  
  let result = (arr1.length == arr2.length) && arr1.every((i, index) => i === arr2[index]);
  

  return result;
}

function advancedFilter(arr) {
  
  let result = arr.filter((number) => number > 0 ).filter((number) => number % 3 == 0).map((number) => number * 10);
 
  return result;
}
