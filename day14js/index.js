// class empl{
//     age;
//     wt;
//     ht;

//     constructor(newAge,newWt, newHt){
//         this.age = newAge;
//         this.wt = newWt;
//         this.ht = newHt;
//     }

//     get runnig(){
//         return this.#newAge;

//     }

// };



// let people = new empl(45, 123);
// console.log(people['age']);

// console.log(people.wt);
// console.log(people.runnig);



// function human(age, name){
//     this.age = age ;
//     this.name = name;
// }

// let man = new human(34,'joy');
// console.log(man.age);
// console.log(man.name);


// function sayName(myName){
//     console.log("my name is ",myName);
// }

// sayName('joydeb');


//in defult parameters can pass a array

function sayName(value = ["joy", 68, 97, 'debh']){
    console.log(value);
}

sayName();


//can pass a object 

function obj(details = {name:'joydeb', lastname:'maity', age :23}){
    console.log(details);
}
obj();

//one parameters depend on a other  parameters

function depend(name, Name = name.toUpperCase()){
    console.log(name, " " , Name);
}
depend('sam');

function n(value){
    console.log(value);
}
n(undefined);

