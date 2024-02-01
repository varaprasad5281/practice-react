import Fruit from './Fruit'
const Fruits=()=>{
    const fruits=[
        {name:"Apple",price:20,emoji:"smile"},
        {name:"Mango",price:10,emoji:"smile"},
        {name:"Orange",price:30,emoji:"smile"},
        {name:"Banana",price:40,emoji:"smile"}

    ]
    return(
        <ul>
            {fruits.map((item)=><Fruit name={item.name} price={item.price}/>)}
        </ul>

    )
}
export default Fruits;