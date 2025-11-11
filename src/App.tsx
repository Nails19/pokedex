import { useEffect, useState } from "react"

function App() {

const [pokemon, setPokemon] = useState<any>(null)

useEffect(() => {
const randomInt = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const URL:string="https://pokeapi.co/api/v2/pokemon/"+randomInt(1,152)
  fetch(URL)
  .then(Response => Response.json())
  .then(data => setPokemon(data))
}, [])


  return (
    <>
    <p className= "text-4xl">{pokemon?.name}</p>
    {
      pokemon?.abilities.map(skill => {
        return <p className="text-2xl" key={skill.ability.name}>{skill.ability.name}</p>
      })
    }
    </>
  )
}

export default App
