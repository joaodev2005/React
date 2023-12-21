// import { useState } from "react"
import { useState } from "react"

const Data = () => {
    // let someData = 10

    // const [anotherNumber, setAnotherNumber] = useState(15)
    const [anotherNumber, setAnotherNumber] = useState('Juca')

    return (
        <div>
            {/* <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>
            <div>
                <p>Valor: { anotherNumber }</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar State</button>
            </div> */}
            <div>
                <p>Name: { anotherNumber }</p>
                <button onClick={() => setAnotherNumber('Carlos')}>Mudar estado</button>
                <button onClick={() => setAnotherNumber('Juca')}>Voltar estado</button>
            </div>
        </div>
    )
}

export default Data