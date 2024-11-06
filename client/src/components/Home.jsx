import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="home-container">
      <h1>#Gateway</h1>
      <p>To get started, please log in or sign up</p>
      <div className="buttons-container">
        <button onClick={goToLogin} className="button">
          Login
        </button>
        <button onClick={goToSignup} className="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
