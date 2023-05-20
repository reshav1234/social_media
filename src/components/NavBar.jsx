import React, {useState} from "react";
import './NavBar.css'
import { RiChat2Fill, RiHome3Fill, RiAccountBoxFill } from 'react-icons/ri';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // set to false becuse the link is not opened

  const isLinkClicked = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <nav className="navbar" >
       
        <RiHome3Fill onClick = {isLinkClicked}/> 
        {isDropdownOpen && (
        <div className="dropdown-menu">
        
          <a href="#">Dropdown Item 1</a>
          <a href="#">Dropdown Item 2</a>
          <a href="#">Dropdown Item 3</a>
        </div>
      )}
        
          <RiChat2Fill onClick = {isLinkClicked}/>

        {isDropdownOpen && (
        <div className="dropdown-menu">
        
          <a href="#">Dropdown Item 1</a>
          <a href="#">Dropdown Item 2</a>
          <a href="#">Dropdown Item 3</a>
        </div>
      )}
  
          <RiAccountBoxFill onClick = {isLinkClicked}/>

        {isDropdownOpen && (
        <div className="dropdown-menu">
        
          <a href="#">Dropdown Item 1</a>
          <a href="#">Dropdown Item 2</a>
          <a href="#">Dropdown Item 3</a>
        </div>
      )}
      </nav>
    </>
  );
};

export default NavBar;
