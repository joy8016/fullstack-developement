


//first code
// let t1 = performance.now();
// for(let i = 0; i<=100; i++ ){
//     let para = document.createElement('p');
//     para.textContent = "joydeb maity" + i;
//     document.body.appendChild(para);
// }
// let t2 = performance.now();
// console.log(t1-t2);



let t3 = performance.now();
let mydiv = document.createElement("div");

for(let i = 0; i<=100; i++){
    let para1 = document.createElement('p');
    para1.innerText = "uma manna";
    mydiv.appendChild(para1);
}
document.body.appendChild(mydiv);
let t4 = performance.now();
console.log(t4-t3);