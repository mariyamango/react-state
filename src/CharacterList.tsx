type Character = {
    name: string
};

interface CharacterListProps {
    characters: Character[];
}

export default function CharacterList  ({characters}: CharacterListProps)  {
    return <ul>
        {characters.map((character) => (
            <li>{character.name}</li>
        ))}
    </ul>
};