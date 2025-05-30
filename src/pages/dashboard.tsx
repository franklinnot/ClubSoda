import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link className="block text-blue-600" to="/login">
        Iniciar sesión
      </Link>
      <Link className="text-blue-600" to="/register">
        Registrarme ahora
      </Link>
    </div>
  );
}
