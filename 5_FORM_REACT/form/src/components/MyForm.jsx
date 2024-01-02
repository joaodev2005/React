import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ userName, userEmail }) => {
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)

    const [bio, setBio] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name, email, bio)

        setName('')
        setEmail('')
        setBio('')
    }

    console.log(name, email, bio)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name='name'
                    placeholder='Digite seu nome'
                    onChange={handleName}
                    value={name || ''}
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
                    value={email || ''}
                />
            </label>
            <label>
                <span>Bio:</span>
                <textarea
                    name="bio"
                    id="bio"
                    cols="30"
                    rows="10"
                    placeholder='Descrição'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                ></textarea>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default MyForm   