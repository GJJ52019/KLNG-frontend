import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer';
import Splash from './pages/Splash';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">

    <Switch>
        
        <Route exact path="/" render={()=> <Splash />} />
        <Route path="/">
          <Main />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
