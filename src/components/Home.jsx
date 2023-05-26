import React, { useState } from "react";
<<<<<<< HEAD
import './Home.css'
import {GoSearch} from 'react-icons/go'
import NavBar from "./NavBar";
=======
import "./Home.css";
import { GoSearch } from "react-icons/go";
import NavBar from "./NavBar";

import Post from "./Post.jsx";
>>>>>>> 65fbaddbf80fd4d0fd01bb49df8e9181b720a5f0

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
      <div className="Main">
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

=======
    <>
      <div className="Home">
        <NavBar />
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

>>>>>>> 65fbaddbf80fd4d0fd01bb49df8e9181b720a5f0
          {/* Render the filtered results */}
          <ul>
            {filterData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> 65fbaddbf80fd4d0fd01bb49df8e9181b720a5f0
  );
};

export default Home;
