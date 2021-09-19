import "./App.css";
import NAVBAR from "./components/navbar/nav";
import Left from "./Section/Left/left";
import Right from "./Section/Right/right";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {MyEGG} from "./Section/EGG page/egg"

function Page() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/deshboard">
            <div>
              <Left />
              <Right />
            </div>
          </Route>
          <Route path="/">
            <MyEGG/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <NAVBAR />
      <Page />
    </div>
  );
}

export default App;
