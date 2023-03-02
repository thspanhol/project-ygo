import React from "react";

import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

import { Link } from "react-router-dom";

import "../App.css";

const Login = () => {
  const { getAllCards } = useContext(AppContext);

  useEffect(() => {
    return getAllCards;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <img className="img-login" src="/blackwing.png" alt="blackwing" />
      <div>
        <h1>BlackWing</h1>
        <h1>Database</h1>
        <p>Searching for all cards of the</p>
        <p>blackwing archetype.</p>
        <Link to="/search" className="link">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Login;
