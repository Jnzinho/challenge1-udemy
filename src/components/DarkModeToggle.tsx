import React from "react";
import { Sun, MoonStar } from "lucide-react";

type DarkModeToggleProps = {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
};

export default function DarkModeToggle({
  setIsDark,
  isDark,
}: DarkModeToggleProps) {
  const handleChangeTheme = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsDark(!isDark);
  };

  return (
    <nav className="absolute right-10 top-10 text-gray-900">
      <button
        onClick={handleChangeTheme}
        className="rounded-md shadow-lg bg-green-300 dark:shadow-gray-700 p-2 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
      >
        {isDark ? <MoonStar></MoonStar> : <Sun></Sun>}
      </button>
    </nav>
  );
}
