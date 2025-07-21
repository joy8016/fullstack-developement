let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "joy");
})
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(reject, 2000, "deb");
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(reject, 4000, "maity");
})
Promise.all([promise1, promise2, promise3])
.then((value)=>{
    console.log(value);
}).catch((Error)=>{
    console.error("error is :" + Error);
}).finally(()=>{
    console.log("you are a gay");
});