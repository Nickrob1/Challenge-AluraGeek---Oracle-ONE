
async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const dataConvertida = await conexion.json();
    return dataConvertida;
}


async function enviarProducto(nombre,precio,imagen) {
    const conexion = await fetch ("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const dataConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error ("ha ocurrido un error al enviar el producto")
    }

    return dataConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });
}


export const conexionAPI = {
    listarProductos,enviarProducto, eliminarProducto
}