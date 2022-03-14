import React from "react";


const Login = (props) => (
    <nav className="login">
        <h2>Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button className="github" onClick={() => props.authenticate("Google")}> Log in with Google</button>
    </nav>
)

export default Login