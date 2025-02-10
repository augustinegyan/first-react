
//UseState and Onclick move




// import React, {useState} from 'react'
// function MyComponents (){
//     const [name, setName] = useState('Guest');
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);
//     const updateName = ()=>{
//       setName('SpongeBob');
     
//     } 

//     const incrementAge = ()=>{
//         setAge(age+1);
//     }
//     const toggleEmploy = ()=>{
//         setIsEmployed(!isEmployed)
//     }
//     return(
//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>
//             <p>Name: {age}</p>
//             <button onClick={incrementAge}>Set Name</button>
//             <p>Is Employed: {isEmployed?'yes':'no'}</p>
//             <button onClick={setIsEmployed}>Is Employed?</button>
//         </div>
//     )
// }
// export default MyComponents




import { useState } from "react";

function MyComponents (){
    const [name, setName] = useState("nothing");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment]= useState("");
    const [payment, setPayment] = useState("Gift Card")
    const [shipping, setShipping] = useState("")


    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value)
    }


    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handleClick(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleClick}/>
            <h1>name : {name}</h1>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
            placeholder="Drop Delivery Instruction"/>
            <p>Comment : {comment} </p>


            <select value={payment} onChange={handlePayment}>
                <option value=""> Select and option</option>
                <option value="Visa Card"> Visa Card</option>
                <option value="Master Card"> Master Card</option>
                <option value="Gift Card"> Gift Card</option>
                
            </select>
            <p>Payment:{payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"} 
                    onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
            <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"} 
                    onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>{shipping}</p>

        </div>  
    )
}
export default MyComponents



