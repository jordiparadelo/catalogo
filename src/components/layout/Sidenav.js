import React from "react";
import "../styles/Sidenav.css"
import Searchbar from "./Searchbar"
import SidebarIndex from "./SidebarIndex"

function Sidenav() {
  return (
    <nav className="sidenav">
      <Searchbar />
      <SidebarIndex />
    </nav>
  );
}

export default Sidenav;
