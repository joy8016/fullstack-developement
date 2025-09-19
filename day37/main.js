// //destructuring on object

// let obj = {
//     name :'joydeb',
//     age : 23,
//     city: "kolkata",
//     ismarried: false,

// };

// // let {name, age, city, ismarried} = obj;

// let{name, age, ...others}= obj;

// console.log(name, age);
// console.log(others);



//destructuring on default values

// let {name:fulname, age=23, others}={
//     name : "joydeb",
//     // age: 23,
// }

// console.log(others);
// console.log(fulname, age);

// let a = 3, b = 4;
// [a, b ]= [b,a];
// console.log(a,b);

// const arr = [1,2,3];
// const obj = {...arr};
// console.log(obj);


// let obj ={
//     name:"joydeb",
//     age:23,

// }

// let copyobj ={
//     ...obj,
//     city: 'kolkata',
// }

// console.log(obj);
// console.log(copyobj);

function odd_even(...rest){
    let even = rest.filter((ele)=>{
        return ele%2===0;
    
    })
    
    let odd = rest.filter((ele)=>{
        return ele%2!==0;
    
    })
    return{
        even,
        odd,
    }

}

let {odd, even}=odd_even(1,2,3,4,5,6,7,8);
console.log(odd);
console.log(even);

