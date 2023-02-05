import Link from "next/link";
import React, { useState } from "react";
// import "./styles/Navbar.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link href="/">
        <h1 className="logo">Acunetix 10.0</h1>
      </Link>
      <ul className={`nav-links`} id={`mobile-menu-${menu}`}>
        <li className="active">
          <Link href="/" onClick={() => setMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/event" onClick={() => setMenu(false)}>
            Event
          </Link>
        </li>
        <li>
          <Link href="/sponsors" onClick={() => setMenu(false)}>
            Sponsors
          </Link>
        </li>
      </ul>
      <img
        className={`menu-btn`}
        src="image/menubtn.png"
        alt=""
        onClick={() => {
          setMenu(menu ? false : true);
        }}
      />
    </nav>
  );
};

export default Header;
