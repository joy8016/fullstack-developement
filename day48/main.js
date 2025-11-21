let grandparent= document.querySelector('.grandparent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');
let child2 = document.querySelector('.child2');


grandparent.addEventListener('click', ()=>{
alert('e grand parent hain');
},true);

parent.addEventListener('click', (e)=>{
    
  alert("this is parent")
    
});

child.addEventListener('click', ()=>{
     alert('e child1 hain');
},true);
child2.addEventListener('click', ()=>{
     alert('e child2 hain');
});


