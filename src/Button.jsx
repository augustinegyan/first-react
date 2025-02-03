function Button(){

    //Click Events

const handleClick = ()=>{
    console.log('Ouch Stop pressing me')
}
const handleClick2 = (name)=>{
    console.log(`${name}stop clicking me`)
}
    return(
        <button onClick={()=>handleClick2('Augustine')}>Click me</button>
    )


}
export default Button