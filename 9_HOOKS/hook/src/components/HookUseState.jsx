import { useState } from 'react'

const HookUseState = () => {

    const [name, setName] = useState("Nikola Tesla")

    return (
        <div>
            <h2>useState</h2>
            <p>{name}</p>
            <button onClick={() => setName("Albert Einstein")}>Alterar</button>
            <button onClick={() => setName("Nikola Tesla")}>Alterar</button>
        </div>
    )
}

export default HookUseState
