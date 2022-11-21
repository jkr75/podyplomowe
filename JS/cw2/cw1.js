//a . example array
let myArray = [1, 6, 23, 8, 4, 8, 3, 7];

//b. create a function that takes in an array of numbers and returns sum of all elements

function add(array) {
  let output = 0;
  for (let i = 0; i < array.length; i++) {
    output += array[i];
  }
  return output;
}
let result = add(myArray);
console.log("B. " + result);

//c. create a function that takes in an array of numbers and returns sum of first and last elements
function add2(array) {
  output = myArray.shift() + myArray.pop();
  return output;
}
let result2 = add2(myArray);
console.log("C. " + result2);

//d. create a function that takes in an array of numbers and returns sits copy in reverse order (DON't use .reverse() method()!)
let myArray2 = [1, 6, 23, 8, 4, 8, 3, 7];

function CopyReversed(array) {
  reserved2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reserved2.push(array[i]);
  }
  return reserved2;
}
let result4 = CopyReversed(myArray2);
console.log("D. " + result4);

//e. Create a function that takes two parameters - array of numbers, and number of attempts. 
// Choose random numbers from the array based on the number of attempts and return the lowest among them.


function shuffle(array) {
  let index = array.length, random;

  while (index != 0) {
    random = Math.floor(Math.random() * index);
    index--;
    // index = 5
    // random = 3
    // array[index] -> array[5] -> 8
    // array[random] -> array[3] -> 2

    const tmp = array[index]    // tmp <= 8
    array[index] = array[random]   // array[5] <= 2
    array[random] = tmp  // array[3] <= 8
    // [array[index], array[random]] = [array[random], array[index]];
  }
  return array;
}

var arr = [1, 6, 23, 2, 4, 8, 3, 7];
let result5 = shuffle(arr);
console.log("E. " + arr);

//f. Create a function that takes in an array and returns it in random order
//*let original = [1,6,23,8,4,8,3,7];

function shuffle(array) {
  let index = array.length, random;

  while (index != 0) {
    random = Math.floor(Math.random() * index);
    index--;
    // index = 5
    // random = 3
    // array[index] -> array[5] -> 8
    // array[random] -> array[3] -> 2

    const tmp = array[index]    // tmp <= 8
    array[index] = array[random]   // array[5] <= 2
    array[random] = tmp  // array[3] <= 8
    // [array[index], array[random]] = [array[random], array[index]];
  }
  return array;
}

var arr = [1, 6, 23, 2, 4, 8, 3, 7];
let result6 = shuffle(arr);
console.log("F. " + arr);

//g. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

tablica = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let SumaNieParzystych = 0;
for (let i = 0; i < tablica.length; i++) {
  if (i % 2 == 1) {
    SumaNieParzystych += tablica[i];
  }
}
console.log("G. odd sum total: " + SumaNieParzystych);

// h. With  a given start value of 0. Iterate the array and add even items and subtract odd ones. 
// [1,6,23,8,4,98,3,7,3,98,4,98]

let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

function sumDiff(numbers) {
  let even = [];
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }

  console.log("H.\nodd: " + odd);
  console.log("even: " + even);

  let oddSum = odd.reduce((r, s) => r += s, 0);
  let oddEven = even.reduce((r, s) => r += s, 0);

  console.log("odd sum total: " + oddSum);
  console.log("even sum total: " + oddEven);
  console.log("difference : " + (oddSum - oddEven));
}
sumDiff(numbers);