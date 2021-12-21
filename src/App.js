import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/"/>
            <h1>chat page</h1>
          </Route>
          <Route path="/">
            <Header/>
            <TinderCards/> {/* La default Page siempre al final, porque js lee secuencialmente */}
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


/* Tinder Cards */
/* Buttons below tinder cards */




/* Chat screen */
/* Individual chat screen */
