import { useEffect } from "react";

interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
  classNameMain?: string;
  title: string;
  footer?: boolean;
}

export default function LayoutGuest({ children, title }: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);

  return (
    <>
      <main className="absolute min-h-dvh min-w-dvw flex justify-center items-center pb-8 px-10 z-50">
        {children}
      </main>
      <div className="w-dvw h-dvh z-0 absolute inset-0 bg-slate-500/50 backdrop-blur-xs" />
    </>
  );
}
