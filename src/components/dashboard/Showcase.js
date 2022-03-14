import "../styles/Showcase.css";
import React from "react";
import Sidenav from "../layout/Sidenav";
import WidgetList from "../widgets/WidgetList";
import { Link } from "react-router-dom";

const Showcase = ({widgets}) => {
  return (
    <div id="showcase" data-sidenave="open">
      <Sidenav/>
      <div className="wrapper">
        <header className="header">
          <div className="pagination">
            <button className="btn btn-primary btn-ghost btn-arrow">
              <svg
                className="icon arrow"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 7.17322L10 12.8268L4 7.17322" stroke="#030303" />
              </svg>
            </button>
            <hr />
            <h2 className="header_title">Widgets</h2>
          </div>
          <div className="actions">
          <Link to="/widget/add">
            <button className="btn btn-primary" id="submit-widget">
              <svg className="icon arrow" viewBox="0 0 17 16" fill="none">
                <line x1="8.5" y1="1" x2="8.5" y2="15" stroke="black" />
                <line x1="15.5" y1="8" x2="1.5" y2="8" stroke="black" />
              </svg>
              Submit Widget
            </button>
            </Link>
          </div>
        </header>
        <section className="body">
          <div className="grid">
              <WidgetList widgets={widgets}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Showcase;
