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
// --------------------------------------------------------------
// self-invoking function => immediate invoke function expression
// (function sum(n1, n2){
//      alert(n1+n2);
// })(10, 20);


