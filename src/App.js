import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats'
import ChatScreen from './ChatScreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person"> {/* ':' ruteo dinamico */}
            <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats/>
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