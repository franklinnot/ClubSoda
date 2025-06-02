import Checkbox from "../components/Checkbox";
import LayoutGuest from "../layouts/layout-guest";
import InputField from "../components/InputField";
import Button from "../components/button";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [processing, setProcessing] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    alert("Ya lo envié");
    setProcessing(false);
  };
  return (
    <LayoutGuest title="Iniciar de sesión">
      <form className="flex flex-col gap-6" onSubmit={submit}>
        <InputField
          id="email"
          label="Correo"
          inputMode="numeric"
          maxLength={8}
          pattern="[0-9]{8}"
          value={data.email}
          autoComplete="username"
          isFocused={true}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          disabled={processing}
          // error={errors.dni}
        />

        <InputField
          id="password"
          type="password"
          label="Contraseña"
          value={data.password}
          autoComplete="current-password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          disabled={processing}
          // error={errors.password}
        />

        <div>
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData({ ...data, remember: e.target.checked })}
              disabled={processing}
            />
            <span className="ms-2 text-sm text-gray-600">Recuérdame</span>
          </label>
        </div>

        <Button disabled={processing}>Iniciar sesión</Button>
      </form>
    </LayoutGuest>
  );
}
