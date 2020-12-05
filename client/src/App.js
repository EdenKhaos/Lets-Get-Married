import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import VenuePage from './pages/Venue';
import CateringPage from './pages/Catering';
import LodgingPage from './pages/Lodging';
import Home from './pages/Home';
import Profile from './components/Profile';
import UserProvider from './utils/UserContext';
import Auth from './pages/Auth';
import NoMatch from './pages/NoMatch';
// import GuestsPage from './pages/Guests';
// import BudgetPage from './pages/Budget';
// import TodoPage from './pages/Todo';

function App() {
  return (
    <UserProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
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
          <Route
            exact
            path="/login"
            render={() => <Auth action="login" />}
          />
          <Route
            exact
            path="/signup"
            render={() => <Auth action="signup" />}
          />
          <Route exact path="/profile" component={Profile} />
          <Route render={NoMatch} />
      </Switch>
    </Router>
  </UserProvider >

  );
};

export default App;