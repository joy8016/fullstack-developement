
let paras = document.querySelectorAll('div');
function alertpara(event){
   
   
        alert("you clicked on a para:" + event.target.tagName);

    
    
}


// // for(let i = 0; i <paras.length; i++){
// //     let para = paras[i];
// //     para.addEventListener('click', alertpara);
// // }



// //apply eventlistner on div

document.addEventListener('click', alertpara);




// let log = document.querySelector(".evnt-log-contents");
// let reload = document.querySelector("#reload");

// reload.addEventListener('click', ()=>{
//     log.textContent = "";
//     setTimeout(()=>{
//         window.location.reload(true);
//     }, 200);
// });


// document.addEventListener("DOMContentLoaded", (event)=>{
//     log.textContent +="DOMContentLoaded\n";
// });