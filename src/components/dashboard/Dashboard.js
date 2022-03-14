import "./styles/Dashboard.css";
import React from "react";
import Searchbar from "../Searchbar";
import Pagination from "../layout/Pagination";
import WidgetList from "../WidgetList";

const Dashboard = () => {
    return (
      <div id="dashboard" data-sidenav="open">
        {/* Container Header */}
        <header className="header">
          <Pagination/>
          <div className="actions">
            <Searchbar />
            <button className="btn btn-primary" id="submit-widget">
              <svg className="icon arrow" viewBox="0 0 17 16" fill="none">
                <line x1="8.5" y1="1" x2="8.5" y2="15" stroke="black" />
                <line x1="15.5" y1="8" x2="1.5" y2="8" stroke="black" />
              </svg>
              New Component
            </button>
          </div>
        </header>
        {/* Container Body */}
        <section className="body">
          <div className="grid">
            <WidgetList/>
          </div>
        </section>
      </div>
    );
  }

export default Dashboard;
