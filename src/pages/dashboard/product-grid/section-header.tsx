import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: string;
}

export default function SectionHeader({
  title,
  linkText,
  linkHref,
}: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6 pb-2">
      <h2 className="text-2xl font-extrabold text-slate-700">
        {title}
      </h2>
      {linkText && linkHref && (
        <Link
          to={linkHref}
          className="text-red-600 hover:text-red-700 transition-colors duration-200 inline-flex items-center font-semibold text-lg"
        >
          {linkText} <ChevronRightIcon className="w-5 h-5 ml-1" />
        </Link>
      )}
    </div>
  );
}
