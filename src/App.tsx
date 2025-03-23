import { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import logo from "./assets/logo.png";
import AccordionSection from "./components/AccordionSection";
import CardSection from "./components/CardSection";
import TextExpander from "./components/TextExpander";

function App() {
  const [isDark, setIsDark] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("bg-gray-800", isDark);
    document.body.classList.toggle("text-white", isDark);
  }, [isDark]);

  return (
    <main className={"flex items-center justify-center min-h-screen"}>
      <img src={logo} alt="logo" className="absolute left-10 top-10 w-10" />
      <DarkModeToggle setIsDark={setIsDark} isDark={isDark}></DarkModeToggle>
      <div className="flex flex-col items-center justify-between w-full pb-10">
        <CardSection />
        <AccordionSection></AccordionSection>
        <section className="flex flex-col sm:w-2/4 w-3/4 justify-start pt-10 gap-2">
          <TextExpander>
            Space travel is the ultimate adventure! Imagine soaring past the
            stars and exploring new worlds. It's the stuff of dreams and science
            fiction, but believe it or not, space travel is a real thing. Humans
            and robots are constantly venturing out into the cosmos to uncover
            its secrets and push the boundaries of what's possible.
          </TextExpander>

          <TextExpander
            collapsedNumWords={20}
            expandButtonText="Show text"
            collapseButtonText="Collapse text"
            buttonColor="#ff6622"
          >
            Space travel requires some seriously amazing technology and
            collaboration between countries, private companies, and
            international space organizations. And while it's not always easy
            (or cheap), the results are out of this world. Think about the first
            time humans stepped foot on the moon or when rovers were sent to
            roam around on Mars.
          </TextExpander>

          <TextExpander expanded={true} className="box">
            Space missions have given us incredible insights into our universe
            and have inspired future generations to keep reaching for the stars.
            Space travel is a pretty cool thing to think about. Who knows what
            we'll discover next!
          </TextExpander>
        </section>
      </div>
    </main>
  );
}

export default App;
