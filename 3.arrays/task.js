function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
  	result = false;
  } else {
    result = arr1.every(function(number, index) { return number === arr2[index]});
  }
  return result; 
}

function advancedFilter(arr) {
  return arr.filter((number) => { return number % 3 === 0 }).filter((number) => { return number > 0 }).map((number) => { return number * 10 });
}