// ----------------------------------JSON----------------------------------
var webclass = {
     students: [
          {
               id:1,
               name:"Rahma",
               age:22
          },
          {
               id:2,
               name:"Ali",
               age:21
          }
     ]
};
// alert(webclass.students[1].name);

var jsonstr = '{"ID":10,"Name":"Rahma","city":"Damietta"}';
var obj = JSON.parse(jsonstr);
// alert(obj.ID);

// -------------------------------------AJax-----------------------------------
//Communication between server, client - Asyncronos JS and xml
// Ajax call: 1. object of XMLHttpRequest
//            2. Open("Method", "URL", "true(Asyncronos)")
//            3. .onReadyStateChange = function{if(readystate=4 && .status=200) responseText, Json} => event occur when state change
//            4. send(); nonblocking function

var url = "https://reqres.in/api/products/";

function getProduct(){
     var xhr = new XMLHttpRequest();
     xhr.open("get","https://reqres.in/api/products/"+ document.getElementById("pID").value,true);

     // when server response will execute function
     xhr.onreadystatechange = function(){
          if(xhr.readyState == 4 && xhr.status == 200){
               var products = xhr.responseText;

               let prodObject = JSON.parse(products);
               showProduct(prodObject);
          }
     };
     xhr.send();
}

function showProduct(products){
     document.getElementById("prod").innerHTML = products.data.name;
}

// -----------------------------Cookies--------------------------------------
function createCookie(){
     var d = new Date();
     d.setDate(d.getDate()+3);

     var cookieval = document.getElementById("un").value;
     document.cookie = "name=" + cookieval + ";expires=" + d.toUTCString();

     alert("Setting cookies: "+"name= "+ cookieval);

     var cookieval = document.getElementById("age").value;
     document.cookie = "age=" + cookieval + ";expires=" + d.toUTCString();

     alert("Setting cookies: "+"age= "+ cookieval);
}

function readCookie(){
     var allcookie = document.cookie;
     //alert("All saved cookies: "+ allcookie);

     cookiearray = allcookie.split(';');
     //alert(cookiearray.length);

     for(var i = 0 ; i < cookiearray.length; i++){
          let key = cookiearray[i].split('=')[0];
          let value = cookiearray[i].split('=')[1];
          if(value){
               document.getElementsByTagName("input")[i].value = value;
          }
     }
}

function deleteCookie(){
     var d = new Date();
     d.setDate(d.getDate()-1);

     document.cookie = "name=null;expires="+d.toUTCString();
     document.cookie = "age=null;expires="+d.toUTCString();
}

//---------------------------Web Storage-----------------------
//window.localStorage: store data with no expiration date
//window.sessionStorage: store data for one session 

function storeInLocalStorage(){
     localStorage.setItem("name","Rahma");
     // localStorage.name = "Rahma";
     // localStorage["name"] = "Rahma";
}

function retrieveFromLocalStorage(){
     var result = localStorage.getItem("name");
     // var result = localStorage.name;
     // var result = localStorage["name"];
     return result;
}

function removeFromLocalStorage(){
     localStorage.removeItem("name");
}

//sessionStorage: equal to localStorage except that it stores the data for only one session.
