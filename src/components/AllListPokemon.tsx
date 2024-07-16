import { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import DataPokemon from "../data/typesDataPokemon";

const AllListPokemon = () => {
  const [characthers, setCharacthers] = useState<DataPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const urlApi = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  const getCharacter = async () => {
    const api = await fetch(urlApi);
    const data = await api.json();
    setCharacthers(data.results);
  };

  useEffect(() => {
    getCharacter();
  }, [offset]);

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "0.6rem",
        padding: "2rem  0.8rem ",
        backgroundColor: "#EF4036",
      }}
    >
      {characthers.map((character, id) => (
        <CardPokemon dataApi={character} id={id} offset={offset} />
      ))}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <button
          className="pokeball-button"
          style={{
            width: "25%",
            backgroundColor: "#373233",
            color: "white",
            padding: "1rem",
            borderRadius: "0.3rem",
            border: "none",
            letterSpacing: "0.1rem",
          }}
          onClick={() => setOffset(offset - 20)}
        >
          Atras
        </button>
        <button
          className="pokeball-button"
          style={{
            width: "25%",
            backgroundColor: "#373233",
            color: "white",
            padding: "1rem",
            borderRadius: "0.3rem",
            border: "none",
            letterSpacing: "0.1rem",
          }}
          onClick={() => setOffset(offset + 20)}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
export default AllListPokemon;
