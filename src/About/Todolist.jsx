import React from 'react'
import './todolist.css'
import { useState } from 'react'

function Todolist() {
  const [input, setInput] = useState(''); // this is input value
  const [submit, setSubmit] = useState([]); //this button

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input.trim() !== '') {
      setSubmit([...submit, input]);
      setInput('');
    }
  }

  function handleRemove(index) {
    const remove = [...submit];
    remove.splice(index, 1);
    setSubmit(remove);
  }

  return (
    <div>
      <h1>Send your Feedback</h1>
      <br />
      <div className="todolist">
        <input type="text" id='input' placeholder='enter your message' onChange={handleChange} />
        <button id='button' onClick={handleClick}>Add</button>
      </div>
      <div className="todolist">
        <ul>
          {submit.map((s, index) => (
            <li className="box" key={index}> {s}
              
                <button onClick={() => handleRemove(index)} >❌</button>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todolist
