import {useState} from 'react'
const Form=()=>{
    const [name,setName]=useState({
        firstName:"",
        lastName:""
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
    }
    
    return(
        <div>
            {name.firstName}- {name.lastName}
            <input type="text" value={name.firstName} 
            onChange={(e)=>setName({...name,firstName:e.target.value})} ></input>
            <input type='text' onChange={(e)=>setName({...name,lastName:e.target.value})} value={name.lastName}></input>
            <button type='submit' onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    )
}
export default Form;