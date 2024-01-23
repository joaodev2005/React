import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <h1>Ops!</h1>
            <p>Parece que alguma coisa aconteceu, tente novamente mais tarde ou entre em contato</p>
            <p>
                {error.statusText}
            </p>
            <p>
                {error.error.message}
            </p>
        </div>
    )
}

export default ErrorPage