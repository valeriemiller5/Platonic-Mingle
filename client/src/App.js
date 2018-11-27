import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
import Home from "./pages/Home";
// import Saved from "./pages/Saved";


const App = () => (
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/saved/:id" component={Saved} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
    </div>
  </Router>
);

export default App;
