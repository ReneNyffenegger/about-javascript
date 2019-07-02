function twice(num) {
  return num*2;
}

let num=42;
let greeting='Hello'

let expandedString = `${greeting}, the number is ${num}, twice the number is ${twice(num)}`;
console.log(expandedString);
