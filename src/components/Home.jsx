import React, { useState } from "react";
<<<<<<< HEAD
import './Home.css'
import {GoSearch} from 'react-icons/go'
import NavBar from "./NavBar";
=======
import Post from "./Post.jsx";
import "./Home.css";

import { GoSearch } from "react-icons/go";
>>>>>>> caee63ae87934e58fd1c987db93f3ee1ffb618bd

const Home = () => {
  const [searchQuery, setSearch] = useState("");
  const [filterData, setFilter] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilter(filteredResults);
    console.log(e.target.value);
  };

  return (
<<<<<<< HEAD
    <div className="Home">
      <NavBar />
      <div className = "search">
        <input
          className = "search-input"
          type="text"
          value={searchQuery}
          onChange ={handleSearch}
          placeholder="Search..."
        />
        <button className = "search-btn" onClick={handleSearch}>
          <GoSearch />
        </button>

        {/* Render the filtered results */}
        <ul>
          {filterData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
=======
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <button className="search-btn" onClick={handleSearch}>
        <GoSearch />
      </button>

      <div className="create_post">
        <Post />
      </div>

      {/* Render the filtered results */}
      <ul>
        {filterData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
>>>>>>> caee63ae87934e58fd1c987db93f3ee1ffb618bd
    </div>
  );
};

export default Home;
