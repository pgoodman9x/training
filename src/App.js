import React from 'react';
import './App.scss';

import {Header, Body, Footer, HelloWorld, Home, Products} from './components/AllComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const baseURL = '/training/duyphu/no1/';

  return (

    <Router basename={baseURL}>
      <div className="App">
        <Header/>
        <Body>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/task1" component={HelloWorld}/>
              <Route path="/task2" component={Products}/>
              <Router path="*">
                {
                //  localStorage.removeItem('currentPos')
                }
              </Router>
            </Switch>
        </Body>

        <Footer />
      </div>
    </Router>
  );
}


export default App;