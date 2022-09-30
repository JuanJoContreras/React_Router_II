import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/Card";


export default function Detalle() {
  const { name } = useParams();
  //console.log(name + " ruta detalle");
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat
    }));
    const types = data.types.map((elem) => elem.type.name).join(" ");
    // console.log(name, stats, src, types)
    //console.log(data.types);
    setPokemon({ name, stats, src, types });
  };

  //console.log(pokemon)

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  );
}
