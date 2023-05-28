import React, { useState, useRef, useEffect } from "react";

import "./Home.css";
import { GoSearch } from "react-icons/go";
import NavBar from "./NavBar";

import Post from "./Post.jsx";
const Home = () => {
  const [searchQuery, setSearch] = useState("");
  const [filterData, setFilter] = useState([]);
  const [isSearchClicked, setSearchClicked] = useState(false); // New state variable

  const searchInputRef = useRef(null); // To check the click in DOM

  // To check if the click is outside the search box
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setSearchClicked(false); // the click is outside the box so state is "false"
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilter(filteredResults);
    console.log(e.target.value);
  };

  const handleClickSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div className="Home">
      <NavBar />
      <div className="Main">
        <div
          className={`search-container${
            isSearchClicked ? " search-clicked" : ""
          }`}
          ref={searchInputRef}
        >
          <input
            className="search-input"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            onClick={handleClickSearch}
            placeholder="Search..."
          />
          <button className="search-btn" onClick={handleSearch}>
            <GoSearch />
          </button>
        </div>

        <div className="create_post">
          <Post />
        </div>

        {/* Render the filtered results */}
        <ul>
          {filterData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
