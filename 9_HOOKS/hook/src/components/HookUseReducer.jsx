import { useReducer, useState } from "react"

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    const initialTasks = [
        { id: 1, text: 'Fazer exercicios' },
        { id: 2, text: 'Estudar React' },
        { id: 3, text: 'Ler um livro' },
        { id: 4, text: 'Jogar' }
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText('')

                return [...state, newTask]

            case 'DELETE':
                return state.filter(task => task.id !== action.id)

            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState('')
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = e => {
        e.preventDefault()

        dispatchTasks({ type: 'ADD' })
    }

    const removeTask = (id) => {
        dispatchTasks({ type: 'DELETE', id })
    }

    return (
        <div>
            <h2>useReducer</h2>
            <p>Numero aleatorio: {number}</p>
            <button onClick={dispatch}>Alterar</button>
            <h3>Tarefas</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setTaskText(e.target.value)}
                    value={taskText}
                />
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default HookUseReducer