function num(n, callback){
    return callback(n);
}

const double = (n)=> n*2;
console.log(num(4,double));


// forEach loop

let arr = ["apple", "banana","grapes", 8];

arr.forEach(function(fruits){
    console.log(`i loe  :  ${fruits}`);
})

let num = [3,4, 5,6 ];
let sum = 0;
num.forEach(function(m){
    return sum+=m;
})
console.log(`the total sum is:${sum}`);


// TDZ concept

console.log(age);
console.log("deb");
console.log("joy")
call();
function call(){
    console.log("you are finished");
}
const age = 45;
console.log(age);



// classes and object

class human{

    age = 45;

    #wt = 69;//private
    ht = 140;

    //behaviour or function

    walking(){
        console.log(`i am walking, 
        ${this.#wt}`);
    }

    running(){
        console.log("i am running");
    }

    get name(){
        return this.#wt;
    }

    set newName(val){
        return this.color = val;

    }



}


//object

let you = new human();

you["walking"]();

console.log(you.age);

//console.log(name);

//console.log(you["name"]);

console.log(you.name);


class p{
    constructor(dARLING){
        this.i = dARLING;
    }

    set name(BABU){
        return this.i  = BABU;
    }
}

let res = new p("UMA");
console.log(res["i"]);
res.name = 'MINA';
console.log(res.i);

