import React from 'react'
import style from './style.module.css'

const AddToDoItem = (props) => {
    const { handleAddClick, handleInput } = props;

    return (
        <fieldset className={style.Add}>
            <legend className={style.title}>New Task</legend>
            <div className={style.AddItem}>
                <input required name='afterAdd' id='afterAdd' type="text" placeholder='Love You' className={style.Addinput} onChange={handleInput} />
                <button onClick={handleAddClick} className={style.AddBtn}>
                    Add
                </button>
            </div>
        </fieldset>

    )
}

export default AddToDoItem