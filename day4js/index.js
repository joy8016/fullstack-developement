// console.log("hey i am a coder");

// let age = 2;
// let a = 5;

// if(age>18){
//     console.log("you can drive");


// }else{
//     console.log("you can't drive");
// }

// console.log(age+a);
// console.log(age-a);
// console.log(age/a);
// console.log(age**a);
// console.log(age%a);

// let aa = 7;
// let b = 4;
// console.log(aa+=b);
// console.log(aa-=b);
// console.log(aa/=b);
// console.log(aa%=b);
// console.log(aa**=b);
// console.log(aa<<=b);
// console.log(aa>>=b);

// let a = 6;
// let b = "joy";

// console.log(a === b);



// //loop

// let obj = {
//     name: "joydeb",
//     age: 56,
//     gender: "male"

// }

// for(let i = 0; i<=100; i++){
//     console.log(i);
// }




// for (const key in obj) {
//     let element  = obj[key];


//     console.log(key,element);

//     console.log(obj.age);
//     console.log(obj["name"]);


// }
// let arr

// for (const c of "joydeb") {
//     console.log(c);

// }


// if(true){
//     let a = 3;
//     const b = 8;
//     var z = 5;
//     console.log(a);
//     console.log(b);
//     console.log(z);

// }
// //console.log(a);
// console.log(z);
// console.log(b);

// function example() {
//     let a = 7;
//     const b = 8;
//     var x = 9;
//     console.log(x,a,b);

// }
// //console.log(a);
// //console.log(b);

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }


// for (const element of object) {

//}

// 


//arrow function

// let sum = (a, b) => {
//     console.log(a + b);

// }
// sum(4, 5);

// const sum=(a, b)=>{
//     var c = a+b;
//     return c;
// }
// let y = sum(4,5);
// console.log(y);



let random = Math.random();
console.log(random)
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    console.log(`The correct result for ${a} ${c} ${b} is ${eval(`${a} ${c} ${b}`)}`);
} else {
    c = obj[c];
    console.log(`The incorrect result for ${a} ${c} ${b} is ${eval(`${a} ${c} ${b}`)}`);
}


// /*This README outlines the purpose and functionality of the JavaScript code, provides an example, and includes a section for contributions and a disclaimer for potential inaccuracies due to the randomization. You can copy and paste this markdown into your README.md file on GitHub and adjust it as needed.\*





