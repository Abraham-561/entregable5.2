import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import ListPokemons from "../components/HomePage/PokedexPage/ListPokemons";
import SelectType from "../components/HomePage/PokedexPage/SelectType";
import "./style/PokedexPage.css";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [typeSelected, setTypeSelected] = useState("allPokemons");

  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getPokeByType(typeSelected);
    }
  }, [typeSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    <div className="pokedex__cont-total">
      <header className="header_line">
      <div className="header_line_red"></div>
      <div className="header_line_black"></div>
      <a href="">

        <img  className="header_img" src="./pokedex.png" alt="" />
      </a>
      
            <div className="header_cicle">
              <div className="header_cicle2">
                <div className="header_cicle3"></div>
              </div>
              
            </div>
      </header>
      <div className=" pokedex__contenedor">
        <p className="pokedex__text">
          {" "}
          <span className="pokedex__span"> Welcome {trainer},</span> here you
          can find your favorite pokemon
        </p>
        <div className="pokedex__form-select">
          <form className="pokedex__form" onSubmit={handleSubmit}>
            <input className="pokedex__input" ref={inputSearch} type="text" />
            <button className="pokedex__btn">Search</button>
          </form>
          <SelectType setTypeSelected={setTypeSelected} />

          <div className="pokedex__list">
            <ListPokemons pokemons={pokemonsFiltered} />
          </div>
        </div>|
      </div>
    </div>
  );
};

export default PokedexPage;
