import { IconSearch } from "./Icons";

interface IProps {
  id: string;
  className?: string;
  placeholder?: string;
}

export default function InputSearch({
  id,
  className = "",
  placeholder = "",
}: IProps) {
  return (
    <form className={`w-full flex flex-row max-w-[236px] ${className}`} method="get">
      <label htmlFor={id} className="relative bg-transparent">
        <IconSearch
          size={18}
          className="absolute top-2 left-2.5 text-slate-400"
        />
      </label>
      <input
        id={id}
        name={id}
        className="w-full bg-transparent placeholder:text-slate-400 text-gray-700 
                  text-sm border border-slate-200 rounded-md pl-[34px] pr-3 py-1.5 transition
                  duration-200 ease focus:outline-none focus:border-slate-400 
                hover:border-slate-300"
        placeholder={placeholder || "Buscar..."}
      />
    </form>
  );
}
