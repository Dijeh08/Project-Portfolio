import React, { useState } from "react";
import "./input.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function Input(props) {
    const [note, setNote] = useState({
        id: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(()=>{
            return{
                [name]: value 
            }
        });
    }

    function handleClick(event) {
        props.onClicked(note);
        // event.preventDefault();
        
    }
    return(
        <div className="input-container">
            <div>
                <input 
                    type="text" 
                    name="content"
                    size={props.size}
                    value={props.content}
                    placeholder={props.placeholder}
                    onChange={handleChange}
                    autoFocus/>
                <button onClick={handleClick}> 
                    {props.buttonText}
                </button>
            </div>
            
            
            
        </div>
    )
}

export default Input