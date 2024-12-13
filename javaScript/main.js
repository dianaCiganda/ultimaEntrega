let contenedor = document.getElementById("container");
let totalText = document.getElementById("totalText");
let finalCompra = document.getElementById("compraFinalizada")
let total = 0;

const productos = [
    { nombre: "bateria", precio: 16000, stock: 15, imagen: "../imagenes/bateria.webp" },
    { nombre: "resistencia", precio: 4500, stock: 20, imagen: "../imagenes/resistencia.webp" },
    { nombre: "pod", precio: 30000, stock: 34, imagen: "../imagenes/vaporessoXros.webp" },
    { nombre: "vaporizador", precio: 50000, stock: 5, imagen: "../imagenes/vapoo.webp" },
    { nombre: "e-liquid", precio: 6000, stock: 2, imagen: "../imagenes/e-liquid1.webp" }
];

function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        contenedor.innerHTML +=
            `<div class="tarjeta">
            <img class="imagenes"src="${arrayProductos[i].imagen}">
            <p>Producto: ${arrayProductos[i].nombre}- Precio: $${arrayProductos[i].precio} </p>
            <input  class="fondo-caja" type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly >
            <input class="tamanioCant"type="number" id="cantidad${i}" placeholder="cantidad" >
            <button class="btn1"id="btn${i}">Agregar al carrito</button>
            </div>
           `
    }

    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i, productos)
        })
    }
}


function comprar(index, arrayProductos) {
    let stockElement = document.getElementById(`stock${index}`);
    let cantidadElement = document.getElementById(`cantidad${index}`);
    let stock = stockElement.value;
    let cantidad = parseInt(cantidadElement.value);
    let precio = parseInt(arrayProductos[index].precio);

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        alert("Agregado al carrito con éxito. Total $" + total);
        totalText.innerHTML = `Total: ${total}`
        stockElement.value = stock - cantidad;
        cantidadElement.value = "";
    } else {
        alert("Compra invalida. La cantidad debe ser mayor a 0 y menor o igual al stock")
    }
}

pintarProductos(productos);
let final = document.getElementById("compraFinalizada");
final.addEventListener("click", () => {
    if (total > 0) {
        alert("Compra realizada con éxito");
        total = 0;
        totalText.innerHTML = `Total: ${total}`;
    } else {
        alert("No hay productos en el carrito para finalizar la compra");
    }
});

    
