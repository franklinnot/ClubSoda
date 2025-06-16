// src/pages/Auth/Register.tsx
import { useState } from "react";
import { IconClose } from "../../components/Icons";
import InputField from "../../components/InputField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/button";
import ComboBox from "../../components/ComboBox";
import { useAuth } from "../../AuthContext"; // Importa el hook de autenticación
import type { IUser } from "../../classes/interfaces/iuser"; // Importa la interfaz de usuario

interface IItem {
  id: string;
  name: string;
}

type RegisterProps = {
  onClose: () => void;
  onSwitch: () => void;
};

export default function Register({ onClose, onSwitch }: RegisterProps) {
  const { register } = useAuth(); // Usa el hook para acceder a la función register
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

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

  const doctypes = [
    { id: "1", name: "DNI" },
    { id: "2", name: "Pasaporte" },
    { id: "3", name: "Carné de extranjería" },
  ];

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    setError(null); // Resetea errores anteriores

    // Validaciones básicas antes de enviar
    if (data.password !== data.password_confirmation) {
      setError("Las contraseñas no coinciden.");
      setProcessing(false);
      return;
    }
    if (!data.accept_terms) {
      setError("Debes aceptar los términos y condiciones.");
      setProcessing(false);
      return;
    }
    if (!data.doctype || !data.doctype.name) {
      // Asegúrate de que doctype tenga un nombre válido
      setError("Por favor selecciona un tipo de documento.");
      setProcessing(false);
      return;
    }

    const newUser: IUser = {
      name: data.name,
      lastname: data.lastname,
      doctype: data.doctype.name, // Asegúrate de pasar solo el nombre
      doc_num: data.doc_num,
      phone: data.phone,
      email: data.email,
      password: data.password,
    };

    const success = await register(newUser);

    if (success) {
      alert("¡Registro exitoso! Has iniciado sesión automáticamente.");
      onClose(); // Cierra el modal o redirige
    } else {
      setError(
        "El correo electrónico ya está registrado o hubo un error en el registro."
      );
    }

    setProcessing(false);
  };

  return (
    <div className="relative w-full max-w-[800px] bg-white shadow-md rounded-2xl px-8 py-10">
      {/* Botón cerrar */}
      <button
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-500 text-slate-700 hover:text-gray-100 transition-colors duration-75"
        title="Cerrar"
        type="button"
        onClick={onClose}
      >
        <IconClose size={20} />
      </button>

      <div className="flex flex-col items-center gap-10">
        <img
          className="size-[80px]"
          src="/logo_login.svg"
          alt="San Jorge Logo"
        />

        <form
          onSubmit={submit}
          className="flex flex-col gap-6 sm:gap-7 w-full max-w-[700px]"
        >
          {/* campos */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
            <InputField
              id="name"
              label="Nombre"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <InputField
              id="lastname"
              label="Apellido"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />
            <ComboBox
              id="doctype"
              label="Doc. de identidad"
              value={data.doctype}
              items={doctypes}
              onChange={(item) => item && setData({ ...data, doctype: item })}
            />
            <InputField
              id="doc_num"
              label="Número de documento"
              type="number"
              maxLength={8}
              inputMode="numeric"
              pattern="[0-9]{8}"
              value={data.doc_num}
              onChange={(e) => setData({ ...data, doc_num: e.target.value })}
            />
            <InputField
              id="phone"
              label="Teléfono"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <InputField
              id="email"
              label="Correo"
              value={data.email}
              autoComplete="username"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <InputField
              id="password"
              label="Contraseña"
              type="password"
              autoComplete="new-password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <InputField
              id="password_confirmation"
              label="Confirma tu contraseña"
              type="password"
              autoComplete="new-password"
              value={data.password_confirmation}
              onChange={(e) =>
                setData({ ...data, password_confirmation: e.target.value })
              }
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
          {/* Muestra el error */}
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
          <Button type="submit" disabled={processing}>
            Registrarme
          </Button>
        </form>

        {/* Cambio a login */}
        <button
          type="button"
          className="text-sky-500 underline cursor-pointer hover:text-blue-500 text-sm"
          onClick={onSwitch}
        >
          ¿Ya tienes cuenta?
        </button>
      </div>
    </div>
  );
}
