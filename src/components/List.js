import Item from "./item"

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari"/>
                <Item marca="Renault"/>
                <Item marca="Fiat"/>
            </ul>
        </>
    )
}

export default List