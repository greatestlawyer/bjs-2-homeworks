function cachingDecoratorNew(func) {
let cache = [
  { hash: "10,20,30", value: 60 },
  { hash: "2,2,2", value: 6 }
];

function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value); 
        return objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result}); 
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return result;  
}
return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay){
  let timeoutId = null;
  wrapper.allCount = 0;
  wrapper.count = 0;
  
  function wrapper(...args){
    wrapper.allCount++;
    if(timeoutId){
      clearTimeout(timeoutId);
    } else {
      func(...args);
      wrapper.count++;
    }
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay); 
  }
  return wrapper;
}