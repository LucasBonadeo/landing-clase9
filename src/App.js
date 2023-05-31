import "./App.css";
import { Header } from "./components/Header";
import { HeroImage } from "./components/HeroImage";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
