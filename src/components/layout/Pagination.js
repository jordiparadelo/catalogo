import React from "react";
import IconArrow from "../../assets/IconArrow";

const Pagination = ({title, history}) => {
    const handleClick = () => {
      return history ? history.goBack() : null
    }
    return (
      <div className="pagination">
        <button className="btn btn-ghost btn-previewsLink"
          onClick={handleClick}
        >
        <IconArrow />
        </button>
        <h2 className="header_title">
          <div to={`/${title}`}>{title}</div>
        </h2>
      </div>
    );
}

export default Pagination;
