import { randomInt } from "crypto"
import { useEffect, useState } from "react"

function App() {

const [pokemon, setPokemon] = useState(null)

useEffect(() => {
  const URL:string="https://pokeapi.co/api/v2/pokemon/"+randomInt(1,152)
  fetch(URL)
  .then(Response => Response.json())
  .then(data => setPokemon(data))
}, [])


  return (
    <>
    <p className= "text-4xl">{pokemon?.name}</p>
    <p className="text-4xl">{pokemon?.abilities?.[0]?.ability?.name}</p>
    </>
  )
}

export default App
