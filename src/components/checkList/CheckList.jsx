import React, { useState } from 'react'
import ToDoItem from '../toDoItem/ToDoItem'
import Popup from "../popup/Popup";
import { v4 as uuidv4 } from 'uuid';

import "./checkList.style.css"

const CheckList = () => {
    const [todo, setTodo] = useState({text: "", id: "", isCompleted: false})
    const [checkList, setCheckList] = useState([])
      const [isPopupVisible, setIsPopupVisible] = useState(false);

    const onChangeHandler = (e) => {
        setTodo({ text: e.target.value , id: "", isCompleted:false})
    }
    
    const onCheckListClick = () => {
        setCheckList([...checkList, {...todo, id: uuidv4() }])
        setTodo({ text: "", id: "" })
       
    }
    const deleteTodo = (id) => {
     setCheckList([...checkList.filter((el)=> el.id !== id)])
    }
    
    const completeToDo = (id) => {
    const newCheckList = checkList.map((el) => {
      if (el.id === id) {
        return { ...el, isCompleted: !el.isCompleted };
      } else {
        return el;
      }
    });

    setCheckList([...newCheckList]);
  };

    
    //popup
      const clearAll = () => {
    setIsPopupVisible(true);
  };

  const pressYes = () => {
   setCheckList([]);
  };

  const pressNo = () => {
    setIsPopupVisible(false);
  };

  const completedCount = checkList.filter((el) => el.isCompleted).length;
  const totalCount = checkList.length;
    
  return (
      <div className='container'>
          <div className='input-container'>
              <input
                  name='todo'
                  value={todo.text}
                  onChange={onChangeHandler}
                  type='text'
                  placeholder='Enter your item'
                  className='input'
              
              />
              <button className='btn' onClick={onCheckListClick} >+</button>
          </div>
          <div className='check-list'> 
             
              {checkList.map((el, index) =>
              (<ToDoItem
                  key={index}
                  toDoText={el.text}
                  todoId={el.id}
                  isCompleted={el.isCompleted}
                  deleteTodo={deleteTodo}
                  completeToDo={completeToDo}
              /> ))}
             
                {checkList.length > 0 && (
          <div className="count">
            <p className="completed-count">
              {`${completedCount} of ${totalCount} items done`}
            </p>
            <button onClick={clearAll} className="clear-all-btn">
              Clear all
            </button>
            {isPopupVisible && <Popup yes={pressYes} no={pressNo} />}
          </div>
        )}
          </div>
    </div>
  )
}

export default CheckList