// let val = document.querySelector('h1');
// console.log(val);

// let a = document.querySelector('p');
// console.log(a);


// let a = document.querySelectorAll('div');
// console.log(a);
// let b = document.querySelector('.falna');
// console.log(b);

// console.log(b.firstChild)
// console.log(b.children)
// console.log(b.childNodes);

// console.log(b.lastChild)


//manupualating 

// let a = document.querySelector('h1');


// //text manipulating

// console.log(a.innerHTML)

// console.log(a.textContent)

// a.innerText = "hello vaisab";
// console.log(a.innerText)
// console.log(a.innerHTML)
// console.log(a.textContent)

// a.textContent = `who are ${3+3}
// you`;

// console.log(a.textContent)

// a.innerHTML = "<p> app kon hai </p>"

// console.log(a.textContent)
// console.log(a.innerHTML)

// a.innerHTML = "<h1><b>hey you <br>app kon hai</h1>"




// a.innerHTML = <p>hello vaisab!</p>
// console.log(a.innerHTML);












//insert element in html document

let div = document.querySelector('div');

let ele = document.createElement('p');

ele.innerText = "hey you! what'sp bro";
div.append (ele)

div.prepend(ele);

div.after(ele);
div.before(ele)

div.insertAdjacentElement("beforebegin", ele)

let html = "<p>hi i am joydeb</p>"

div.insertAdjacentHTML("afterbegin", html)

let text = "where are you going?";

div.insertAdjacentText("afterbegin"
    ,html )

