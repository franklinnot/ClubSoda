import { useState } from "react";
import LayoutAuth from "../../layouts/layout-auth";
import InputField from "../../components/InputField";
import ComboBox from "../../components/ComboBox";
import InputLabel from "../../components/InputLabel";
import Button from "../../components/button";

export default function Dashboard() {
  const [data, setData] = useState({
    name: "",
    email: "",
    category: {} as IItem | null,
    description: "",
  });

  interface IItem {
    id: string;
    name: string;
  }

  const submit = () => {
    alert("Enviando consulta...");
  }

  const category_types: IItem[] = [
    { id: "1", name: "Estado de mi pedido" },
    { id: "2", name: "Problemas con el pago" },
    { id: "6", name: "Devoluciones o cambios" },
    { id: "8", name: "Reclamos o quejas" },
    { id: "9", name: "Otros" },
  ];

  return (
    <LayoutAuth title="Nueva consulta" className="pb-10 sm:pb-12 md:pb-14 lg:pb-16">
      <div
        className="flex flex-col px-7 gap-5 sm:gap-6 md:gap-7 lg:gap-8 divide-y divide-gray-300"
        onSubmit={submit}
      >
        {/* Titulo y descripcion */}
        <div className="pb-5 sm:pb-5 md:pb-6 lg:pb-7">
          <h1 className="text-2xl font-semibold text-slate-800">
            Nueva consulta
          </h1>
          <p className="text-sm font-medium text-slate-600">
            Completa el formulario y te contactaremos en menos de 24 horas.
          </p>
        </div>
        {/* entradas */}
        <form className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {/* nombre, correo y categoria */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            {/* nombre */}
            <InputField
              id="name"
              label="Nombre"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {/* correo */}
            <InputField
              id="email"
              label="Correo"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {/* categoria */}
            <ComboBox
              id="doctype"
              label="Categoría"
              value={data.category}
              items={category_types}
              onChange={(item) => item && setData({ ...data, category: item })}
            ></ComboBox>
          </div>

          {/* descripcion */}
          <div>
            <InputLabel htmlFor="description" value="Descripción" />
            <textarea
              id="description"
              name="description"
              className={`w-full px-3 py-2 resize-none border border-gray-300 
                        rounded-md text-sm transition-all duration-200 
                      placeholder-[#979797] focus:outline-none focus:ring-1 
                      focus:ring-[#CDCDCD] focus:border-[#CDCDCD] max-h-[120px]
                        ${data.description ? "bg-blue-50" : ""}`}
            />
          </div>

          {/* boton */}
          <Button className="px-10">Enviar</Button>
        </form>
      </div>
    </LayoutAuth>
  );
}
