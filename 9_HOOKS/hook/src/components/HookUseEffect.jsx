import { useEffect, useState } from 'react'

const HookUseEffect = () => {

    useEffect(() => {
        console.log('componente renderizado')
    })

    const [number, SetNumber] = useState(1)

    const changeSometing = () => {
        SetNumber(number + 1)
    }

    useEffect(() => {
        console.log('Executado apenas 1 vez')
    }, [])

    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {

        if(anotherNumber > 0) {
            console.log('Executado apenas 1 vez')
        }
        
    }, [anotherNumber])

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log('Executando...')
    //         setAnotherNumber(anotherNumber + 1)
    //     }, 2000)
    //     return () => clearTimeout(timer)
    // }, [anotherNumber])

    return (
        <div>
            <h2>HookUseEffect</h2>
            <p>{number}</p>
            <button onClick={changeSometing}>Alterar</button>
            <p>{anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar another</button>
        </div>
    )
}

export default HookUseEffect