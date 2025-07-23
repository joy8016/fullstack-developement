let timeout = setTimeout(()=>{
    console.log("hey! i am a tourist, can guide me.")

}, 200);

// clearTimeout(timeout);

console.log(timeout)

async function getvalue() {
    setTimeout(getvalue, 1000, "joydeb");
    
}
console.log(getvalue());

async function getdata() {

    //get request->async
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts/1');
    

    //json is a async function


    let data = await response.json();
    console.log(data);
}
console.log(1);
getdata();
console.log(3);




