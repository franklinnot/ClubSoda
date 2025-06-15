import { useParams } from "react-router-dom";
import { productos } from "./Products-catalog/data/productos";
import InputLabel from "../components/InputLabel";
import PrimaryButton from "../components/PrimaryButton";
import type { FC } from "react";
import { agregarAlCarrito } from "../utils/carrito";
import Header from "../layouts/partials/header";
import { IconStar } from "../components/Icons";
import CarruselProductos from "./Products-catalog/Carruselproductos";


const ProductoIndividual = () => {
    const { id } = useParams<{ id: string }>();
    const producto = productos.find((p) => p.id === (id));
    if (!producto) {
        return <p className="text-center mt-10">Producto no encontrado</p>
    }
    const handleagregar = () => {
        const productoAdaptado = {
            name: producto.nombre,
            price: producto.precio,
            url: producto.imagen,
        };
        agregarAlCarrito(productoAdaptado);
        alert("Producto agregado al carrito");
    }
    return (
        <>
            <Header title="Producto individual" />
            {/* CONTENEDOR PRINCIPAL */}

            <div className="justify-center items-center max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">

                {/* IMAGEN - IZQUIERDA */}
                <div className=" w-full md:w-3/7 flex flex-col items-center">

                    {/* Nombre */}
                    <h1 className="mx-auto md:mx-0 justify-center text-2xl font-semibold text-red-500 mt-s mb-4">{producto.nombre}</h1>
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="border border-gray-300 w-full max-h-[400px] object-contain rounded-xl shadow-lg  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_4px_20px_rgba(248,113,113,0.7)]"
                    />
                    <div className="flex gap-2 mt-4">
                        {[...Array(3)].map((_, i) => (
                            <img
                                key={i}
                                src={producto.imagen}
                                alt={`Vista ${i + 1}`}
                                className="w-16 h-16 object-cover border border-gray-400 shadow-lg rounded hover:ring-2 hover:ring-red-500 cursor-pointer transition-shadow duration-300"
                            />
                        ))}


                    </div>

                </div>

                {/* CONTENIDO DE LA DERECHA */}
                <div className="w-full md:w-2/3 flex flex-col justify-start space-y-12">


                    {/* Bloque sku y rating */}
                    <div className="shadow-lg mx-auto md:mx-0 justify-center w-max  p-1  flex items-center gap-30">
                        <p className="text-sm text-gray-600 ">
                            <span className="font-semibold ">SKU:</span> #{producto.id}
                        </p>
                        <div className="justify-center flex items-center gap-1">
                            <h2 className="text-sm text-blue-900">4.5 rating</h2>
                            <div className="relative w-5 h-5">
                                <div className="absolute top-0 left-0 w-3/5 h-full overflow-hidden">
                                    <IconStar className="text-yellow-400 w-5 h-5" fill="currentColor" />
                                </div>
                                <IconStar className="text-gray-300 w-5 h-5" fill="currentColor" />
                            </div>
                        </div>

                    </div>



                    {/* Categoría y extras y descripcion */}
                    <div className="mx-auto md:mx-0 w-80 shadow-lg rounded-lg p-4  space-y-3">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Categoría: </span>{producto.categoria.join(", ")}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {producto.descripcion || "Este producto no cuenta con una descripción detallada..."}
                        </p>

                        <p className="text-sm text-gray-600">Entrega gratis en pedidos desde S/.100</p>
                        <p className="text-orange-600 font-medium">¡Producto muy vendido!</p>

                    </div>


                    {/* Botón y precio */}
                    <div className="mx-auto md:mx-0 justify-center w-max shadow-lg rounded-lg p-4  flex items-center gap-6">
                        <PrimaryButton
                            onClick={handleagregar}
                            className="!text-gray-700 bg-green-400 hover:bg-green-300 rounded-lg px-4 py-2 text-sm"
                        >
                            Agregar al carrito
                        </PrimaryButton>
                        <p className=" mx-auto md:mx-0 px-8 text-black text-sm font-semibold">S/. {producto.precio}</p>

                    </div>





                </div>

                <div className="gap-2 flex justify-end ">
                    <CarruselProductos />
                </div>

            </div>




        </>

    )



}

export default ProductoIndividual