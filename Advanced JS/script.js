// Function object type
//literal function: parsed once
var result = function(x,y){return x+y;};

//Declarative: parsed once, hoisted
function addNumbers(x,y){
     return (x+y);
}

//Dynamic: anonymous, dynamically reconstructed, not hoisted
var variable = new Function("x","y","return(x+y);");

function declarativeFunction(){
     console.log("I am a declarative function");
}

document.getElementById("b3").onclick = declarativeFunction;

document.getElementById("b1").onclick = function(){
     console.log("I am a literal function");
};

document.getElementById("b2").onclick = ()=>{
     console.log("I am arrow function");
};

function Numbers(){
     console.log(arguments);
}

// ---------------------------self-invoking function---------------------------
// self-invoking function => immediate invoke function expression
// (function sum(n1, n2){
//      alert(n1+n2);
// })(10, 20);

// ------------------------------------OOP---------------------------------------
// Js: class-less language
//create custom object using Literal notation, object constructor and prototyping

//encapsulation
function Person(Name="Ahmed" , Age=18){
     var Id = 0; //private member
     this.Name = Name;
     this.Age = Age;
     this.print = function(){
          console.log("Name: "+ this.Name + " ,Age: " + this.Age);
     }

     function setId(id){ //private method
          if(!Person.c){
               Person.c = 0;
          }
          id = ++Person.c;
          return id;
     }

     Id = setId(Id);

     this.getId = function(){
          return Id;
     }
}

var p = new Person("Rahma",22);
// console.log(p.Name);
p.Name = "Ali";
var p2 = new Person(); //Polymerphism
p.print();
console.log(p.getId());
console.log(p2.getId());
