import React, { useRef, useEffect } from "react";

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

import { Link, Navigate } from "react-router-dom";

import "../App.css";

import VanillaTilt from 'vanilla-tilt';

const Search = () => {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"),{
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
      perspective: 1000,
}); 
 });

  const { cardList, setDetailCard } = useContext(AppContext);

  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const btnMonsterRef = useRef();
  const btnSpellRef = useRef();
  const btnTrapRef = useRef();

  const changeFilters = (param) => {
    if (param.current.className === "clicked") {
      btnMonsterRef.current.className = "btns";
      btnSpellRef.current.className = "btns";
      btnTrapRef.current.className = "btns";
    } else {
      btnMonsterRef.current.className = "btns";
      btnSpellRef.current.className = "btns";
      btnTrapRef.current.className = "btns";
      param.current.className = "clicked";
    }
    setTypeFilter(
      typeFilter === param.current.value ? "" : param.current.value
    );
  };

  return (
    <div className="background">
      {cardList === "" && <Navigate to="/" />}
      <h1>Card List</h1>
      <div className="menu">
        <input
          type="text"
          spellCheck="false"
          onChange={(e) => setNameFilter(e.target.value)}
          placeholder="Search for Name"
        />
        <span>Filter by: </span>
        <button
          className="btns"
          ref={btnMonsterRef}
          value="monster"
          onClick={() => changeFilters(btnMonsterRef)}
        >
          Monsters
        </button>
        <button
          className="btns"
          ref={btnSpellRef}
          value="spell"
          onClick={() => changeFilters(btnSpellRef)}
        >
          Spells
        </button>
        <button
          className="btns"
          ref={btnTrapRef}
          value="trap"
          onClick={() => changeFilters(btnTrapRef)}
        >
          Traps
        </button>
      </div>
      {cardList === "" ? (
        <h1>Loading</h1>
      ) : (
        <div className="search">
          {cardList
            .filter(
              (e) =>
                e.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
                e.type.toLowerCase().includes(typeFilter)
            )
            .map((e) => {
              return (
                <div key={e.name} className="card">
                  <Link to="/card">
                    <img
                      src={e.card_images[0].image_url}
                      alt={e.card_images[0].image_url}
                      onClick={() => setDetailCard(e)}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Search;
