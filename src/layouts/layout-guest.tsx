import type { ILayoutProps } from "../utils/interfaces/ILayout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function LayoutGuest({
  children,
  className = "",
  title,
}: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);

  return (
    <main
      className={`min-h-dvh flex justify-center items-center pb-8 px-10 sm:bg-rose-50 sm:bg-gradient-to-tr sm:from-rose-50 to-white ${className}`}
    >
      <div className="flex flex-col gap-14 w-full justify-center items-center py-20 max-w-[448px] bg-white sm:shadow-md rounded-2xl">
        <Link to="/">
          <img
            className="size-[80px]"
            src="/logo_login.svg"
            alt="San Jorge Logo"
          />
        </Link>
        <div className="w-full px-6 sm:px-7 md:px-8">{children}</div>
      </div>
    </main>
  );
}
