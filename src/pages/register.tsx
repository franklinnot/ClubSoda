import { Link } from "react-router-dom";
import { useState } from "react";
import LayoutGuest from "../layouts/layout-guest";
import Checkbox from "../components/Checkbox";
import Button from "../components/button";
import InputField from "../components/InputField";
import ComboBox from "../components/ComboBox";

interface IItem {
  id: string;
  name: string;
}

const doctypes: IItem[] = [
  { id: "1", name: "DNI" },
  { id: "2", name: "Pasaporte" },
  { id: "3", name: "Carné de extranjería" },
];

export default function Register() {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    doctype: {} as IItem | null,
    doc_num: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
    accept_terms: false,
  });

  const [processing, setProcessing] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    alert("Ya lo envié");
    setProcessing(false);
  };

  return (
    <LayoutGuest title="Registrarme">
      <main
        className="min-h-dvh flex p-14 sm:px-16 justify-center items-center
                sm:bg-rose-50 sm:bg-gradient-to-tr sm:from-rose-50 
                to-white"
      >
        <div
          className="flex flex-col w-full max-w-[800px] sm:px-12 py-10 gap-10
                       sm:gap-12 lg:gap-14 justify-center items-center 
                        rounded-md sm:shadow-lg bg-white"
        >
          <Link to="/login">
            <img
              className="size-[80px]"
              src="/logo_login.svg"
              alt="San Jorge Logo"
            />
          </Link>
          <form
            action=""
            onSubmit={submit}
            className="flex flex-col gap-6 sm:gap-7 w-full max-sm:max-w-[380px]"
          >
            {/* campos */}
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
              {/* nombre */}
              <InputField
                id="name"
                label="Nombre"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              ></InputField>
              {/* apellido */}
              <InputField
                id="lastname"
                label="Apellido"
                value={data.lastname}
                onChange={(e) => setData({ ...data, lastname: e.target.value })}
              ></InputField>
              {/* tipo de documento */}
              <ComboBox
                id="doctype"
                label="Doc. de identidad"
                value={data.doctype}
                items={doctypes}
                onChange={(item) => item && setData({ ...data, doctype: item })}
              ></ComboBox>
              {/* numero del documento */}
              <InputField
                id="doc_num"
                label="Número de documento"
                type="number"
                maxLength={8}
                inputMode="numeric"
                pattern="[0-9]{8}"
                autoComplete="dni"
                value={data.doc_num}
                onChange={(e) => setData({ ...data, doc_num: e.target.value })}
              ></InputField>
              {/* telefono */}
              <InputField
                id="phone"
                label="Teléfono"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              ></InputField>
              {/* correo */}
              <InputField
                id="email"
                label="Correo"
                value={data.email}
                autoComplete="username"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              ></InputField>
              {/* contaseña */}
              <InputField
                id="password"
                label="Contraseña"
                type="password"
                autoComplete="new-password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              ></InputField>
              {/* confirmar contraseña */}
              <InputField
                id="password_confirmation"
                label="Confirma tu contraseña"
                type="password"
                autoComplete="new-password"
                value={data.password_confirmation}
                onChange={(e) =>
                  setData({ ...data, password_confirmation: e.target.value })
                }
              ></InputField>
            </div>
            {/* aceptar terminos y condiciones */}
            <div>
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.accept_terms}
                  onChange={(e) =>
                    setData({ ...data, accept_terms: e.target.checked })
                  }
                  disabled={processing}
                />
                <span className="ms-2 text-sm text-gray-600">
                  Acepto los{" "}
                  <span className="text-blue-500">términos y condiciones</span>
                </span>
              </label>
            </div>
            <Button>Registrarme</Button>
          </form>
        </div>
      </main>
    </LayoutGuest>
  );
}
