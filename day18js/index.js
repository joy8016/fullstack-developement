console.log(1);

//create your custom error
try{

    let x = 4;

    console.log(x);
}
catch(err){
    throw new Error("bro firstly do declare the x value");
}

// let errorcode = 100;
// if(errorcode == 100){
//     throw new Error("invalid json");
// }