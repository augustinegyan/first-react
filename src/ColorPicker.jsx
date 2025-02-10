import { useState } from "react"



function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");
    
    function handleColorChange (event){
        setColor(event.targer.value);
    }
    return(
     <>
     <div className="color-picker-container">
        <h1>Color Pickers</h1>
        <div className="color-display" style={{backgrondColor:color}}>
            <p>Selected Color :{color}</p>
        </div>
        <label>Select Color:{color}</label>
        <input type="color" value={color} onChange={handleColorChange}/>

     </div>
     </>   
    )
}
export default ColorPicker