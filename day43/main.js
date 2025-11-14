const inputBox = document.querySelector('#input');
const listContainer = document.querySelector('.list-container');

function addTask(){
    if(inputBox.value===''){
        alert("you must be write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.append(span);
    }
    inputBox.value='';
    setTask();

}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName=== 'LI'){
        e.target.classList.toggle('checked');
        setTask();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        setTask();
    }
},false)

function setTask(){
    localStorage.setItem('data', listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}

showTask();