interface IProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: IProps) {
  return (
    <div
      className="flex flex-row w-[280px] sm:w-[290px] md:w-[310px] 
                lg:w-[320px] bg-indigo-50 rounded-2xl p-4 pr-5 
                gap-4 transition-transform hover:scale-105 
                hover:shadow-lg duration-100"
    >
      <img
        src={image}
        alt={title}
        className="size-[100px] sm:size-[104px] md:size-[108px] 
                  lg:size-[116px] object-cover rounded-2xl"
      />
      <div className="flex flex-col flex-1 pt-1">
        <h2 className="text-slate-700 font-semibold">{title}</h2>
        <p
          className="text-slate-500 font-normal text-sm
                   bg-gray-100 line-clamp-3 md:line-clamp-4"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
