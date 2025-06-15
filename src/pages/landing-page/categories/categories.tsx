import Card from "./card";
import img1 from "../../../assets/dashboard/categorias/agua.avif";
import img2 from "../../../assets/dashboard/categorias/galleta.avif";
import img3 from "../../../assets/dashboard/categorias/harina.avif";
import img4 from "../../../assets/dashboard/categorias/mermelada.avif";
import img5 from "../../../assets/dashboard/categorias/paneton.jpg";
import img6 from "../../../assets/dashboard/categorias/pasta.avif";
import img7 from "../../../assets/dashboard/categorias/wafer.avif";

const cardsData = [
  {
    image: img1,
    title: "Aguas",
    description: "Variedad de aguas frescas y minerales.",
  },
  {
    image: img2,
    title: "Galletas",
    description: "Galletas dulces y saladas para todos los gustos.",
  },
  {
    image: img3,
    title: "Harinas",
    description:
      "Harinas de trigo y otros cereales para repostería y panadería.",
  },
  {
    image: img4,
    title: "Mermeladas",
    description: "Mermeladas frutales para acompañar tus desayunos y postres.",
  },
  {
    image: img5,
    title: "Panetones",
    description: "Tradicional pan dulce con frutas y pasas.",
  },
  {
    image: img6,
    title: "Pastas",
    description: "Pastas secas y frescas de la mejor calidad.",
  },
  {
    image: img7,
    title: "Wafers",
    description: "Crujientes wafers rellenos de crema.",
  },
];

export default function Categories() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="infinite-scroll flex w-max animate-infinite-scroll gap-4 sm:gap-6 md:gap-7 lg:gap-8">
        {[...cardsData, ...cardsData].map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
