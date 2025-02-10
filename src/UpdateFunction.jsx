import { useState } from "react"

function UpdateFunction (){

    const [count, setCount] = useState(0)

    function increment (){
        setCount(count+1);
    }

    function reset(){
        setCount(0)
    }

    function decrement (){
        setCount(count -1)
    }


    return(
        <>
        <p>Count: {count} </p>
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrease</button>
        </>
    )

}
export default UpdateFunction