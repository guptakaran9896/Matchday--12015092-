import React from "react";
import MatchCard from "./MatchCard.js";
import { useState, useEffect } from "react";
import "./App.css";
const Card = () => {
  const searchMatch = async (tournament) => {
    const API_URL = `https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}&s=${tournament}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setmatches((prev) => [...prev, ...data.fixtures]);
  };
  const [searchterm, setsearchterm] = useState("");
  const [matches, setmatches] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    searchMatch("");
  }, [page]);
  const handlescroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setpage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  return (
    <div className="app">
      <h1>International Matches</h1>

      <div class="search">
        <form class="search-form">
          <input
            type="text"
            value={searchterm}
            placeholder="Search tournament"
            onChange={(e) => setsearchterm(e.target.value)}
          />
          <input
            onClick={() => searchMatch(searchterm)}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div className="container">
        {matches.map((ele, index) => {
          return (
            <MatchCard
              key={index.toString()}
              winner={ele.winner}
              name2={ele.team2[0].name}
              round={ele.round}
              date={ele.date}
              tournament={ele.tournament[0].name}
              a1={ele.a1}
              a2={ele.a2}
              a3={ele.a3}
              b1={ele.b1}
              b2={ele.b2}
              b3={ele.b3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
