import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Juca'])

    const [itens] = useState(['TV', 'Geladeira', 'Microondas'])

    const [games] = useState(['Baldurs Gate', 'Alan Wake 2', 'Super Mario Bros 3'])

    const [users, setUsers] = useState([
        { id: 1, name: 'João', age: 18 },
        { id: 2, name: 'Champola', age: 60 },
        { id: 3, name: 'Jamorango', age: 24 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id)
        )
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {itens.map((ele) => (
                    <li>{ele}</li>
                ))}
            </ul>
            <ul>
                {games.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender 