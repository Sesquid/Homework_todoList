import React from "react";
import { useState } from "react";
import ToDoItem from "../ToDoItem/index";
import style from "./ToDoList.module.css"
import AddToDoItem from "../AddToDoItem/AddToDoItem";
const ToDoList = (props) => {
  const todo = [
    {
      id: "1",
      name: "Python",
      isDone: false,
    },
    {
      id: "2",
      name: "Java",
      isDone: false,
    },
    {
      id: "3",
      name: "React",
      isDone: false,
    },
    {
      id: "4",
      name: "Database",
      isDone: false,
    },
    {
      id: "5",
      name: "Algorithm",
      isDone: false,
    },
  ];

  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState(todo);

  const handleClick = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    // console.log("clicked");
  };

  const handleInput = (e) => {
    setNewTask(e.target.value);
    // console.log(e);
  }
  const handleAddClick = () => {
    const id = (list[list.length - 1].id + 1).toString();
    const isDone = false;
    const name = newTask;
    const newToDo = { id, name, isDone }
    const newList = list;
    newList.push(newToDo);
    setNewTask("");
    setList([...newList]);
    document.getElementById('afterAdd').value = "";
    // console.log(document.getElementById('afterAdd').value);
  }

  return (
    <>
      <AddToDoItem handleInput={handleInput} handleAddClick={handleAddClick} />
      <ul className={style.ulStyle}>
        {list.map((item) => (
          <ToDoItem id={item.id} key={item.id} name={item.name} isDone={item.isDone} handleClick={handleClick} />
        ))}
      </ul>

    </>

  );
};

export default ToDoList;
