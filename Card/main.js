

const navEl = document.querySelector(".nav");

const hamburguerEl = document.querySelector(".hamburguer");

const container = document.querySelector(".container");

const card = document.querySelectorAll(".card");

hamburguerEl.addEventListener("click", ()=>{
    navEl.classList.toggle("nav--open");
    hamburguerEl.classList.toggle("hamburguer--open");
})


container.addEventListener("click", ()=>{
    navEl.classList.remove("nav--open");
    hamburguerEl.classList.remove("hamburguer--open");
})

