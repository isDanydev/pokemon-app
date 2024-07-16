// import pokeballIcon from "../../src/assets/icon/Poké_Ball_icon.png";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#373233", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "0.5rem",
        }}
      >
        <h2 style={{ color: "white" }}>Lista de Pokemones </h2>
        {/* <button
          className="pokeball-button"
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundImage: `url(${pokeballIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(0.3rem)",
              padding: "0.3rem 1.5rem",
              borderRadius: "0.3rem",
              letterSpacing: "0.1rem",
            }}
          >
            Tipos
          </h3>
        </button>
        <button
          className="pokeball-button"
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundImage: `url(${pokeballIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
        <button
          className="pokeball-button"
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundImage: `url(${pokeballIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
        <button
          className="pokeball-button"
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundImage: `url(${pokeballIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
          }}
        ></button>
        <button
          className="pokeball-button"
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundImage: `url(${pokeballIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            cursor: "pointer",
          }}
        ></button> */}
      </div>
    </nav>
  );
};
export default Navbar;
