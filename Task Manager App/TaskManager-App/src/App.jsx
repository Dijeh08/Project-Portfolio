import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/input.jsx'
import Header from './components/Header.jsx'
import Note from './components/Note.jsx'

function App() {
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
  const [isAddButtonPressed, setIsAddButtonPressed] = useState(false);
  const [newIdContent, setnewIdContent] = useState({
    id: "",
    content: ""
  });
  const [notes, setNotes] = useState([
    {id: 0,
      content: "Buy Milk",
      condition: "False"
    },
    {id: 1,
      content: "Go to Work",
      condition: "False"
    },
    {id: 2,
      content: "Go to Church",
      condition: "False"
    },
  ]);

    function handleClick(data) {
      setNotes(prevValue =>{
        return[
          ...prevValue,
          data
        ]
      })
      setIsAddButtonPressed(true)
      console.log(notes)
    }

    function DeleteNote(id) {
      setNotes(prevValue =>{
        return(
          prevValue.filter((noteItem, index) =>{
            return(index !== id);
          })
        )
      })
    }

    function EditNote(id) {

      var newd = notes.find(note =>{ return (note.id === id)})

      newd.condition = "true";
      console.log(newd);
      // setNotes(prevValue => { return[...prevValue, newd] })
      setnewIdContent(newd)
      setIsEditButtonPressed(true)
    
    }
    
  return (
    <>
    <div>
      <Header />
      {...newIdContent.content}
      <Input 
        size={33}
        onClicked={handleClick}
        placeholder = "What is the task today?"
        content={isAddButtonPressed=="true"? "": null}
        buttonText ="ADD TASK"/>
      
      {notes.map((note, index) => {
        return(
          <div>
            
            <Note 
              key={index}
              id={index}
              content={note.content}
              condition={note.condition}
              onEdit={EditNote}
              editCondition={isEditButtonPressed}
              onDelete={DeleteNote}
              />
          </div>
        )
      })}
    </div>
    </>
  )
}

export default App
