import React from "react";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import { Link } from "react-router-dom";

const Login = () => {

    const { toggleTest } = useContext(AppContext);

    return(
        <div>
          <div>Login</div>
          <button onClick={toggleTest}>Teste</button>
          <Link to="/card">Card</Link>
        </div>
    )
}

export default Login;