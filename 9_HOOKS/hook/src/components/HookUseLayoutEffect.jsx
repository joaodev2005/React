import { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {

    const [name, setName] = useState('Algum nome')

    useEffect(() => {
        console.log('useEffect')
        setName('Outro nome')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        setName('Mais um nome')
    }, [])

    console.log(name)

    return (
        <div>
            <h2>UseLayoutEffect</h2>
            <p>Nome: {name}</p>
            <hr />
        </div>
    )
}

export default HookUseLayoutEffect