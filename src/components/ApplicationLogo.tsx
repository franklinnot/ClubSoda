import React from "react";

interface ApplicationLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

/**
 * Componente que muestra el logo de la aplicación.
 * Utiliza el archivo SVG ubicado en la carpeta public.
 */
export default function ApplicationLogo({ className = '', ...props }: ApplicationLogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="San Jorge Logo"
      className={className}
      {...props}
    />
  );
}
