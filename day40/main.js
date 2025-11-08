// let div = document.querySelector('div');

// let newNode = document.createElement('p');
// newNode.innerHTML = "new paragraph";

// let lastPara = div.children[2];
// // div.appendChild(newNode);

// // div.removeChild(lastPara)


// // div.replaceChild(newNode, lastPara);

// let parentNode = lastPara.parentNode;

// console.log(parentNode);


// let attribute = div.getAttribute('style');
// console.log(attribute);

// div.setAttribute('style', 'background-color: blue')


// div.style.backgroundColor='red',div.style.color ='green'

// let className = div.getAttribute('class');
// console.log(className);

// div.setAttribute('class', 'this');
// console.log(div.attributes.class.nodeValue);

// let body = document.querySelector('body');
// let p = document.createElement('p');

// p.innerHTML = "main tumse payar nhi karta hun";

// body.append(p);

// // p.style.backgroundColor = 'black', p.style.color = 'green';

// p.setAttribute('style', 'background-color:black; color:green')

// let btn = document.createElement ('button');

// btn.innerText = 'click me';

// body.before(btn);

// btn.setAttribute('style', 'margin-left:20px; margin-top:10px; border-radius:4px; border:none; color:red; background-color:skyblue; padding:2px')

// console.log(btn);



//attributes


// let h1 = document.querySelector('.you');
// console.log(h1);


// console.log(h1.attributes[2].nodeValue);

// h1.setAttribute('class', 'this');

// h1.setAttribute('style', 'background-color: green; font-size:60px; border-radius:30px');

// console.log(h1.getAttribute('style'))


// console.log(h1.getAttribute('class'))


let body = document.querySelector('body');

let para = document.createElement('p');

para.innerText = 'main tumse payar nahi karta hun';
console.log(para)

body.append(para);



para.setAttribute('style', 'background-color:red; color:white')

let btn = document.createElement('button');

btn.innerText = 'click me';

body.insertAdjacentElement("afterbegin", btn);

btn.setAttribute('style', 'color:seagreen; border-radius:10px; background-color:skyblue; border:none')

