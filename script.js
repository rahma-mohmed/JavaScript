// -----------------Fundamentals---------------------
function sayhello(){
     console.log("hello world");
}

function ternaryOperator(){
     var temp = 50;
     var result = (temp >= 50) ? "Hot" : "Cold";
     return result;
}

function promptFun(){
     var name = prompt("Enter yout name:" , "Name");
     return name;
}

function ConfirmFun(){
     var response = confirm("Are you sure?");
     return response;
}

function sum(){
     var x = parseInt(prompt("Enter first value"));
     var y = parseInt(prompt("Enter next number"));

     var result = x+y;
     alert(result);

     num = Number("123f");
     if(isNaN(num)){
          return "Not a number";
     }
     else{
          return "a numbr";
     }
}

function testNumber(){
     var x = isFinite("hi");
     document.writeln(x);
}

function testString(){
     var x = isNaN("3R");
     document.writeln(x);
}

function debuger(){
     for(let i = 0; i<5 ;i++){
          debugger;
          console.log(i);
     }
}

function stringFunction(x=""){
     document.write(x.charAt(0));
     document.write(x.indexOf("a"));
     document.write(x.lastIndexOf("a"));
     document.write(x.substring(1,7));
     document.write(x.concat("Rahma"));
}


function numberFunction(n){
     //n = new Number();
     var mx = Number.MAX_VALUE;
     var pInf = Number.POSITIVE_INFINITY;
     var nInf = Number.NEGATIVE_INFINITY;

     var n1 = n.toFixed(2);
     var n2 = n.toPrecision(3)
     var n3 = n.toExponential(2);

     //parameter: number system
     //n = n.toString(2);
     //n = n.toString(16);

     return n;
}

function Random0To10(){
     var n = Math.round(Math.random()*10);
     return n;
}

function arrayFunction(){
     var arr1 = ["A","B","C"]; //value type

     var arr2 = new Array() //reference type
     arr2[0] = 1;
     arr2[1] = 2;
     arr2[2] = 3;

     var arr = arr1.concat(arr2);
     arr.reverse();
     arr.pop();
     arr.push("D");

     arr.shift();
     arr.unshift(4);

     arr.sort(); // sort alphapitacally

     return arr.join("-");
}

function associativeArray(){
     //key-value pair
     var assocArray = new Array();
     assocArray["Rahma"] = 22;
     assocArray["Mohmed"] = 20;
     
     // let : block scope, not hoisted
     // for-in => return index
     // for-of => return value
     for(let val in assocArray){
          console.log(val,assocArray[val]);
     }
}

function dateFunction(){
     var d = new Date(2025,2,14);
     var day = d.getDate();
     var month = d.getMonth();
     var year = d.getFullYear();

     // toLocalDateString()
     // toLocalTimeString()

     return d.toLocaleString();
}

function regularExpression(){
     //regex101.com
     //$ => end with, . => any character
     // search(), match(), split()
     var reg = /^j.*t$/i;
     var reg1 = new RegExp("j.*t$","i");

     var str = "JavaScript";
     var equal = reg1.test(str);

     var res = str.replace(/a/g , "E");

     return reg1.exec(str);
}


// -----------------BOM------------------------------------------------------------------
// window
var win1;
function winFunction(){
     win1 = window.open('','_Blank','width=200,height=200,screenX=333,screenY=111');
     win1.document.write("The new window");
     alert(win1.closed);
}

// ---------------screen-----------------------------------------------------------------
//availHight, availWidth, colorDepth, height, pixelDepth, width
function screenFunction(){
     hight = screen.availHeight; //exclude window taskbar
     width = screen.availWidth;
     totalwidth = screen.width;
     document.write(width);
}

//----------------navigator-------------------------------------------------------------
//appName appVersion, language, cookieEnabled, platform(name of OS), online, geoLocation
function navigatorFunction(){
     language = navigator.language;
     document.write(navigator.onLine," ",navigator.cookieEnabled);
}

function locationFunction(){
     loc = location.href; // url of the page
     hash= location.hash; // part after #
     search = location.search; // part after ?
     //reload(), replace(url) save in browser histroy, assign(url)
}

function histroyFunction(){
     //history.length, back(), forward(), go()
     len = history.length;
     //history.back();
     //history.forward();
     //history.go(0); // take index [0:first page]
}

// ------------------Event----------------------------------------------------------------
// event.target return object of element that event on it
// event.type: event type
// event.timeStamp: event time
function eventFunction(ev){
     //Mouse event proprety(screenX, screenY)
     // button 0 left,2 right | ctrlKey, shiftKey
     // detail: return the number of clicks
     if(ev.button == 0 && ev.altKey == true){
          alert("Win !!");
     }
}

function testKeyDown(ev){
     //alert(ev.code);
     alert(ev.key);
}

function preventSpace(e){
     if(e.key==" "){
          e.preventDefault();
     }
}