

var p1 = document.getElementById("prva");

const lista1 = document.createElement("ul");

const predmet1 = document.createElement("li");
predmet1.textContent = "IM1";
const predmet2 = document.createElement("li");
predmet2.textContent = "IM2";
const predmet3 = document.createElement("li");
predmet3.textContent = "OE";
const predmet4 = document.createElement("li");
predmet4.textContent = "TP";

lista1.appendChild(predmet1);
lista1.appendChild(predmet2);
lista1.appendChild(predmet3);
lista1.appendChild(predmet4);
p1.appendChild(lista1);

var p2 = document.getElementById("druga");

const lista2 = document.createElement("ul");

const predmet11 = document.createElement("li");
predmet11.textContent = "ASP";
const predmet22 = document.createElement("li");
predmet22.textContent = "RPR";
const predmet33 = document.createElement("li");
predmet33.textContent = "US";
const predmet44 = document.createElement("li");
predmet44.textContent = "RMA";

lista2.appendChild(predmet11);
lista2.appendChild(predmet22);
lista2.appendChild(predmet33);
lista2.appendChild(predmet44);
p2.appendChild(lista2);


lista1.style.display = "none";
lista2.style.display = "none";



function toggleDisplay(lista) {
    if(lista.style.display === "none") {
        lista.style.display ="block";
    }
    else 
        lista.style.display="none";

}

p1.addEventListener("click", () => toggleDisplay(lista1));
p2.addEventListener("click", () => toggleDisplay(lista2));

var para = document.querySelectorAll("p");
para.forEach(element => {
    element.style.backgroundColor = "red";
});


var dugme = document.getElementById("calc");
dugme.addEventListener("click" , function () {
    var unos = document.getElementById("unos");
    var broj = unos.value;
    var rez = (4*broj*broj*broj*Math.PI)/3;
    document.getElementById("rezultat").value = rez;
})




