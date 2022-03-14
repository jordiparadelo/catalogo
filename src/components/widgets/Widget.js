import React from "react";
import { WidgetAdd, WidgetDetails } from "../../components";
import "../styles/Widget.css";

function Widget({ history, location }) {
  const { pathname } = history.location;
  return (
    <div id="widget">
      {pathname.includes("add") ? <WidgetAdd /> : <WidgetDetails location={location} />}
    </div>
  );
}

export default Widget;
