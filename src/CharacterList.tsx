type Character = { name: string };

export default function CharacterList  (props: Character[])  {
    return <ul>
        {props.map((character) => (
            <li>{character.name}</li>
        ))}
    </ul>
};