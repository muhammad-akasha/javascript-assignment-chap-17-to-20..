// for ( i = 0 ; i < 5 ; i++){ // for loop formula
//     let password = prompt("Enter password");

//     if (password === "mypass"){
//         console.log("correct")
//         break;
//     }else{
//         console.log("incorrect try again");
//     }

// }

// while (true){
//     let password_2 = prompt("Enter password");

//     if (password_2 === "mypass"){
//         console.log("correct")
//         break;
//     }else{
//         console.log("incorrect try again");
//     }
// }

// // while formula / syntax

// let count = 1;
// while(count <= 5 ) {
//     console.log(count);
//     count++;
// }

// question 1

let multiDimentionalArrays = [[], [], []];

// question 2 ...

multiDimentionalArrays[0] = [0, 1, 2, 3];
multiDimentionalArrays[1] = [2, 0, 1, 2];
multiDimentionalArrays[2] = [2, 1, 0, 1];

console.log(multiDimentionalArrays);

document.write("<h1> Multidimentional Arrays");

document.write("<h2>", multiDimentionalArrays, "</h2>");
document.write("<h1>", multiDimentionalArrays[0].join(" "), "</h1>");
document.write("<h1>", multiDimentionalArrays[1].join(" "), "</h1>");
document.write("<h1>", multiDimentionalArrays[2].join(" "), "</h1>");

//question 3 .

for (i = 1; i <= 10; i++) {
  document.write("<h2>", i, "</h2>");
}

// question 4 //
let inputForTable = +prompt("Enter A Number For Multiplication");
let tableLength = +prompt("Enter A Length Of Table");

let flag = false;

document.write("<h1> Lenth Of Table is ", tableLength, "</h1>")

if (isNaN(inputForTable) || isNaN(tableLength)) {
  document.write(" <h2> you entered an invalid number  </h2>");}
  
 else {
  for (let i = 1; i <= tableLength; i++) {
    document.write(  " <h2> ", inputForTable, " * ", i , " = ",  inputForTable * i , " </h2> "
    );
  }
}

// question 5 .

let fruits = ["Apple", "Mango", "Peach", "Orange", "Strawberry", "Banana"];

document.write("<h1> Fruit Array  </h2>");

for (let i = 0; i < fruits.length; i++) {
  document.write("<h2>", fruits[i], "</h2>");
}
for (let i = 0; i < fruits.length; i++) {
  document.write("<h2> element at in index ", i, " is ", fruits[i], "</h2>");
}

//question 6 ..

document.write("<h1> Counting : </h1>");

for (let i = 0; i <= 15; i++) {
  console.log(i);
  document.write(" <span> ", i + ",", " </span> ");
}

document.write("<h1> Reverse Counting : </h1>");

for (let i = 15; i >= 1; i--) {
  console.log(i);
  document.write(" <span> ", i + ",", " </span> ");
}

document.write("<h1> Even Numbers : </h1>");

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
  document.write(" <span> ", i + ",", " </span> ");
}

document.write("<h1> Odd Numbers : </h1>");

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
  document.write(" <span> ", i + ",", " </span> ");
}

document.write("<h1> Series : </h1>");

for(let i = 2 ; i <= 20 ; i += 2){

  console.log(i + "k");
  document.write(" <span> ", i + "k,", " </span> ");
}

// question 7 ..

let abcBak = [
  "cookie",
  "patties",
  "apple pie",
  "chips",
  "sandwich",
  "cake",
  "cold drink",
];

let userBuy = prompt("Welcome To The Bakery .. What Do You Want To Order Sir");

let flags = false;

for (i = 0; i < abcBak.length; i++) {
  if (abcBak[i].includes(userBuy)) {
    alert(" yes " + abcBak[i] + " available at index " + i + " in our bakery ");
    flags = true;
    break;
  }
}
  if (!flags) {
    alert(" We Are Sorry NOT available " + userBuy + " in our bakery ");
  }


// question 8 ..

let numbers = [24, 53, 78, 91, 12, 109, 200, 201];

document.write("<h1> Array Items ", numbers, " <h1> ");

document.write("The Largest Number is ", Math.max(...numbers));

//question 9..

let numbers$ = [24, 53, 78, 91, 12, 109, 200, 201];

document.write("<h1> Array Items ", numbers$, " <h1> ");

document.write("The Smallest Number is ", Math.min(...numbers));

// question 10

document.write("<h1>  Multiple of 5 to 100 </h2>");
let numbers_ = [];

for (let i = 5; i <= 100; i += 5) {
  numbers_.push(i);
}

document.write("<h2>", numbers_.join(", "), "</h2>");
