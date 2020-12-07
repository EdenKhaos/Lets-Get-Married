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
import ProfilePage from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
// import UserProvider from './utils/UserContext';
// import Auth from './pages/Auth';
// import NoMatch from './pages/NoMatch';
import GuestsPage from './pages/Guests';
// import BudgetPage from './pages/Budget';
// import TodoPage from './pages/Todo';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/guests" component={GuestsPage} />
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
          {/* <Route
            exact
            path="/login"
            render={() => <Auth action="login" />}
          />
          <Route
            exact
            path="/signup"
            render={() => <Auth action="signup" />}
          />
          <Route render={NoMatch} /> */}
        </Switch>
      </Router>

  );
};

export default App;