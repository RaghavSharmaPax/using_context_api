import "./App.css";
import LevelOne from "./components/LevelOne";
import { StateProvider } from "./store";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <LevelOne />
      </StateProvider>
    </div>
  );
}

export default App;
