import React from 'react';
import './App.css';
import Home from './components/Home'
import News from './components/News'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
      </div>
    </Router>
    </div>
  );
}

export default App;
