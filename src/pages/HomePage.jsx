import React from "react";
import FormTrainer from "../components/HomePage/FormTrainer";
import "./style/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="home__pricipal">
          <div className="name">
            <img className="home__img" src="public/pokedex.png" alt="" />
            <h2 className="home__saludo"> Hi trainer!</h2>
            <p className="home__text">
              to see the pokemon's information of the pokemos tell me your
              trainer name
            </p>
            <FormTrainer />
          </div>

          <footer className="lines">
            <div className="line_red"></div>
            <div className="home_cicle">
              <div className="home_cicle2">
                <div className="home_cicle3">
                  <div className="home_cicle4"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
