// 2. Create a function that returns number of days till Friday
let Data = new Date();
function iledni(Data){
    var Dzis = Data.getDay();
    var Piatek = 5;
    // var dni = (Math.abs(Piatek - Dzis)) + 1;
    // return Dzis < Piatek ? Piatek - Dzis : Piatek + 7 - Dzis;
    if (Dzis < Piatek) {
      return Piatek - Dzis
    } else {
      return Piatek + 7 - Dzis
    }
}
console.log("2. Do piątku zostało dni: " +iledni(Data));
//albo 

let Data2 = new Date();
function iledni(Data2){
    var Dzis = Data2.getDay();
    var Piatek = 5;
    var dni = (Math.abs(Piatek - Dzis));
    if (Dzis == 5) { 
        return 7;
    } else if (Dzis == 6) {
        return 6;
    } else {
        return dni;
    }
}
console.log("2. Do piątku zostało dni: " +iledni(Data2));


//3. Create two functions:
// a. First that takes in a string and shift number, and returns encrypted string using Caesar Cipher
function encrypt(text, s) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
      let byte = text.charCodeAt(i)
      if (byte >= 65 && byte <= 64 + 26) {
        byte = ((byte + s - 65) % 26) + 65
      } else if (byte >= 97 && byte <= 97 + 26) {
        byte = ((byte + s - 97) % 26) + 97
      }
      // let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65)
      result += String.fromCharCode(byte)
    }
    return result
  }
  
  function decrypt(text, s) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
      let byte = text.charCodeAt(i)
      if (byte >= 65 && byte <= 64 + 26) {
        byte = ((byte - s - 65) % 26) + 65
      } else if (byte >= 97 && byte <= 97 + 26) {
        byte = ((byte - s - 97) % 26) + 97
      }
      // let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65)
      result += String.fromCharCode(byte)
    }
    return result
  }
  
  // function decrypt(text, s) {
  //   return encrypt(text, -s) 
  // }
  
  const encrypted = encrypt('Hallo Adam', 5)
  console.log('3a: ' + encrypted)
  const decrypted = decrypt(encrypted, 5)
  console.log('3b: ' + decrypted)
    
 // 4. Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion
////


//5. Create a function that:
    //a. Checks if a given number is a prime number

    function isPrime(number){
        if (number < 2) {
            return false;
        }
        if (number === 2 || number === 3) {
            return true;
        }
        let sq = Math.sqrt(number); // Metoda zwraca pierwiastek kwadratowy z liczby.
        for  (let i = 2; i <= sq; i++){
            if (number % i === 0){
            return false;
            }
        }
        return true;
    }
    console.log("5a. 2" +isPrime(2));

    
    //b. akes in n (numbers) as a parameter and returns first n prime numbers

    function eratosthenes(n) {
        // tablica jest indeksowana od 0, więc traktujemy że indeks 0 oznacza liczbę 2
        const numbers = new Array(n - 1).fill(true);
        const result = [];
        for (let i = 2; i <= n; i++) {
            if (!numbers[i - 2]) {
                // jeśli liczba nie jest pierwszą, przechodzimy dalej
                continue;
            }
            result.push(i);
            for (let j = i + i; j <= n; j += i) {
                // uznajemy wielokrotności za liczby złożone
                numbers[j - 2] = false;
            }
        }
        return result;
    }
    console.log("5b. " +eratosthenes(8));

//6. Implement binary search

//7. Implement selection sort
let a = [1,6,23,8,4,8,3,7];
a.sort(function (a, b) {
    return a - b;
});
console.log('7. Sort:', a);

//8. Implement merge sort
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    let half = array.length / 2
    if(array.length < 2){
      return array 
    }
    let left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
 // 
let array = [1,6,23,8,4,8,3,7];
console.log(mergeSort(array));