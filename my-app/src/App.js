import "./App.css";
import NAVBAR from "./components/navbar/nav"
import Left from "./Section/Left/left"
import Right from "./Section/Right/right";

function App() {
  return (
    <div className="App">
    <NAVBAR/>
    <Left/>
    <Right/>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
