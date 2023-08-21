import {useState, useEffect} from "react";
import "./App.css";
import Home from "../src/components/Home.jsx";
import Login from "../src/components/Login:signup/Login.jsx";
import Register from "../src/components/Login:signup/Register";
import UserProfile from '../src/components/Users/UserProfile'
import UserList from "./components/Users/userList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [backEndData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {setBackEndData(data)}
    )
  }, [])
  return (
    <div>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UserProfile />} />
          <Route path = "/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
