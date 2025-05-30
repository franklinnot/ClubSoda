import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1>Registro de usuario</h1>
      <Link className="text-blue-600" to="/">
        Dashboard
      </Link>
    </div>
  );
}
