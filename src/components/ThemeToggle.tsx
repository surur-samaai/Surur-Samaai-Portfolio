import React, { useEffect, useState } from "react";

const STORAGE_KEY = "site-theme"; // "light" | "dark"

const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "light";
    } catch {
      return false;
    }
  });

  // Apply class on mount so React and CSS match
  useEffect(() => {
    const root = document.documentElement;
    if (isLight) root.classList.add("light");
    else root.classList.remove("light");
  }, []);

  const toggle = () => {
  const root = document.documentElement;
  const next = !isLight;
  setIsLight(next);
  if (next) root.classList.add("light");
  else root.classList.remove("light");
  try {
    localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
  } catch {}

  // inform other components in this tab that theme changed
  window.dispatchEvent(new Event("themechange"));
};

  return (
    <button
      onClick={toggle}
      aria-pressed={isLight}
      title={isLight ? "Switch to dark" : "Switch to light"}
      className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition"
    >
      <span className="sr-only">Toggle theme</span>

      {/* simple slider visual */}
      <div className={`w-11 h-6 rounded-full p-1 flex items-center ${isLight ? "bg-yellow-300" : "bg-gray-600"}`}>
        <div
          className={`bg-white w-4 h-4 rounded-full transform transition-transform ${isLight ? "translate-x-5" : "translate-x-0"}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;