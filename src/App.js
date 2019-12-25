import React from 'react';
import logo from './logo.svg';
import './App.scss';

import {Header, Body, Footer, HelloWorld, Home} from './components/AllComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Body>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/task1" component={HelloWorld}/>
            </Switch>
        </Body>

        <Footer />
      </div>
    </Router>
  );
}

export default App;