interface Quote {
  id: number;
  content: string;
  author: string;
  img_src: string;
}

const quotes: Quote[] = [
  {
    id: 1,
    content:
      "Tenemos mucho en común. La misma tierra, el mismo aire, el mismo cielo. Tal vez si empezáramos a mirar lo que es igual, en lugar de mirar lo que es diferente, bueno, ¿quién sabe?",
    author: "Meowth",
    img_src: "../../src/assets/img/meowth.webp",
  },
  {
    id: 2,
    content: "Hazte cargo de tu destino",
    author: "Rayquaza",
    img_src: "../../src/assets/img/rayquaza.webp",
  },
  {
    id: 3,
    content:
      "Ahora veo que el nacimiento de uno es irrelevante. Es lo que haces lo que determina quién eres",
    author: "Mewtwo",
    img_src: "../../src/assets/img/Mewtwo.webp",
  },
  {
    id: 4,
    content: "Todo el mundo hace un giro equivocado de vez en cuando",
    author: "Ash Ketchum",
    img_src: "../../src/assets/img/ash-ketchum.webp",
  },
  {
    id: 5,
    content:
      "Al que madruga Dios lo ayuda, o en este caso, consigue un Pokémon.",
    author: "Profesor Oak",
    img_src: "../../src/assets/img/profesor-oak.webp",
  },
];

export default quotes;
