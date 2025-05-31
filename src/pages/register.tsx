import { Link } from "react-router-dom";
import LayoutGuest from "../layouts/layout-guest";

export default function Register() {
  return (
    <LayoutGuest title="Registrarme">
      <h1>Registro de usuario</h1>
      <Link className="text-blue-600" to="/">
        Dashboard
      </Link>
    </LayoutGuest>
  );
}
