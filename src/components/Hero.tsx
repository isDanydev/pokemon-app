import { useEffect, useState } from "react";
import quotes from "../data/quote";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === quotes.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <header style={{ width: "100%" }}>
      <div className="hero">
        <h1
          style={{
            margin: "0",
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            backgroundColor: "#EF4036",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          Pokemon - App
        </h1>
        <div className="hero__banner">
          {
            <div
              key={quotes[currentSlide].id}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
              }}
            >
              <img
                src={quotes[currentSlide].img_src}
                style={{
                  width: "100%",
                  height: 280,
                  zIndex: "-100",
                  transition: "opacity 0.5s ease",
                }}
              />
              <p
                style={{
                  maxWidth: "75%",
                  position: "absolute",
                  zIndex: "100",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  letterSpacing: "0.3px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(0.3rem)",
                  padding: "0.3rem",
                  borderRadius: "0.3rem",
                  transition: "opacity 0.5s ease",
                }}
              >
                {quotes[currentSlide].content} -{" "}
                <q>{quotes[currentSlide].author}</q>
              </p>
            </div>
          }
        </div>
      </div>
    </header>
  );
};
export default Hero;
