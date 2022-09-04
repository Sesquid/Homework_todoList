import React from 'react'
import { useState } from 'react';
import style from './style.module.css'

const AddToDoItem = (props) => {
    const [ Input, setInput ] = useState("");
    const handleAddClick = (e) => {
        e.preventDefault();
        setInput("");
        props.addToDo(Input)
        // console.log(Input);
    }
    return (
        <fieldset className={style.Add}>
            <legend className={style.title}>New Task</legend>
            <form className={style.AddItem} onSubmit={handleAddClick}>
                <input
                    value = {Input}
                    onChange = {(e) => setInput(e.target.value)}
                    name='afterAdd'
                    id='afterAdd' 
                    type="text" 
                    placeholder='Add Something' 
                    className={style.Addinput} 
                    required
                />
                <button type='submit' className={style.AddBtn}>
                    Add
                </button>
            </form>
        </fieldset>

    )
}

export default AddToDoItem