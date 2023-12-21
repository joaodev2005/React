
const CondicionalRender = () => {
    const x = 5

    return (
        <div>
            <h3>Isso será exibido</h3>
            {x == 4 && <p>Se x for true sim!</p>}
        </div>
    )
}

export default CondicionalRender