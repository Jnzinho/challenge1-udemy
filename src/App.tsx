import Card from "./components/Card";
import { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import logo from "./assets/logo.png";

const skills = [
  {
    backgroundColor: "#E5532F",
    name: "html",
    color: "white",
  },
  {
    backgroundColor: "#F7E02A",
    name: "javascript",
    color: "black",
  },
  {
    backgroundColor: "#387CC8",
    name: "typescript",
    color: "white",
  },
  {
    backgroundColor: "#5FD3F3",
    name: "react",
    color: "black",
  },
  {
    backgroundColor: "#36B7F0",
    name: "tailwind",
    color: "white",
  },
  {
    backgroundColor: "#FF485A",
    name: "tanstack",
    color: "white",
  },
];

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
      <Card
        text="Front end developer with passion for creating beautiful and accessible experiences"
        title="Jnzinho"
        pills={skills}
        image="https://i.pinimg.com/736x/7a/38/84/7a38845d74e0097bcd1f2e394d1404a3.jpg"
      ></Card>
    </main>
  );
}

export default App;
