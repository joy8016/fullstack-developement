let getpromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("promise fulfilled");
    }
    else{
       reject("promise rejected") 
    }
});

// getpromise.then((message)=>{
//     console.log("this is the :",+ message)
// })
// .catch((Error)=>{
//     console.error("error:"+Error)
    
// }).finally((message)=>{
//     console.log("i am always runing");
// })



// getpromise.then((message)=>{
//     console.log("this is the :" + message);
//     return "promise fulfilled second message";

// }).then((message)=>{
//     console.log("second message:" + message);
//     return "promise fulfilled third message";
// }).then((message)=>{
//     console.log("third message is:" + message);
// });