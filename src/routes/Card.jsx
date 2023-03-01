import React from "react";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import { Link } from "react-router-dom";

const Card = () => {

    const { cardList } = useContext(AppContext);

    return(
        <div>
          <div>Card</div>
          <div>{cardList}</div>
          <Link to="/">Login</Link>
        </div>
    )
}

export default Card;