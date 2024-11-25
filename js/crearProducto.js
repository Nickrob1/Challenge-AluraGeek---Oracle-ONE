import { conexionAPI } from "./script.js";
const form = document.querySelector("[data-form]");

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.enviarProducto(nombre,precio,imagen);
        alert("Se ha enviado el producto")
    }catch(e) {
        alert(e)
    }
    
}

const botonEnviar = document.querySelector("[data-enviar]")
const botonLimpiar = document.querySelector("[data-limpiar]")

botonEnviar.addEventListener("click",evento => crearProducto(evento));
botonLimpiar.addEventListener("click",evento => form.value="")



