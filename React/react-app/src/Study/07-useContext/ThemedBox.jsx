import { useTheme } from "./useTheme";

function ThemedBox() {
  const { theme } = useTheme();

  const boxStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "1rem",
    marginTop: "1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease"
  };

  return <div style={boxStyle}>Aktif tema: {theme}</div>;
}

export default ThemedBox;
