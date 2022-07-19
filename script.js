// setInterval functional
//Example of setinterval function

setInterval(()=>{
    console.log("Ayush")
},3000)//it will execute after every 3 second for infinite time and does not stop untill we stop it manually


// setTimeout function

setTimeout(()=>{
    console.log("Ayush")
},3000)//it will execute the callback function only once after 3 seconds
// Example-->error message need to  hide after some time


//XMLHTTP Request
//Request->asking something to someone,whoever send request are called client,and whoever receive called server
//request contain header ,body,footer
//request header contain where request comes where it goes
//response contain where it start where it going and data 
//each and every request got validated whether pass or fail depend on http status code
//http methods define what type of operation request going to perform on server
//GET--->asking for data from server,not sending any data in request body
// POST-->SEnd some data in request body,so that server can create entry
//put-->update/replace the data completely,resubmission of data
//DELETE-->to delete data
//Patch-->to update a part of data ,changing mobile number

//http status code help in getting http request is success or fail
//100-199-->acknwleedgement,just wait i am searching or sending the data
// 200-299-->success
// 200-->0k
// 201->created
// 209->conflict,created account with same emailid,account already exixt
// 300-399-->redirection,for videos etc
// 400-499-->client-side error
// 400->bad request,server unable to understand the requested data
// 401->unauthorized,password wrong
// 403->forbidden,have access to guvi free content but not to paid course
// 405->method not allowed,whatever http method you send i am not supporting it
// 404->data not found
// 422->unprocessed entity
// 500-599-->server side error
// 500->internal server error
// 503->gateway error,each web server has time ,if time ends you will get error  



// browser by default support GET method

let request=new XMLHTTPRequest();//XMLHTTPRequest() is a class and to access it we need an object request
request.open(GET,"https://6220579cce99a7de195694b6.mockapi.io/api")//prepare the method
request.send();//to send request

request.onload=()=>{//event execute the callback function
    consle.log(request.responseText);
    console.log(request.response);
    console.log(request.status);//to know status code
}

//advantage and when to use XMLHTTPRequest 
// if you are downloading  a large file if want to know what % of data is transfer then go for XMLHTTPRequest ONLY it can track 
// request.onprogress-->it give amount of data is transfered,fetch and AXIOS does not have that property
// request.onerror-->will execute when there is some eror
// request.onabort->when request got aborted/or data transferring get aborted this request get executed,register form submitted only once chahe user kitni hi baar submit krde

//EVENT HANDELLER

// document direct to current html file

let btn=document.getElementById("btn1");
btn.addEventListener("click",function(){

})
//on clicking it perform the function


//creating table using DOM
let table=document.createElement("table");
table.setAttribute("border",1)
let tr=document.createElement("tr");
let td=document.createElement("td");
td.textContent="my name";
tr.appendChild(td);
table.appendChild(tr);
document.body.appendChild(table);


//getElementById is used to select particular id,whereas getQueryselector used to select every element presnt in code

// Pagination
// let arr=[1,2,3,4,5];
// let totContentOnaPage=10;
// let totalPages=a/10;
// let remainPage=a%2==0
// total pages+=1

// for(let i=0; i<arr.length; i++){
//     const element=arr[i];
//     //create total pages on the screen
// }

// handleonclick(no){
// for(let i=81; i<10; i++){
// const element=arr[i];
// }
// }