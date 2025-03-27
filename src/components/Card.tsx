import React from "react";
import { MapPin } from "lucide-react";

type PillItems = {
  name: string;
  backgroundColor: string;
  color?: string;
  emoji?: React.ElementType;
};

type CardProps = {
  title: string;
  text: string;
  pills?: PillItems[];
  image: string;
  location?: string;
};

export default function Card({ title, text, pills, image, location }: CardProps) {
  const renderedPills =
    pills?.map((p) => {
      return (
        <li
          className="flex flex-row p-0 px-2 rounded-sm"
          style={{ backgroundColor: p.backgroundColor, color: p.color }}
        >
          <span>{p.name}</span>
          {p.emoji ? <p.emoji></p.emoji> : null}
        </li>
      );
    }) || null;

  return (
    <article className="flex flex-col gap-2 w-72 shadow-lg dark:shadow-gray-700 rounded-lg overflow-hidden">
      <section>
        <img src={image} alt="photo" className="fl"></img>
      </section>
      <section className="p-3 pt-1 flex flex-col gap-3">
        <div className="flex justify-between items-center"> 
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="flex gap-1 text-md items-center">
            <MapPin size={16}></MapPin>
            <h3>{location}</h3>
          </div>
        </div>
        <p className="text-md">{text}</p>
        <ul className="flex gap-2 text-md flex-wrap">{renderedPills}</ul>
      </section>
    </article>
  );
}
