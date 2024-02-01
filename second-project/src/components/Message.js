const Message=()=>{
    function handleClick(){
        console.log("Button is Clicked")

    }
    return (
        <button onClick={handleClick}>Click Me Here</button>
    )
}
export default Message;