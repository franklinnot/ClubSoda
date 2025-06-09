import type { IProduct } from "../classes/interfaces/iproduct";
import type { ISaleDetail } from "../classes/interfaces/isaleDetail";

export function obtenerCarrito(): ISaleDetail[]{
    const data = localStorage.getItem("carrito");
    return data? JSON.parse(data):[]

}

export function guardarCarrito(detalles: ISaleDetail[]){

    localStorage.setItem("carrito", JSON.stringify(detalles))
    window.dispatchEvent(new Event("storage"))


}

export function agregarAlCarrito(producto:IProduct){
    let carrito = obtenerCarrito();
    const existente = carrito.find((item)=>item.product.name === producto.name)
    if(existente){
        existente.quantity +=1;
        existente.subtotal = existente.quantity * producto.price;
    }else{
        carrito.push({product: producto, quantity:1, subtotal:producto.price})
    }

    guardarCarrito(carrito);
    window.dispatchEvent(new Event("storage"))

}
export function eliminarProducto(nombre: string) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(p => p.product.name !== nombre);
  guardarCarrito(carrito);
    window.dispatchEvent(new Event("storage"))

}


export function vaciarCarrito(){
    localStorage.removeItem("carrito")
    window.dispatchEvent(new Event("storage"))

}



export const agregarProductoAlCarrito = (nuevoProducto: ISaleDetail)=>{
    const carrito = obtenerCarrito();
    const index = carrito.findIndex(
        (item)=> item.product.name === nuevoProducto.product.name
    );

    if(index!== -1){
        carrito[index].quantity +=nuevoProducto.quantity;
        carrito[index].subtotal += nuevoProducto.subtotal;
    }else{
        carrito.push(nuevoProducto);
    }

    guardarCarrito(carrito)

    window.dispatchEvent(new Event("storage"))


}




