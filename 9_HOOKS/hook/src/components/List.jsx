import { useState , useEffect} from 'react'

const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        
        console.log('List renderizado')

        setItems(getItems())

    }, [getItems])

    return (
        <div>
            {items && items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default List