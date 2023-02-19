import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to={"/micro-app1"}>micro-app1</Link> |
      <Link to={"/micro-app2"}>micro-app2</Link> |
      <Link to={"/micro-app3"}>micro-app3</Link>
      
      <h1>nnnn</h1>
      <div id="micro-app1"></div>
      <div id="micro-app2"></div>
      <div id="micro-app3"></div>
      
      
    </div>
  );
}

export default App;
