import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import TipCalculator from "./Components/TipCalculator/TipCalculator";
import Footer from "./Components/Footer/Footer";
import TipCalculatorNoComponent from "./Components/TipCalculator/TipCalculatorNoComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <TipCalculatorNoComponent/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;