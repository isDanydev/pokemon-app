import { useEffect, useState } from "react";
import DataPokemon from "../data/typesDataPokemon";

interface dataProps {
  dataApi: DataPokemon;
  id: number;
  offset: number;
}

const CardPokemon = ({ dataApi, id, offset }: dataProps) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const getBackGroundPokemon = async () => {
    try {
      const api = await fetch(dataApi.url);
      const data = await api.json();
      const type = data.types[0].type.name; // Obtener el segundo tipo, si existe

      switch (type) {
        case "grass":
          setBackgroundColor("#3FA129");
          setBorderColor("#A2DC91");
          break;
        case "fire":
          setBackgroundColor("#E62829");
          setBorderColor("#F47F7E");
          break;
        case "water":
          setBackgroundColor("#2980EF");
          setBorderColor("#9AF0FF");
          break;
        case "bug":
          setBackgroundColor("#91A119");
          setBorderColor("#DBE097");
          break;
        case "normal":
          setBackgroundColor("#9FA19F");
          setBorderColor("#DEDFDE");
          break;
        case "poison":
          setBackgroundColor("#9141CB");
          setBorderColor("#D6A2EF");
          break;
        case "electric":
          setBackgroundColor("#FAC000");
          setBorderColor("#FFE58C");
          break;
        case "ground":
          setBackgroundColor("#915121");
          setBorderColor("#C38737");
          break;
        case "fairy":
          setBackgroundColor("#EF70EF");
          setBorderColor("#FAC8FA");
          break;
        case "fighting":
          setBackgroundColor("#FF8000");
          setBorderColor("#FFC95D");
          break;
        case "psychic":
          setBackgroundColor("#EF4179");
          setBorderColor("#FAB3D6");
          break;
        case "rock":
          setBackgroundColor("#AFA981");
          setBorderColor("#D3CEBA");
          break;
        case "ghost":
          setBackgroundColor("#704170");
          setBorderColor("#BF95BF");
          break;
        case "ice":
          setBackgroundColor("#3FD8FF");
          setBorderColor("#99EFFF");
          break;
        case "dragon":
          setBackgroundColor("#5060E1");
          setBorderColor("#A2AFF1");
          break;
        case "dark":
          setBackgroundColor("#50413F");
          setBorderColor("#ADA19F");
          break;
        case "steel":
          setBackgroundColor("#60A1B8");
          setBorderColor("#BADBE1");
          break;
        default:
          setBackgroundColor("black");
          setBorderColor("white");
          break;
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    getBackGroundPokemon();
  }, [dataApi.url]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        border: "0.3rem solid",
        borderColor: borderColor,
        padding: "10px",
        color: "white",
        textAlign: "center",
        borderRadius: "1rem",
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1 + offset}.svg`}
        style={{ width: "8rem", height: "8rem" }}
        alt={`${dataApi.name}`}
      />
      <div style={{ display: "flex" }}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id + 1 + offset}.png`}
          style={{ width: "8rem", height: "8rem" }}
          alt={`${dataApi.name}`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1 + offset}.png`}
          style={{ width: "8rem", height: "8rem" }}
          alt={`${dataApi.name}`}
        />
      </div>

      <button
        className="pokeball-button"
        style={{
          border: "none",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          textTransform: "capitalize",
          backgroundColor: borderColor,
          width: "75%",
          margin: "auto",
          borderRadius: "0.3rem",
          padding: "0.3rem",
        }}
      >
        {dataApi.name}
      </button>
    </div>
  );
};

export default CardPokemon;
