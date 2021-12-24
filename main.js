
class producto {

    constructor(nombre,descripcion,precio){

        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
    }
}

const productos = []; 

let cuenco = new producto ("Cuenco", "Para salsas", 250)
productos.push(cuenco)
let playo = new producto ("Playo", "Para carnes", 450)
productos.push(playo)
let hondo = new producto ("Hondo", "Para sopas", 550)
productos.push(hondo)


const divProductos = document.getElementById("renderProducto");

document.onload
    if (productos.length > 0 ){
        productos.forEach(e=>{
            divProductos.innerHTML=  `
            
            <h3>${e.nombre}</h3> 
            <p>${e.descripcion}</p>
            <p>${e.precio}</p>
           
            `
        })
    }


function agregarAlCarrito (){

        let parrafo = document.createElement("p");
    
        parrafo.innerHTML= "Producto agregado al carrito";
        parrafo.classList.add("myStyle2");
        document.getElementById("renderProducto").appendChild(parrafo)
    
    }