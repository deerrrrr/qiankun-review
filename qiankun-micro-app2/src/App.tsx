import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Cat from './pages/Cat';
import Dog from './pages/Dog';

function App() {
  return (
    <div className="App">
      <Link to={"/"}>home</Link> |
      <Link to={"/cat"}>cat</Link> |
      <Link to={"/dog"}>dog</Link>
      <Routes>
        <Route path='/cat' element={<Cat />} />
        <Route path='/dog' element={<Dog/>} />
      </Routes>
    </div>
  );
}

export default App;
