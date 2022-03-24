import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Matchs } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        {/*<Navigation />*/}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/matchs" exact component={() => <Matchs />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
