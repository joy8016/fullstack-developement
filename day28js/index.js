// function changetext(){
//     let para = document.getElementById('fpara');
// para.textContent = "hello uma"
// }

// let para = document.getElementById('fpara');
// para.addEventListener('click', changetext);


let me = document.querySelector(".you");
me.addEventListener('click', function(event){

    me.textContent = "you are gay";
    console.log(event.type);
})