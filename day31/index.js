let firstpromise = new Promise((resolve, reject)=>{
    console.log("joy");
    // resolve(1001);
   reject(new Error("internal Server Error"));
    
    
});


//asynchronous

console.log("maity");

let thirdPomise = new Promise((resolve, reject)=>{
    console.log("deb");

    setTimeout(function sayname(){
        console.log("my name is joydeb maity");
    }, 1000);
   resolve(1);
});