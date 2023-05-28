import React, { useState } from "react";

import "./Home.css";
import { GoSearch } from "react-icons/go";
import NavBar from "./NavBar";

import Post from "./Post.jsx";

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
    <div className="Home">
      <NavBar />
      <div className="Main">
        <div className="search-container">
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

          {/* Render the filtered results */}
          <ul>
            {filterData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="create_post">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
