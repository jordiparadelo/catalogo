import React from 'react';
import "../styles/ButtonEdit.css";

class ButtonEdit extends React.Component {
  state = {
    open: null,
    close: null
  }
    // 1. Crear Lista de Acciones y agregarlas a edit_list
    // 2. Manejar cada accion con un patron de diseño de Command
    render() {
  return (
    <div className="edit-box" data-edit="close">
      <ul className="edit_list" data-edit>
        <li>
          <button className="btn edit-item">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 1H6.5V2H10.5V1ZM2.5 3V4H3.5V14C3.5 14.6 3.9 15 4.5 15H12.5C13.1 15 13.5 14.6 13.5 14V4H14.5V3H2.5ZM4.5 14V4H12.5V14H4.5ZM6.5 6H7.5V12H6.5V6ZM10.5 6H9.5V12H10.5V6Z"
                fill="black"
              ></path>
            </svg>
            Delete
          </button>
        </li>
        <li>
          <button className="btn edit-item" href="/editor.html">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5 3.79113C15.5 4.05657 15.3945 4.31112 15.2067 4.49871L7.70576 11.9996H4.50037V8.79424L12.0013 1.29332C12.1889 1.10552 12.4434 1 12.7089 1C12.9743 1 13.2289 1.10552 13.4165 1.29332L15.2067 3.08354C15.3945 3.27113 15.5 3.52569 15.5 3.79113ZM14.5016 3.79363L12.7064 1.99841L11.2062 3.49859L13.0014 5.29381L14.5016 3.79363ZM5.50049 10.9995V9.20429L10.5011 4.20368L12.2963 5.9989L7.29571 10.9995H5.50049ZM2.50012 15H12.5013C13.0537 15 13.5015 14.5522 13.5015 13.9999V9.49933H12.5013V13.9999H2.50012V3.99865H7.00067V2.99853H2.50012C1.94777 2.99853 1.5 3.4463 1.5 3.99865V13.9999C1.5 14.5522 1.94777 15 2.50012 15Z"
                fill="black"
              ></path>
            </svg>
            Edit
          </button>
        </li>
        <li>
          <button className="btn edit-item">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5 10H12.5V12H10.5V13H12.5V15H13.5V13H15.5V12H13.5V10ZM14.5 4H8.5L6.8 2.3C6.6 2.1 6.4 2 6.1 2H2.5C1.9 2 1.5 2.4 1.5 3V13C1.5 13.6 1.9 14 2.5 14H8.5V13H2.5V3H6.1L7.8 4.7L8.1 5H14.5V9H15.5V5C15.5 4.4 15.1 4 14.5 4Z"
                fill="black"
              ></path>
            </svg>
            Add to Category
          </button>
        </li>
        <li>
          <button className="btn edit-item">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 1H6.5V2H10.5V1ZM2.5 3V4H3.5V14C3.5 14.6 3.9 15 4.5 15H12.5C13.1 15 13.5 14.6 13.5 14V4H14.5V3H2.5ZM4.5 14V4H12.5V14H4.5ZM6.5 6H7.5V12H6.5V6ZM10.5 6H9.5V12H10.5V6Z"
                fill="black"
              ></path>
            </svg>
            Unpublish
          </button>
        </li>
      </ul>
      <button
        className="btn btn-edit"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="10" r="2" fill="#030303"></circle>
          <circle cx="10" cy="10" r="2" fill="#030303"></circle>
          <circle cx="18" cy="10" r="2" fill="#030303"></circle>
        </svg>
        <span>Edit</span>
      </button>
    </div>
  )
}
}

export default ButtonEdit;
