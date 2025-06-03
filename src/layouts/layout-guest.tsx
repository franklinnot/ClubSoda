import type { ILayoutProps } from "../utils/interfaces/ILayout";
import { useEffect } from "react";

export default function LayoutGuest({ children, title }: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);

  return <>{children}</>;
}
