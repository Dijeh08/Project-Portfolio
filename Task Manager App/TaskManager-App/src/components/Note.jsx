import React from "react";
import "./Note.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Input from "./input"; 

function Note(props) {
    function handleEdit() {
        // alert(`hello ${props.id}`)
        props.onEdit(props.id)
    }

    function handleDelete() {
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            <div>
            
                {props.condition == "true" ? <Input 
                                                    buttonText ="EDIT"
                                                    size={20}
                                                    content={props.content}/>: <p>{props.content} </p>}
                
            </div> 
            <div className="buttonContainer">
                {props.condition =="true"? null : <div>
                <CreateOutlinedIcon onClick={handleEdit}/>
                <DeleteOutlineOutlinedIcon onClick={handleDelete}/>
                </div>}
                
                
                
            </div>
        </div>
    )
}

export default Note