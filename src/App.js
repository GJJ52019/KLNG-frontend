import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

        <Header />
        <Main />
        <Footer />

    </div>
  );
}

export default App;
