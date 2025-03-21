import { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import logo from "./assets/logo.png";
import AccordionSection from "./components/AccordionSection";
import CardSection from "./components/CardSection";

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
      </div>
    </main>
  );
}

export default App;
