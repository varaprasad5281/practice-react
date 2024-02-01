import React, {useEffect, useState} from 'react'
const Functional =()=>{
    const[resourceType,setResourceType]=useState('Posts')
    const[items,setItems]=useState([])

    console.log('render')

    useEffect(()=>{
        console.log("Resource type changed")

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res=>res.json())
        .then(json=>setItems(json))
    },[resourceType])


    return(
        <>
        <h1>This is Prasad</h1>
        <div>
            <button onClick={()=>setResourceType('Posts')}> Posts</button>
            <button onClick={()=>setResourceType('Users')}>Users</button>
            <button onClick={()=>setResourceType('Comments')}>Comments</button>

        </div>
        <h1>{resourceType}</h1>
        {
            items.map(item=>{
                return <p>{JSON.stringify(item)}</p>
            })

        }
        </>

    )
}
export default Functional;