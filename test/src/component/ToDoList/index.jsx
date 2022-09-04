import React from "react";
import ToDoItem from "../ToDoItem/index";
import style from "./ToDoList.module.css"
const ToDoList = (props) => {

  const { todoList, deleteToDo, onChangeBox } = props;



  return (
    <>
      <ul className={style.ulStyle}>
        {todoList.map((item) => (
          <ToDoItem
            key={item.id}
            todo={item}
            onChangeBox={onChangeBox}
            deleteToDo={deleteToDo}
          />
        ))}
      </ul>

    </>

  );
};

export default ToDoList;
