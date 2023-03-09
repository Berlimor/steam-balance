import React from "react";
import icon from "../images/logo.png";

import './header.css'

export default function Header() {
  return (
    <header>
      <img src={icon} alt='logo'/>
    </header>
  );
}
