//VISTA LOCALIZACIONES

//funcion para cambiar imagenes
let urls = ["./IMG/Dark_Continent.jpg","./IMG/ciudadazaban.jpg","./IMG/greed-island.jpg"];

const imagen_principal = document.getElementById("primera-foto");
const botonCambio = document.getElementById("boton-cambio");
let indice = 0;
botonCambio.addEventListener("click", cambiarFoto);
function cambiarFoto() {
    console.log(indice)
    if (indice<=2){
        imagen_principal.setAttribute("src",urls[indice])
        indice++;
        if (indice>2){indice=0}
    }

}