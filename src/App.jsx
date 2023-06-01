import "./App.css";
import { Header } from "./components/Header";
import { HeroImage } from "./components/HeroImage";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Form } from "./components/Form";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = (newDarkMode) => {
    setDarkMode(newDarkMode);
  };
  return (
    <div className="App">
      <Header darkMode={darkMode} onDarkModeClick={handleDarkModeClick} />
      <HeroImage />
      <Main darkMode={darkMode} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
