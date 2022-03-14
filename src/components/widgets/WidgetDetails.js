import React from 'react';
import IconMonitor from "../../assets/IconMonitor";
import IconTablet from "../../assets/IconTablet";
import IconMobile from "../../assets/IconMobile";

function WidgetDetails({location}){
    const {desc, image, title} = location.widget
    return (
        <div className="body">
        <div className="viewer">
            <nav className="viewer_header">
            <button className="btn media-screen --active">
                <IconMonitor />
            </button>
            <button className="btn media-screen">
                <IconTablet />
            </button>
            <button className="btn media-screen">
                <IconMobile />
            </button>
            </nav>
            <div className="viewer_frame">
            <img src={image}/>
            </div>
        </div>
        <div className="panel">
          <nav className="panel_header">
            <button className="btn btn-ghost --active">Description</button>
            <hr />
            <button className="btn btn-ghost">Code</button>
          </nav>
          <div className="panel_body">
            <div className="body_content">
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
            <div className="body_footer">
              <span>Link:</span>
              <span
                href="https://ambianceenterprise.avantio.com/"
                className="link"
              >
                https://ambianceenterprise.avantio.com/
              </span>
            </div>
          </div>
        </div>
        </div>
    );
}

export default WidgetDetails;