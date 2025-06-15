import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LargePromoBannerProps {
  imageUrl: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  backgroundColor?: string;
}

export default function LargePromoBanner({
  imageUrl,
  title,
  description,
  linkText,
  linkHref,
  backgroundColor = "bg-red-700",
}: LargePromoBannerProps) {
  return (
    <div
      className={`relative w-full rounded-lg overflow-hidden shadow-lg mb-10 ${backgroundColor}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 md:h-64 lg:h-80 object-cover object-center absolute inset-0 mix-blend-multiply opacity-70"
      />
      <div className="relative z-10 p-6 md:p-8 lg:p-10 text-white flex flex-col justify-center items-start h-48 md:h-64 lg:h-80">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-2 leading-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-medium mb-4 max-w-xl opacity-90">
          {description}
        </p>
        <Link
          to={linkHref}
          className="inline-flex items-center bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-full font-bold text-lg transition-colors duration-200"
        >
          {linkText} <ChevronRightIcon className="w-6 h-6 ml-2" />
        </Link>
      </div>
    </div>
  );
}
