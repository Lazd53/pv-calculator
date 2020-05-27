import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import RequestScreen from './RequestScreen';
import ResultsScreen from './ResultsScreen';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  NavLink
  } from 'react-router-dom';


class App extends React.Component {

  render(){
    const {resultsExist} = this.props;
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
              { resultsExist ? <ResultsScreen/> : <Redirect to="/system"/>}
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

const mapStateToProps = (state) => {
  return { resultsExist: state.results.storedResults.length !== 0 }
}

export default connect(mapStateToProps)(App);
