import React, {useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import {signIn, signOut, requestLocationData, setBrowserHistory} from './StoreManagers/AuthManager'
import HomePage from './routes/HomePage'
import Dex from './routes/Dex'
import Replays from './routes/Replays'
import Forum from './routes/Forum'

/* App is the top level container. Every part of the app will be rendered downstream from this component
   The paths below are rendered based on pathname. If you want to keep each site separate you'd need a React/Preact
   repository for each one. Just assume this App component is HomePage if you don't want to use client side routing 
   for each application.
*/

function App(props) {

  useEffect(() => {
    props.setBrowserHistory(props.browserHistory)
    // useEffect is an all-in-one lifecycle component that can run code whenever the page renders
    // For instance, if I want to log something when the page loads I put:
    console.log("Log something")
    // This will run every rerender unless I put the second argument in useEffect. An empty [] runs only once on load,
    // If I want to run code when values in state change I put those variables in the array [listMons, username, etc]
    
    // If I need to run code before the component unloads to prevent memory leakage I can return a function describing cleanup
    // This is akin to socket unsubscribe methods

  }, [])

  return (
    <Router history={props.browserHistory} >
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/replays" component={Replays} />
          <Route path="/dex" component={Dex} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = function(state) {
  const {Auth, Messages} = state
  return {
    email: Auth.email,
    signedIn: Auth.signedIn,
    location: Auth.location,
    messages: Messages.messages,
    history: Auth.history,
  }
}

const mapDispatchToProps = {
  requestLocationData: requestLocationData,
  signIn: signIn,
  signOut: signOut,
  setBrowserHistory: setBrowserHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
