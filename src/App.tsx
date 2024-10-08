import {useState} from 'react'
import './App.css'
import {response} from './CharacterResponse.ts'
import './CharacterList.tsx'
import CharacterList from "./CharacterList.tsx";
import Filter from "./Filter.tsx";

function App() {
    const [getCharacterList, setCharacterList] = useState(response.results);
    const [displayError, setError] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage] = useState(5);
    console.log(setCharacterList);

    const updateCharacterList = function (filterString: string) {
        const filteredList =
            response.results.filter(
                (character) => character.name.toLowerCase().includes(filterString.toLowerCase())
            )
        setError(filteredList.length === 0);
        setCharacterList(filteredList);
        setCurrentIndex(0);
    }

    const loadMoreCharacters = () => {
        setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }

    const displayedCharacters = getCharacterList.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <>
            <div className="filter">
                <Filter callback={updateCharacterList}/>
            </div>
            {displayError ?
                <div className="not-found-error">
                    No characters found
                </div> : null
            }
            <div className="list">
                <CharacterList characters = {displayedCharacters}/>
            </div>
            {currentIndex + itemsPerPage < getCharacterList.length && (<button onClick={loadMoreCharacters}>Load More</button> )}
        </>
    )
}

export default App
