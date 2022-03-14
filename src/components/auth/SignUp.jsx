import React, { useState } from "react";

function SignUp(props) {
    const idleState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    const [state, setState] = useState(idleState);
    const handleChange = (event) => {
      setState({ ...state, [event.target.id]: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(state);
    };
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
}

export default SignUp;