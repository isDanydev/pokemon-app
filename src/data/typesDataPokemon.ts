interface DataPokemon {
  id: number;
  name: string;
  url: string;
  sprites: Sprites;
  types: Types;
}

interface Sprites {
  back_default: string;
  front_default: string;
}

interface Types {
  type: string[];
}

export default DataPokemon;
