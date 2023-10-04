import "./App.css";
import TipCalculator from "./Components/TipCalculator/TipCalculator";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className = "App">
      <main><TipCalculator/></main>
      
    </div>
  );
}
export default App;