function isSame(number, index, arr2) {
  console.log(arr2.indexOf(number))
  return index = arr2.indexOf(number);
}

function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every(isSame, arr2);
  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter(isThree).filter(isPositive).map(multiplyByTen);
  return resultArr; // array
}

function isThree(number) {
  return number % 3 === 0;
}

function isPositive(number) {
  return number > 0;
}

function multiplyByTen(number) {
  return number * 10;
}