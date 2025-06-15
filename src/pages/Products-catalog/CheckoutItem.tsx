import { IconPlus, IconMinus, IconClose } from "../../components/Icons";

interface CheckoutItemProps {
  imagen: string;
  titulo: string;
  cantidad: number;
  precio: number;
  onCantidadChange: (nuevaCantidad: number) => void;
  onEliminar: () => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  imagen,
  titulo,
  cantidad,
  precio,
  onCantidadChange,
  onEliminar,
}) => {
  const aumentar = () => onCantidadChange(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 1) onCantidadChange(cantidad - 1);
  };

  return (
    <div className="relative grid grid-cols-[auto_1fr_auto] items-center bg-white p-4 pr-24 border border-gray-300 rounded-xl gap-4 mb-4 w-full min-h-[80px]">
      {/* Botón eliminar arriba a la derecha */}
      <button
        onClick={onEliminar}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-600 cursor-pointer"
        title="Eliminar producto"
      >
        <IconClose size={18} />
      </button>

      {/* Imagen */}
      <img
        src={imagen}
        alt={titulo}
        className="w-16 h-16 object-cover rounded-xl self-center"
      />

      {/* Nombre + precio + control de cantidad en mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between self-center overflow-hidden gap-2">
        {/* Nombre + precio */}
        <div className="flex flex-col">
          <h4 className="font-semibold text-base text-gray-800 truncate">
            {titulo}
          </h4>
          <p className="text-sm text-gray-500">S/. {precio.toFixed(2)}</p>
        </div>

        {/* Botones de cantidad*/}
        <div className="flex items-center gap-2">
          <button
            onClick={disminuir}
            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
            title="Disminuir cantidad"
          >
            <IconMinus className="text-gray-700" size={15} />
          </button>
          <span className="text-sm font-medium w-6 text-center">
            {String(cantidad).padStart(2, "0")}
          </span>
          <button
            onClick={aumentar}
            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600"
            title="Aumentar cantidad"
          >
            <IconPlus className="text-white" size={15} />
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-end self-center min-w-[100px]">
        <p className="text-sm font-bold">S/. {(precio * cantidad).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
