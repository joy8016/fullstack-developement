// let h1 = document.querySelector('h1');
// let div = document.querySelector('div');



// h1.innerHTML = "maity";
// 
// let aa = document.createElement('a');
// aa.innerHTML = "google";
// div.append(aa);


// let p = div.children[2];
// p.remove()


// let faltu = document.querySelector('#faltu');
// faltu.style.backgroundColor = 'red';

// let parentNode = faltu.parentNode
// console.log(parentNode);
// let childNode = faltu.childNode;
// console.log(childNod

// let div = document.querySelector('div');

// let p = document.createElement('p');
// p.innerHTML = "hey joydeb";
// div.before(p);
// let a = div.children[3];
// a.remove()



let a = document.querySelector('#faltu');

let parentNode = a.parentNode;
let newElem = document.createElement('h1');
newElem.innerHTML = "hello joy";

parentNode.replaceChild(newElem, a);


