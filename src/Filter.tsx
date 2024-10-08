import {useState} from "react";

export default function Filter(
    props: {
        callback: (value: string) => void
    }
) {
    const [value, setValue] = useState('');

    return <>
        <div>
            <input type="text" value={value} onInput={(event) => setValue(event.currentTarget.value ?? '')}
                   id="filter"/>
            <button onClick={
                () => {
                    props.callback(value)
                }
            }>Filter
            </button>
        </div>
    </>
}