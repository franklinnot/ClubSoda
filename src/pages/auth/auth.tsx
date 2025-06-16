import { useState } from "react";
import Login from "./login";
import Register from "./register";

type AuthProps = {
  onClose: () => void;
};

export default function Auth({ onClose }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      {/* Fondo difuminado */}
      <div className="fixed inset-0 z-40 bg-gray-500/60 backdrop-blur-sm" />

      {/* Contenedor del modal (centra contenido) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {isLogin ? (
          <Login onClose={onClose} onSwitch={handleSwitch} />
        ) : (
          <Register onClose={onClose} onSwitch={handleSwitch} />
        )}
      </div>
    </>
  );
}
