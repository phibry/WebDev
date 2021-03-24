// Import React
import React from 'react';

// Import react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

// Import Context State
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

// Import CSS
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                {/* Route inside the same page */}
                <Route exact path="/" component={Home} />
                {/* Route outside page */}
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
