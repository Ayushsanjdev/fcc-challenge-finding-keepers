function findElement(arr, func) { //creating function
  let num = 0; //assigning variable of num to 0
  for (let i = 0; i < arr.length; i++) { //running loop through arr[i]
    num = arr[i]; //after loop do num will be equal to index of arr
    if (func(num) === true) { //and if func with parameter num will be true then
      return num; // return the index or num
    }
  } //or else it will be undefined
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0); //answer is 2
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })// return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) // return undefined.