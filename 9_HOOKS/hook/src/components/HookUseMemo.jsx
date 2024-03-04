import { useState, useEffect, useMemo } from "react"

const HookUseMemo = () => {

    const [number, setNumber] = useState(0)

    // const premiumNumbers = ['1', '2', '3', '4', '5']

    const premiumNumbers = useMemo(() => {
        return ['1', '2', '3', '4', '5']
    }, [])

    useEffect(() => {
        console.log('Premio alterado')
    }, [premiumNumbers])

    return (
        <div>
            <h2>UseMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Seu número {number} é Premium</p> : <p>Seu número {number} não é Premium</p>}
        </div>
    )
}

export default HookUseMemo