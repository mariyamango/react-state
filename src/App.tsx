import { useState } from 'react'
import './App.css'
import {response} from './CharacterResponse.ts'

function App() {
  const [characterList, setCharacterList] = useState(response.results)

  return (
    <>
      <div className="App">
          {characterList.forEach((element) -> element.name)}
      </div>
    </>
  )
}

export default App
