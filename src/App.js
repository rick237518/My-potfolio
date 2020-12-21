import React from "react";
import "./styles.css";
import Homepage from "./homepage";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import About from "./about";
function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  );
}

export default App;
