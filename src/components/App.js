import React from 'react';
import './App.css';
import RequestScreen from './RequestScreen';
import ResultsScreen from './ResultsScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
  } from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          <h1> Easy PV panel calculator</h1>
          <nav className="flip-pages">
            <NavLink
              className="flip-page-link" to="/system"
              activeClassName="selected"
            >System</NavLink>
            <NavLink
              className="flip-page-link" to="/results"
              activeClassName="selected"
            >Results</NavLink>
          </nav>
          <Switch>
            <Route path="/results">
              <ResultsScreen/>
            </Route>
            <Route path="/system">
              <RequestScreen/>
            </Route>
            <Route path="/">
              <RequestScreen/>
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
