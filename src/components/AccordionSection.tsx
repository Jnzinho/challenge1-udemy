import Accordion from "./Accordion";

const AccordionItems = [
  {
    name: "What do you work with?",
    text: "I work with bleeding edge front end technologies to improve the user experience of a lot of different apps that I design and code myself.",
  },
  {
    name: "Do you love what you do?",
    text: "Yes! I really love developing web applications, I always loved design and solving problems and now I've mixed both in my job.",
  },
  {
    name: "What technologies do you use?",
    text: "I use a variety of technologies including React, TypeScript, Tanstack, Tailwind and more to build modern web applications.",
  },
  {
    name: "How long have you been developing?",
    text: "I have been developing web applications for over 3 years, constantly learning and adapting to new technologies.",
  },
  {
    name: "Do you know back-end development?",
    text: "Yes, I have worked as a full-stack web developer for the past two years, but I am now specializing in front-end development.",
  },
];

export default function AccordionSection() {
  return (
    <ul className="flex flex-col gap-5 sm:w-2/4 w-3/4 min-h-60">
      {AccordionItems.map((ai) => (
        <Accordion text={ai.text} title={ai.name}></Accordion>
      ))}
    </ul>
  );
}
