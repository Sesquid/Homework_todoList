import React from "react";
import ToDoItemStyle from './ToDoItem.module.css';

const ToDoItem = (props) => {
  const { todo, deleteToDo, onChangeBox } = props;

  return (
    <li key={todo.id} className={ToDoItemStyle.li}>
      <div className={ToDoItemStyle.todo}>
        <input className={ToDoItemStyle.todocheckbox} type="checkbox" checked={todo.isDone} onChange={() => onChangeBox(todo)} />
        <div
          style={{ textDecoration: todo.isDone ? "line-through" : null }}
        >
          {todo.name}
        </div>
      </div>
      <button onClick={() => deleteToDo(todo)} className={ToDoItemStyle.Delbtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </button>
    </li>
  );
};

export default ToDoItem;
