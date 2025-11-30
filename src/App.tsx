import { useEffect, useState } from "react"
import StatBar from "./components/StatBar";

function App() {

  interface Poke {
    id: number;
    name: string;
    abilities: Array<{
      ability: {
        name: string;
      }
    }>;
    stats: Array<{
      stat: {
        name: string;
      };
      base_stat: number;
    }>;
    sprites: {
      other?: {
        dream_world?: {
          front_default: string | null;
        };
      };
    };
    cries?: {
      latest?: string;
    };
  }

  const [pokemon, setPokemon] = useState<Poke | null>(null)

  useEffect(() => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const URL: string = "https://pokeapi.co/api/v2/pokemon/" + randomInt(1, 152)
    fetch(URL)
      .then(Response => Response.json())
      .then((data: Poke) => setPokemon(data))
  }, [])

  const capWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
<<<<<<< HEAD
    <div className="bg-linear-to-r/increasing from-indigo-500 to-teal-400">
      {pokemon ?
        <>
        <div className= "flex flex-col items-center">
=======
    <div className="flex flex-col items-center bg-linear-to-r/increasing from-indigo-500 to-teal-400">
      {pokemon ?
        <>
        <div>
>>>>>>> b5a3e86 (Added bg and array to the interface)
          <p className="text-4xl">{capWord(pokemon.name)}</p>
          <img src={pokemon.sprites.other?.dream_world?.front_default ?? ""} alt={`picture of ${pokemon.name}`} />
          <p>
            {pokemon.stats.map((elem, index) => {
              return <StatBar
                key={pokemon.id + index} name={capWord(elem.stat.name)}
                value={elem.base_stat}
              />
            })
            }
          </p>
          <p className="text-3xl font underline">Abilities:</p>
          <ul className="list-disc pl-8">
            {
              pokemon?.abilities.map(skill => {
                return <li className="text-2xl" key={skill.ability.name}>{skill.ability.name}</li>
              })
            }
          </ul>
          <audio controls src={pokemon?.cries?.latest}></audio>
        </div>
        </>
        :
        <h1 className="text-4xl">Fetching...</h1>
      }
    </div>
  )
}

export default App
