import Item from "./item"
function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={1980}      />
                <Item marca="Renault" ano_lancamento={1964}      />
                <Item marca=   "Fiat" ano_lancamento={1978}      />
                <Item                                            />
            </ul>
        </>
    )
}
export default List