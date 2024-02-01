import { useState } from "react"

const Practice=()=>{
    const[name,setName]=useState({
        firstName:"",
        lastName:"",
        email:""
    })
    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
    }
    return (
        <>
        <input type="text" value={name.firstName} placeholder="First Name" onChange={(e)=>setName({...name,firstName:e.target.value})}></input>
        <input type="text" value={name.lastName} placeholder="Last Name" onChange={(e)=>setName({...name,lastName:e.target.value})}></input>
        <input type="email" value={name.email} placeholder="Email" onChange={(e)=>setName({...name,email:e.target.value})}></input>
        <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </>
    )
}
export default Practice;