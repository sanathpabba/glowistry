"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === "night" ? "day" : "night";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("glowistry-theme", next);
  };

  return <button className="theme-toggle" type="button" aria-label="Toggle day and night theme" onClick={toggleTheme}><span className="theme-sun" aria-hidden="true">☀</span><span className="theme-moon" aria-hidden="true">☾</span><i aria-hidden="true" /></button>;
}
