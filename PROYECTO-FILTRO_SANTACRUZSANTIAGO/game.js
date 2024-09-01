async function cargarOdject(){
    const response = await fetch("productos.json");
    const data = await response.json();
    return data;
}

async function Odtenerdata(){
    const datos = await cargarOdject();
    //console.log(datos)
    const element = document.getElementById("contenedor");
    datos.forEach( i  => {
        let content = document.createElement("div");
        content.className = "card"
        content.innerHTML = `
        <img src="${i.imagen}">
        <h3 class="titulo">${i.name}</h3>
        <p class="price">$${i.price}.000</p>
        <button class="boton-item">Comprar</button>`;
        element.appendChild(content);
    })
}
Odtenerdata()


