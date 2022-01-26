//variables
let anchoPantalla = window.innerWidth;
const imagenMobile = document.querySelector(".imagen-mobile");
const imagenDesktop = document.querySelector(".imagen-dstop ");

const prueba = document.querySelectorAll(".flex-flecha");
const bloque = document.querySelectorAll(".respuesta");


if (anchoPantalla > 850) {
    imagenMobile.classList.add("oculto");
    imagenDesktop.classList.remove("oculto");
}

prueba.forEach((cadaFlecha, i)=>{
    prueba[i].addEventListener("click",()=>{
        bloque.forEach((cadaBloque,i)=>{
            bloque[i].classList.add("oculto");
        })
        bloque[i].classList.remove("oculto");
    })
});