import './MyForm.css'

const MyForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' />
            </div>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default MyForm 