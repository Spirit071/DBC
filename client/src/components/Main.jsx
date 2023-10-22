import React from "react";
import { useNavigate } from "react-router-dom";
import { nameAndTitle } from "../middleware";
import '../styles/Main.css';

const Main = ({ user }) => {
  const navigate = useNavigate();
  const pClasses = "lg:text-5xl text-white sm:text-3xl xs:text-3xl h-full";

  function routeControl(route) {
    localStorage.setItem("currentRoute", route);
    navigate(route);
  }
  
  return (
    <main className="text-center">
      <p className={`${pClasses} falling-text`}>
        Welcome to <span onClick={() => routeControl("/trade")}>DragonByte Coin!</span>
      </p>
      <p className={`${pClasses} sliding-text`}>
        Have a look around, {nameAndTitle(user)}!
      </p>
    </main>
  );
};

export default Main;