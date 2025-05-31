import { Link } from "react-router-dom";
import LayoutGuest from "../layouts/layout-guest";

export default function Login() {
  return (
    <LayoutGuest title="Iniciar sesión">
      <h1>Inicio de sesión</h1>
      <Link className="text-blue-600" to="/">
        Dashboard
      </Link>
    </LayoutGuest>
  );
}
