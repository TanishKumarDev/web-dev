import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";
import ToggleText from "./components/ToggleText/ToggleText.jsx";
import './App.css'; // Add styling here

function App() {
  return (
    <>
      <section className="project-section">
        <ThemeToggle />
      </section>
      
      <section className="project-section">
        <ToggleText />
      </section>
    </>
  );
}

export default App;
