
class Producto{
    constructor(id,marca,nombre,precio,){
        this.id=id;
        this.marca=marca;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=1
    }
}

const courtVision=new Producto(1,"Nike","Court Vision Lo Be",22999);
const legenEssential=new Producto(2,"Nike","Legend Essential 2",23999);
const airMax=new Producto(3,"Nike","Air Max Sc",36999);
const coreracer=new Producto(4,"Adidas","Coreracer",15999);
const durame=new Producto(5,"Adidas","Durame 10",21999);
const gamecourt=new Producto(6,"Adidas","Gamecourt 2",19999);
const energylux=new Producto(7,"Rebook","Energylux 3.0",20399);
const reago=new Producto(8,"Rebook","Reago Essential",17999);
const lite=new Producto(9,"Rebook","Lite 3.0",17999);
const reacer=new Producto(10,"Fila","Reacer Advantage",17399);
const novaro=new Producto(11,"Fila","Novaro",17399);
const atmosphere=new Producto(12,"Fila","Atmosphere",14699);

const productos =[courtVision ,legenEssential ,airMax ,coreracer ,durame ,gamecourt ,energylux ,reago ,lite ,reacer ,novaro, atmosphere];


let carrito = [];


if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}



const listaProductos = document.getElementById("listaProductos");



const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-4", "col-md-6", "col-xs-12","tarjeta");
        card.innerHTML = `
            <div clas="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${producto.nombre} </h5>
                    <p class="card-text"> ${producto.precio} </p>
                    <button class="btn btn-primary">+</button><p>${producto.cantidad}</p><button class="btn btn-primary">-</button>
                    <button class="btn btn-primary" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        listaProductos.appendChild(card);

        
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    })
}



const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
         
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}


mostrarProductos();



const productosCarrito = document.getElementById("productosCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});



const mostrarCarrito = () => {
    productosCarrito.innerHTML="";
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-4", "col-md-6", "col-xs-12","tarjeta");
        card.innerHTML = `
            <div clas="card">
                <div class="card-body">
                <img src="..." class="card-img-top" alt="...">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <p class="card-text"> ${producto.cantidad} </p>
                <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
                </div>
            </div>
        `
        productosCarrito.appendChild(card);

        
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}




const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}



const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})



const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    
    localStorage.clear();
}



const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
        
    })
    total.innerHTML = `Total: $${totalCompra}`;
}







