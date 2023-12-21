
const CondicionalRender = () => {
    const x = 5

    const name = 'Isaque'

    return (
        <div>
            <h3>Isso será exibido</h3>
            {x == 4 && <p>Se x for true sim!</p>}
            <h3>Render Ternário</h3>
            {name === 'Douglas' ?(
                <div>
                    <p>Olá Douglas</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
        </div>
    )
}

export default CondicionalRender