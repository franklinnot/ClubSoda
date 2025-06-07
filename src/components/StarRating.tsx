import { useEffect, useState } from "react";
import { IconStar } from "./Icons";

interface StarRatingProps {
  defaultValue?: number;
  max?: number;
  size?: number;
  storageKey: string; // <- ID único por compra
}

export default function StarRating({
  defaultValue = 0,
  max = 5,
  size = 20,
  storageKey,
}: StarRatingProps) {
  const [selected, setSelected] = useState(defaultValue);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setSelected(parseInt(stored));
  }, [storageKey]);

  const handleClick = (val: number) => {
    setSelected(val);
    localStorage.setItem(storageKey, val.toString());
  };

  const currentValue = hover !== null ? hover : selected;

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starNumber = i + 1;
        const isActive = starNumber <= currentValue;

        return (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(starNumber)}
            onMouseEnter={() => setHover(starNumber)}
            onMouseLeave={() => setHover(null)}
            className="focus:outline-none"
          >
            <IconStar
              size={size}
              fill={isActive ? "currentColor" : "none"}
              className={isActive ? "text-yellow-500" : "text-gray-300"}
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}
