import React from "react";

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
};

export default function Card({ title, text, pills, image }: CardProps) {
  const renderedPills =
    pills?.map((p) => {
      return (
        <li className="flex flex-row">
          <span>{p.name}</span>
          {p.emoji ? <p.emoji></p.emoji> : null}
        </li>
      );
    }) || null;

  return (
    <article className="flex flex-col gap-2 w-60 shadow-lg rounded-md">
      <img src={image} alt="photo" className="fl"></img>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm">{text}</p>
      <ul className="flex gap-3">{renderedPills}</ul>
    </article>
  );
}
