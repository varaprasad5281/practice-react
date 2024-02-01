const Fruit=({name,price})=>{
    return(
        <>{price>20? <li>{name} {price}</li>:""}</>

    )
}
export default Fruit;