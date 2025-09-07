import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CVSection from "./components/CVSection";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <CVSection />
    </div>
  );
}

export default App;
