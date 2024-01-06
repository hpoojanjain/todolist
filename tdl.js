const inputtext = document.getElementById("myinput");
inputtext.value = localStorage.getItem("name");
const mylist = document.getElementById("mylist");

document.getElementById("mybutton").onclick = function () {
  const li = document.createElement("li");
//   const text= document.createElement("label")
  li.innerText=inputtext.value
//   li.appendChild(text);
  mylist.appendChild(li);
  inputtext.value = "";
};

function name() {}
