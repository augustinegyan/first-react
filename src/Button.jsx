function Button(){

    //Click Events
// let count = 0;

// const handleClick = (name)=>{
// if(count <3){
//     count++;
//     console.log(`${name} you clicked me ${count} times`)
// }else{
//     console.log(`${name} stop clicking me!`)
// }
// }

    //Event Parameter cLICK EVENT 
    const handleClick=(e)=>{
        e.target.textContent = 'OUCH!'
    }


// const handleClick2 = (name)=>{
//     console.log(`${name}stop clicking me`)
// }
    return(
        <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
    )


}
export default Button