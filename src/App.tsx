import AllListPokemon from "./components/AllListPokemon";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Hero />
      <Navbar />
      <AllListPokemon />
    </div>
  );
}

export default App;
