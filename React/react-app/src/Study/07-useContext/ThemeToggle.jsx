import { useTheme } from "./useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Şu anki tema: {theme} — Değiştir
    </button>
  );
}

export default ThemeToggle;
