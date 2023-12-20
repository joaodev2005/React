const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log('executou')
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log('teste')}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handleClick}>Clique aqui - com função</button>
            </div>
        </div>
    )
}

export default Events