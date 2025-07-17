//console.log("joy");
// let arr = ["joy", "deb", 3, 4, false, true];


// arr.unshift("maity");

// // for (const ele of arr) {
// //     console.log(ele);
    
// // }

// arr.splice(1, 1, "kunal");
// console.log(arr);


let arr = [10,20, 30,"joy", "deb"];
// let ansArray = arr.map((number)=>{
//     return number*number;
// })

// console.log(ansArray);


// let ans = arr.filter((value)=>{
//     return (typeof(value) == 'number');
// })
// console.log(ans);

let ans = arr.reduce((acc, curr)=>{
    return(acc+curr);
},1)
console.log(ans);