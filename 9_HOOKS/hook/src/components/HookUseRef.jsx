import { useRef, useEffect, useState } from 'react'

const HookUseRef = () => {

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    const inpuRef = useRef()
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setText('')

        inpuRef.current.focus()
    }

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou: {numberRef.current}</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={inpuRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    )
}

export default HookUseRef