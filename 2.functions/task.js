// Задание 1
function getArrayParams(arr) {
  let avg;
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
  	sum = sum + arr[i];
  	if (arr[i] > max) {
  		max = arr[i];
  	};
  	if (arr[i] < min) {
  		min = arr[i];
    };
  }
  avg = parseFloat((sum/arr.length).toFixed([2]))

  return {'min': min, 'max': max, 'avg': avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
  	sum = sum + arr[i];
  };
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; ++i) {
  	let sum = func(arrOfArr[i]);
  	if (sum > max) {
  	  max = sum;
  	}
  }
  return max
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let diff = 0;
  for (let i = 0; i < arr.length; ++i) {
  	if (arr[i] > max) {
  	  max = arr[i];
  	};
  	if (arr[i] < min) {
  	  min = arr[i];
    };
  }
  diff = max - min;
  return diff;
}
