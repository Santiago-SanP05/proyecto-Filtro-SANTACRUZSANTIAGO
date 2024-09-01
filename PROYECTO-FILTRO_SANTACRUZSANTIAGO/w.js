async function CargarDatos(){
    const response =  await fetch("productos.json");
    const data = await response.json();
    

    data.forEach((products) => {
        let content = document.createElement("div");
        content.className = "card"
        content.innerHTML = `
        <img src="${products.imagen}">
        <h3>${products.name}</h3>
        <p class="price">${products.price}</p>`;

        shopContent.append(content);
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.classList = "comprar";

        content.append(comprar);

        comprar.addEventListener('click', () => {
            const repeat = carrito.some((repeatProducts) => repeatProducts.id === products.id);

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === products.id){
                        prod.cantidad++;
                    };
                })
            } else {
                carrito.push({
                    id:products.id,
                    img:products.imagen,
                    nombre: products.name,
                    precio: products.price
                });
                console.log(carrito);
                console.log(carrito.length);
                carritoCounter()
                saveLocal()
            };
        });

    });
};

async function OdtenerElementos(){
    const productos = await CargarDatos();
    
}
