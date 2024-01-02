import classes from './Title.module.css'

const Title = () => {
    return (
        <div>
            <h1 className={classes.title}>Meu titulo</h1>
            <h4 className={classes.subTitle}>testes melhores</h4>
        </div>
    )
}

export default Title