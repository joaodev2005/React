function TemplateExpression() {
    const name = 'João'

    const data = {
        age: 18,
        job: 'Programador',
    }

    return (
        <div>
            <p>A soma é {6 - 2}</p>
            <h3>Bem vindo! {name}</h3>
            <p>Seu nome é {name}, sua idade é {data.age} e trabalha como {data.job}.</p>
        </div>
    )
}

export default TemplateExpression