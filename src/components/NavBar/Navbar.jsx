import React, {useState} from 'react'
import { images } from '../../constants';
import "./Navbar.scss";




const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.LOGO2} alt="logo" />
      </div>

      <ul
        className={
          "app__navbar-items" +
          (toggle ? " app__navbar-items-show" : " app__navbar-items-hidden")
        }
      >
        {["home", "about", "works", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`list-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <div className="hamburger" onClick={() => setToggle(!toggle)}>
          <div className={toggle ? "line1-toggle" : ""}></div>
          <div className={toggle ? "line2-toggle" : ""}></div>
          <div className={toggle ? "line3-toggle" : ""}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar