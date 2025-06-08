import { useEffect } from "react";
import type { ILayoutProps } from "../utils/interfaces/ILayout";
import { twMerge } from "tailwind-merge";
import Header from "./partials/header";

export default function LayoutAuth({
  children,
  className = "",
  classNameMain = "",
  title,
  user,
}: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);
  return (
    <div className={`flex min-h-dvh flex-col overflow-x-hidden ${className}`}>
      <Header title={title} user={user} className="" />
      <main
        className={twMerge(
          `flex flex-col flex-1 justify-center items-center`,
          classNameMain
        )}
      >
        {children}
      </main>
    </div>
  );
}
