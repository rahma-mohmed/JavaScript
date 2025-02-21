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