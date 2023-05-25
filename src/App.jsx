import React from "react";
import "./App.css";
import Home from "../src/components/Home.jsx";
import Login from "../src/components/Login.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path ="/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
