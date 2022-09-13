let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);


let active=document.createElement("div");
active.setAttribute("id","active");
let confirmed=document.createElement("div");
confirmed.setAttribute("id","confirmed");
let death=document.createElement("div");
death.setAttribute("id","death");

div.append(input,button,active,confirmed,death);
document.body.append(div);



async function foo(){
let countryname=document.getElementById("country").value;
console.log(countryname);
let url=`https://api.covid19api.com/dayone/country/${countryname}`;
let res= await fetch(url);
let res1=await res.json();
console.log(res1);
let index=res1.length-1;
// console.log(res1[index].Active);
// console.log(res1[index].confirmed);
// console.log(res1[index].daeth);


active.innerHTML=`<div class="card" style="width: 18rem; margin-left:41%">
<ul class="list-group list-group-flush">
  <li class="list-group-item">total active cases:${res1[index].Active}</li>
  </ul>
</div>`

confirmed.innerHTML=`<div class="card" style="width: 18rem; margin-left:41%">
<ul class="list-group list-group-flush">
  <li class="list-group-item">confirmed:${res1[index].Confirmed}</li>
  </ul>
</div>`

death.innerHTML=`<div class="card" style="width: 18rem; margin-left:41%">
<ul class="list-group list-group-flush">
  <li class="list-group-item">deaths:${res1[index].Deaths}</li>
  </ul>
</div>`




}





