import "../styles/Searchbar.css";

function Searchbar() {
  const handleChange = (event) => {
    console.log(event.target.value)
  };
  return (
    <form action="" className="search-bar">
      <label htmlFor="search-component">
        <svg className="icon" viewBox="0 0 17 16" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4736 14.2736L11.1736 9.97364C13.0736 7.67364 12.7736 4.17364 10.4736 2.27364C8.17365 0.373639 4.67365 0.673639 2.77365 2.97364C0.873647 5.27364 1.17365 8.77364 3.47365 10.6736C5.47365 12.3736 8.47365 12.3736 10.4736 10.6736L14.7736 14.9736L15.4736 14.2736ZM2.47365 6.47364C2.47365 3.97364 4.47365 1.97364 6.97365 1.97364C9.47365 1.97364 11.4736 3.97364 11.4736 6.47364C11.4736 8.97364 9.47365 10.9736 6.97365 10.9736C4.47365 10.9736 2.47365 8.97364 2.47365 6.47364Z"
            fill="black"
          />
        </svg>
        <input
          type="text"
          name="search-component"
          id="search-component"
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default Searchbar;
