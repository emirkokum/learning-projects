import { ThemeProvider } from "./Study/07-useContext/ThemeProvider";
import ThemedBox from "./Study/07-useContext/ThemedBox";
import ThemeToggle from "./Study/07-useContext/ThemeToggle";


function App() {
  return (
     <ThemeProvider>
      <ThemeToggle />
      <ThemedBox />
    </ThemeProvider>
  );
}

export default App;
