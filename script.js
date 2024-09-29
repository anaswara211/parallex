let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value= window.scrollY;
    moon.style.top=value*.9+"px";
    text.style.top=90+value*-0.2+'%';
    train.style.left=value*1.5+"px";

    desert_moon.style.top = value*.3+"px";
    man.style.left = value*.6+"px";
})



