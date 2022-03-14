import React, { useState } from "react";

function WidgetAdd(props) {
  const idleState = {
    title: "",
    description: "",
    tag: "",
    url: "",
  };

  const [state, setState] = useState(idleState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // props.addWidget(state)
    console.log("Send it", state);
    // Restet Formulario
    event.target.reset();
  };

  return (
    <>
      <form className="body" onSubmit={handleSubmit}>
        <div className="viewer">
          <div className="viewer_frame">
            <input name="image" type="file" onChange={handleChange} />
          </div>
        </div>
        <div className="panel">
          <div className="panel_body">
            <div className="input-wrapper">
              <label htmlFor="title">Titulo:</label>
              <input type="text" name="title" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="description">Descripcion:</label>
              <input type="text" name="description" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="tag">Etiquetas:</label>
              <input type="text" name="tag" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="url">Sitio Web:</label>
              <input type="text" name="url" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <input className="btn btn-primary" type="submit" name="url" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default WidgetAdd;
