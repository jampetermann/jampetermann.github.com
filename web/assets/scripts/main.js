//alert("Bienvenido a mi ranking personal de manga");
//console.log("Bienvenido a mi ranking personal de manga");
//DOM (Document object model)

//let element = document.querySelector(".fa-star");
//Los objetos dentro del DOM se conocen como Nodos

let elementList = document.querySelectorAll (".fa-star");

elementList.forEach(function(element){
    console.log(element);
 });

 elementList.forEach(function(element){
    element.addEventListener('click',function(){
        //alert ("Estrellita Clickeada");
         element.classList.remove("far");
         element.classList.add("fas");
    })
});



//eventos

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click', function(ev){ 
         ev.preventDefault();
         content.classList.remove("animated");
         content.classList.remove("fadeInRight");
         content.classList.add("animated");
         content.classList.add("fadeOutLeft");
         setTimeout(() => {
            location.href="../index.html";
         }, 1000);
         
     });
 })