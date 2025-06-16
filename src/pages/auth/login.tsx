// src/pages/Auth/Login.tsx
import { useState, useEffect } from "react";
import { IconClose } from "../../components/Icons";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/button";
import { useAuth } from "../../AuthContext"; // Importa el hook de autenticación

type LoginProps = {
  onClose: () => void;
  onSwitch: () => void;
};

export default function Login({ onClose, onSwitch }: LoginProps) {
  const { login } = useAuth(); // Usa el hook para acceder a la función login
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    document.title = "Iniciar sesión";
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    setError(null); // Resetea errores anteriores

    const success = await login(data.email, data.password);

    if (success) {
      alert("¡Inicio de sesión exitoso!");
      onClose(); // Cierra el modal o redirige
    } else {
      setError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }

    setProcessing(false);
  };

  return (
    <div className="relative w-full max-w-[448px] shadow-md rounded-2xl bg-white/95 z-50 flex flex-col items-end">
      {/* Botón cerrar */}
      <button
        className="mr-3 mt-3 p-1 rounded-full hover:bg-slate-500
                   focus:outline-none text-slate-700 hover:text-gray-100
                   transition-colors duration-75"
        title="Cerrar"
        type="button"
        onClick={onClose}
      >
        <IconClose size={20} />
      </button>

      {/* Contenido */}
      <div className="flex flex-col gap-14 w-full justify-center items-center py-20 pb-16">
        <Link to="/login">
          <img
            className="size-[80px]"
            src="/logo_login.svg"
            alt="San Jorge Logo"
          />
        </Link>
        <div className="w-full px-6 sm:px-7 md:px-8">
          <form className="flex flex-col gap-6" onSubmit={submit}>
            <InputField
              id="email"
              type="email"
              label="Correo"
              value={data.email}
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              disabled={processing}
            />
            <InputField
              id="password"
              type="password"
              label="Contraseña"
              value={data.password}
              autoComplete="current-password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              disabled={processing}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
            {/* Muestra el error */}
            <div className="flex flex-row text-sm justify-between my-0.5">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) =>
                    setData({ ...data, remember: e.target.checked })
                  }
                  disabled={processing}
                />
                <span className="ms-2 text-gray-600">Recuérdame</span>
              </label>

              {/* Cambio a registro */}
              <button
                type="button"
                className="text-sky-500 underline cursor-pointer hover:text-blue-500"
                onClick={onSwitch}
              >
                ¿No tienes cuenta?
              </button>
            </div>
            <Button type="submit" disabled={processing}>
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
