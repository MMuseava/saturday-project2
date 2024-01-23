// import React from 'react'
import React, { useState } from "react";
import "./toDoItem.style.css";



const ToDoItem = ({
    toDoText,
    todoId,
    isCompleted,
    deleteTodo,
    completedToDo, }) => {
    
const [isChecked, setIsChecked] = useState(false);
const [isButtonClicked, setIsButtonClicked] = useState(false);


  const handleCheckboxChange = () => {
    completedToDo(todoId);
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    deleteTodo(todoId);
    setIsButtonClicked(true);
  };
    
    
  
    return (
        <div className={`todoitem-container ${isChecked || isButtonClicked ? "red-text" : ""}`}
      >
            <input
                className="todoitem-input"
                type='checkbox'
                checked={isCompleted}
                onChange={handleCheckboxChange}
            />
          <div>
              <p         style={{
          textDecoration: `${
            isCompleted || isChecked ? "line-through 3px solid green" : "none"
          }`,
          color: "inherit",
        }}
 >{ toDoText}</p>
          </div>
          <button className='todoitem-btn' onClick={handleButtonClick}  >x</button>


    </div>
  )
}

export default ToDoItem