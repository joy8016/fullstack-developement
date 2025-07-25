


// async function getdata(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await response.json();
//     console.log(data);
// }
// getdata();

// async function postdata(){
//     const response = await fetch('https://dummyjson.com/posts/add',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: 'Love babbar -> I am in love with someone.',
//             userId: 5,
//         })
//     })
//     let data = await response.json();
//     console.log("post data response: ", data)
    
// }
// postdata();



// function outerfunction(){
//     let name = "joydeb ";
//     function innerfunction(){
//         let name  = "deb";
//         console.log(name);
//     }
//     innerfunction();


// }

// outerfunction();




function outerFunction(){
    let name = "joydeb";
    function innnerfunction(){
        console.log(name);
    }
    return innnerfunction;
}
let inner = outerFunction();
let you = inner();