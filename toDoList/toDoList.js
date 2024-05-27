const input = document.getElementById("input");
const btn = document.getElementById("btn");
const yeniGorev = document.getElementById("yeniGorev");
const demo = document.getElementById("demo");
const ul1 = document.getElementById("ulList1");
const ul2 = document.getElementById("ulList2");

btn.onclick=()=> {
  if (input.value == null || input.value == "") {
    alert("Lütfen bir görev giriniz...");
  } else {


    const li1 = document.createElement("li");
    li1.className = "li1";
    li1.textContent = input.value;

    const li2 = document.createElement("li");
    li2.className = "li2";
   


    const i1 = document.createElement("i");
    i1.className = "fa-sharp fa-solid fa-trash";

    i1.onclick = function () {
      li1.remove();
      li2.remove();
    };



    const i2 = document.createElement("i");
    i2.className = "fa-regular fa-circle-check";

    i2.onclick = function () {
      li1.classList.toggle("gorevtamam");
    };



    li2.appendChild(i1);
    li2.appendChild(i2);
    ulList1.appendChild(li1);
    ulList2.appendChild(li2);
    
    input.value = "";
  }
};
