import './MyForm.css'

import { useState } from 'react'

const MyForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name, email)

    return (
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name='name'
                    placeholder='Digite seu nome'
                    onChange={handleName}
                />
            </div>
            <label>
                <span>E-mail:</span>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Digite seu e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default MyForm  