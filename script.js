// toUpperCase
// let text1 = "Hello World";
// let text2 = text1.toUpperCase();
// console.log(text2);

// toLowerCase
// let text = "Hey Friends";
// let text3 = text.toLowerCase();
// console.log(text3);

// concat
// let a = "Hello";
// let b = "World";
// let c = a.concat("", b);
// console.log(c);

// trim
// let d = "     Im Frank     ";
// let e = d.trim();
// console.log(e);

// padStart
// let f = "5";
// let padded = f.padStart(4, "x");
// console.log(padded);

// let numb = 5;
// let g = numb.toString();
// let paddedtext = g.padStart(4, "0");
// console.log(paddedtext);

// repeat
// let h = "Mark";
// let result = h.repeat(4);
// console.log(result);

// replace
// let old = "Please visit Kenya";
// let newOld = old.replace("Kenya", "Uganda");
// console.log(newOld);

// split
// let k = "a,b,c,d,e,f";
// const myArray = k.split(",");
// console.log(myArray[0]);

// let l = "g h i j k l m";
// const newArray = l.split(" ");
// console.log(newArray[0]);

// let m = "m | n | o | p | q";
// const currentArray = m.split(" | ");
// console.log(currentArray[0]);

// COURSE WORK
// STRING MANIPULATION
function textLength() {
  return text.length;
}
let text = "Java";
console.log(textLength());

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("this is javascript"));

function reverseString(message) {
  return message.at(3, 2, 1, 0);
}
console.log(reverseString("Java"));

// Array
// const fruits = ["banana", "orange", "apple", "mango"];
// console.log(fruits.toString());
// console.log(fruits.at(2));
// console.log(fruits.join(" * "));
// console.log(fruits.pop());
// console.log(fruits.push("Kiwi"));
// console.log(fruits.shift());
// console.log(fruits.unshift("lemon"));
// console.log((fruits[4] = "kiwi"));

// const myGirls = ["Cecily", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const arr1 = ["Cecily", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myKids = arr1.concat(arr2, arr3);
// console.log(myKids);

// const arr4 = ["James", "John"];
// const kids = arr4.concat("Frank");
// console.log(kids);

// fruits;
// console.log(fruits.copyWithin(2, 0));

// const arr5 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const arr6 = arr5.flat();
// console.log(arr6);

// const veggies = ["Banana", "Orange", "Apple", "Mango"];
// console.log(veggies.splice(2, 0, "Lemon", "Kiwi"));
function findMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
const numb = [3, 7, 2, 8, 1, 9, 4];
console.log(findMax(numb));

function findNumber(numberString) {
  if (numberString[0] === "-") {
    numberString = numberString.slice(1);
  }
  return numberString.length;
}
console.log(findNumber(12233));
