// const arr = [
//     function (a,b){
//         return a + b;
//     },
//     function (a,b){
//         return a / b;
//     },
//     function (a,b){
//         return a * b;
//     },
//     function (a,b){
//         return a - b;
//     }
// ];

// let first = arr[0];
// let ans = first(3,5);
// console.log(ans);

// let firsst = arr[2];
// let anns = firsst(3,5);
// console.log(anns);

// let firstt = arr[1];
// let anss = firstt(3,5);
// console.log(anss);


// let obj = {
//     age : 45,
//     hi:4,
//     wt:56,
//     hell0 : ()=>{
//         console.log("hello matherchod")

//     }
// }

// console.log(obj.age);

// obj.hell0();


// setTimeout(function(){
//     console.log("this function call after 1 second.");
// },)

// ( ()=>{
//     console.log("joydeb Maity")
// })()

// setTimeout(gfg1, 2000);
// function gfg1() {
//     console.log("gfg1");
// }


//create a object new keyword

// let person = new Object();
// person.name = "joydeb";
// person.age = 43;
// person.hobbies = ["reading", "football", "batmintan", "disiipliine"];

// Simple function
// function vehicle(name, maker, engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }
// // New keyword to create an object
// let car = new vehicle('GT', 'BMW', '1998cc');
// // Property accessors
// console.log(car.name);
// console.log(car.maker);
// console.log(car['engine']);


// const person = {
//     name:"joydeb",
//     age:23,
//     hello:function(){
//         console.log("hello joy")
//     }

    

// }
// person["hello"]()
// console.log(person["name"])

// let newPerson = {};
// for(let key in person){
//     newPerson[key] = person[key];
// }

// console.log(newPerson);


// let obj = {
//     name:"joydeb",
//     age:23,


// }

// let dupobj = Object.assign(obj);
// console.log(dupobj);


let arr = [3,4,3,5,8];

// arr.forEach((value, index) =>{
//     console.log("number:",  value, "index:", index);
// }
  
// )

// let obj = new Object();
// obj.name = "joydeb";
// obj.age = 34;

// let obj = {
//     name:"joy",
//     age:23,
//     weight:45,
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }
// }
// for(let key in obj){
//     console.log(key, " :", obj[key]);
// }

// for(let value in arr){
//     console.log(value, " ", arr[value])
// }f

// or(let value of arr){
//     console.log(value);
// }

// let fullname = "joydeb";
// for(let key of fullname){
//     console.log(key);
// }



let getSum = (arr)=>{
    let len = arr.length;
    let sum = 0;
    for(let i = 0; i<len; i++){
        sum+=arr[i];
    }
    return sum;

}
let totalsum = getSum(arr);
console.log(totalsum);