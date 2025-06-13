import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputField";
import { distritos } from "./data/distritos";
import ComboBox from "../../components/ComboBox";
import { sedes, tiendasPorSede } from "./data/sucursales";

interface CheckoutFormProps {
  tipoEntrega: "delivery" | "recojo";
  setTipoEntrega: (tipo: "delivery" | "recojo") => void;
  celular: string;
  setCelular: (valor: string) => void;
  email: string;
  setEmail: (valor: string) => void;
  direccion: string;
  setDireccion: (valor: string) => void;
  referencia: string;
  setReferencia: (valor: string) => void;
  district: string;
  setDistrict: (valor: string) => void;
  fechaSeleccionada: string;
  setFechaSeleccionada: (valor: string) => void;
  stars: number;
  setStars: (valor: number) => void;
  sede: string;
  setSede: (valor: string) => void;
  tienda: string;
  setTienda: (valor: string) => void;

}

const CheckoutForm: React.FC<CheckoutFormProps> = ({

  tipoEntrega,
  setTipoEntrega,
  celular,
  setCelular,
  email,
  setEmail,
  direccion,
  setDireccion,
  referencia,
  setReferencia,
  district,
  setDistrict,
  fechaSeleccionada,
  setFechaSeleccionada,
  sede,
  setSede,
  tienda,
  setTienda,
}) => {
  return (

    <div className="bg-white p-6 rounded-xl border border-gray-300 shadow space-y-6">
      <h3 className="font-semibold text-gray-600 border-b border-gray-300 py-2 mb-4">
        Tipo de entrega
      </h3>

      <div className="flex justify-center">
        <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
          <PrimaryButton
            onClick={() => setTipoEntrega("delivery")}
            className={`rounded-none px-4 py-2 text-sm font-medium transition-all duration-200 ${tipoEntrega === "delivery"
              ? "bg-gray-800 text-white"
              : " text-gray-700 hover:bg-gray-100"
              }`}
          >
            Delivery
          </PrimaryButton>
          <PrimaryButton
            onClick={() => setTipoEntrega("recojo")}
            className={`rounded-none px-4 py-2 text-sm font-medium transition-all duration-200 ${tipoEntrega === "recojo"
              ? "bg-gray-800 text-white"
              : " text-gray-700 hover:bg-gray-100"
              }`}
          >
            Recojo
          </PrimaryButton>
        </div>
      </div>

      {tipoEntrega === "delivery" ? (
        <div className="space-y-4 text-sm text-gray-700">
          <InputField
            id="celular"
            label="Celular"
            type="number"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <InputField
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="direccion"
            label="Dirección"
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <InputField
            id="referencia"
            label="Referencia"
            type="text"
            value={referencia}
            onChange={(e) => setReferencia(e.target.value)}
          />
          <ComboBox
            id="district"
            label="Distrito"
            items={distritos}
            value={distritos.find((d) => d.id === district) || null}
            onChange={(item) => setDistrict(item?.id || "")}
          />
        </div>
      ) : (
        <div className="space-y-4 text-sm text-gray-700">
          <ComboBox
            id="sede"
            label="Sede"
            items={sedes}
            value={sedes.find((s) => s.id === sede) || null}
            onChange={(item) => {
              setSede(item?.id || "");
              setTienda(""); // Reinicia la tienda si se cambia de sede
            }}
          />

          <ComboBox
            id="tienda"
            label="Tienda"
            items={tiendasPorSede[sede] || []}
            value={tiendasPorSede[sede]?.find((t) => t.id === tienda) || null}
            onChange={(item) => setTienda(item?.id || "")}
          />

          <InputField
            id="fecha-recojo"
            label="Fecha de recojo"
            type="date"
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
          />

          <p className="text-gray-500 italic"> Horario de recojo: 8:00am-4:30pm</p>

        </div>

      )}
    </div>
  );
};

export default CheckoutForm;
