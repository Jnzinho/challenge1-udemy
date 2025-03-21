import { useRef } from "react";
import { Plus, Minus } from "lucide-react";

type AccordionProps = {
  title: string;
  text: string;
  index: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function Accordion({
  title,
  text,
  index,
  active,
  setActive,
}: AccordionProps) {
  const visible = index === active;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSetVisible = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <li className="w-full border-t-[#B1CAAB] border-t-4 border-1 border-gray-600 rounded-md p-3 transition-all ease-in-out duration-200">
      <button
        className="w-full flex items-start justify-between cursor-pointer font-bold"
        onClick={handleSetVisible}
      >
        {title}
        {visible ? <Minus /> : <Plus />}
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: visible ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-max-height duration-200 ease-in-out"
      >
        <div className="pt-3">{text}</div>
      </div>
    </li>
  );
}
