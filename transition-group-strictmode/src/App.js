import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MyTransition from './MyTransition';

function App() {

  return (
    <div className="App">

      <h1>React Router V6</h1>
      <BrowserRouter>
        <div>
          <Link to="/">トップ</Link> |
          <Link to="/about">About</Link> |
          <Link to="/mytransition">MyTransition</Link>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mytransition" element={<MyTransition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home(props) {
  return (
    <h2>Home</h2>
  );
}

function About(props) {
  return (
    <h2>About</h2>
  );
}

export default App;
