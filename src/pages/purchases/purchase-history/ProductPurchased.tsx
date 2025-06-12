interface ProductPurchasedProps {
    nombre: string;
    cantidad: number;
    precio: number;
    imagen: string;
}

export default function ProductPurchased({
    nombre,
    cantidad,
    precio,
    imagen,
}: ProductPurchasedProps) {
    return (
        <div className="flex items-center gap-4 p-3 border rounded-lg border-slate-300">
            <img src={imagen} alt={nombre} className="w-12 h-12 object-cover rounded" />
            <div className="flex-1">
                <p className="font-medium">{nombre}</p>
                <p className="text-sm text-gray-500">Cantidad: {cantidad}</p>
            </div>
            <p className="text-sm font-semibold text-gray-800">S/. {(precio * cantidad).toFixed(2)}</p>
        </div>
    );
}
