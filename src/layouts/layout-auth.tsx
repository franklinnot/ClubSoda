import { useEffect } from "react";
import type { ILayoutProps } from "../utils/interfaces/ILayout";
import Header from "./partials/header";

export default function LayoutAuth({
  children,
  className = "",
  title,
  user,
}: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);
  return (
    <div className={`flex min-h-dvh flex-col ${className}`}>
      <Header title={title} user={user} className="" />
      <main className="flex flex-col flex-1 justify-center items-center">
        {children}
      </main>
    </div>
  );
}
