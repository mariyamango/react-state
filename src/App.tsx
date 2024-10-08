import { useState } from 'react'
import './App.css'
import {response} from './CharacterResponse.ts'
import './CharacterList.tsx'
import CharacterList from "./CharacterList.tsx";

function App() {
    const [getCharacterList, setCharacterList] = useState(response.results);
    console.log(setCharacterList);

    return (
        <>
            <div className="App">
                {CharacterList (getCharacterList)}
            </div>
        </>
    )
}

export default App
