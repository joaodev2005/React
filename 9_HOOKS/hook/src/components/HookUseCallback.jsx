import { useCallback, useState } from "react"

import List from "./List"

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)

    const getItemsFromDatabase = useCallback(() => {

        return ['a', 'b', 'c', 'd']

    }, [])

    return (
        <div>
            <h2>UseCallback</h2>
            <List getItems={getItemsFromDatabase} />
            <button onClick={() => setCounter(counter + 1)}>Contador</button>
            <p>Counter: {counter}</p>
            <hr />
        </div>
    )
}

export default HookUseCallback