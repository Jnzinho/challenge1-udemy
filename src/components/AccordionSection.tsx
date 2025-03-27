import { useState } from "react";
import Accordion from "./Accordion";

const AccordionItems = [
  {
    name: "What do you work with?",
    text: "I create websites and web applications with a focus on clean design and smooth user interactions. I handle both the visual design and development process.",
  },
  {
    name: "Do you love what you do?",
    text: "Absolutely! Web development lets me combine my passion for creative design with problem-solving. Each project brings new and exciting challenges.",
  },
  {
    name: "What technologies do you use?",
    text: "I primarily work with React for building user interfaces, along with TypeScript for code reliability. I also use tools like Tailwind CSS for styling and Tanstack for data management and routing.",
  },
  {
    name: "How long have you been developing?",
    text: "I've been creating web applications for over 3 years. During this time, I've worked on various projects that have helped me grow as a developer.",
  },
  {
    name: "Do you know back-end development?",
    text: "Yes, I spent two years as a full-stack developer working with both front-end and back-end technologies. Currently, I'm focusing on front-end development to create better user experiences.",
  },
];

export default function AccordionSection() {
  const [openedAccordion, setOpenedAccordion] = useState<number | null>(0);
  return (
    <ul className="flex flex-col gap-5 sm:w-2/4 w-3/4 min-h-60">
      {AccordionItems.map((ai, index) => (
        <Accordion
          text={ai.text}
          title={ai.name}
          index={index}
          setActive={setOpenedAccordion}
          active={openedAccordion}
        ></Accordion>
      ))}
    </ul>
  );
}
