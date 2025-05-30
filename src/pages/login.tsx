import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Inicio de sesión</h1>
      <Link className="text-blue-600" to="/">
        Dashboard
      </Link>
    </div>
  );
}
