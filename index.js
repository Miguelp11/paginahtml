const boton = document.getElementById("boton");
const menu = document.getElementById("menu");
console.log(menu);
boton.addEventListener('click', () => {
    menu.classList.toggle("menumostrar");
}); 
