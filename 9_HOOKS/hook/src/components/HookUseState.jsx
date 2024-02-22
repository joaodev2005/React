import { useState } from 'react'

const HookUseState = () => {

    const [name, setName] = useState("Nikola Tesla")

    const [age, setAge] = useState(50)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

    return (
        <div>
            <h2>useState</h2>
            <p>{name}</p>
            <button onClick={() => setName("Albert Einstein")}>Alterar</button>
            <button onClick={() => setName("Nikola Tesla")}>Alterar</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Alterar" />
            </form>
            <p>voce tem {age} anos</p>
            <hr />
        </div>
    )
}

export default HookUseState
