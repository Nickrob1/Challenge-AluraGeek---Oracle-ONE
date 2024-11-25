import { conexionAPI } from "./script.js";

const lista = document.querySelector("[data-lista]")

function crearCard(imagen,nombre,precio,id){
    const producto = document.createElement("li");
    producto.className = "card";
    producto.innerHTML = `<img class="productos__lista__imagen" src="Assets/${imagen}.png">
                    <p class="productos__lista__subtitulo">${nombre}</p>
                    <div class="productos__lista__precio__contenedor">
                        <p class="productos__lista__precio">$ ${precio}</p>
                        <i class="fa fa-trash" aria-hidden="true" data-id="${id}"></i>
                    </div>`;

    const botonEliminar = producto.querySelector(".fa-trash");
    botonEliminar.addEventListener("click", () => eliminarProducto(id, nombre));
    return producto;

}

async function eliminarProducto(id, nombre) {
    try{
        const conexion = await conexionAPI.eliminarProducto(id)
        if (conexion.ok){
            alert(`Se ha eliminado el producto ${nombre}`);
        } else {
            throw new Error(`Error al intentar eliminar el producto ${nombre}`)
        }
    } catch{
    }
}

async function listarProductos (){
    try{
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.imagen,producto.nombre,producto.precio,producto.id)));

    } catch{
        lista.innerHTML = `<h2 class="productos__titulo">No se han encontrado productos :(</h2>`
    }
    
}

listarProductos()