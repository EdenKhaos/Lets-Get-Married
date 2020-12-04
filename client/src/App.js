import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VenuePage from "./pages/Venue";
import CateringPage from "./pages/Catering";
import LodgingPage from "./pages/Lodging";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute exact path="/profile" component={ProfilePage} /> */}
        <Route
          exact
          path="/venue"
          component={VenuePage}
        />
        <Route
          exact
          path="/catering"
          component={CateringPage}
        />
        <Route
          exact
          path="/lodging"
          component={LodgingPage}
        />
      </Switch>
    </Router>

  );
};

export default App;