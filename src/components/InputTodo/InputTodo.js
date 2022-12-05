import React from "react";
import { Button } from '../Button/Button'
import style from './InputTodo.module.css';
import { useDispatch, useSelector } from "react-redux";
import {updateInputsTodo, addRecord} from '../../actions/action'

const DEFAUL_TODO = {
    name: '',
    description:'',
}

export const InputTodo = (props)=>{

    const dispatch = useDispatch();
    const todo = useSelector((state)=> state.inputAreaTodo)
    // console.log(todo)
    const todoCount = useSelector((state) => state.todos.length)

    const onChange = ( event ) =>{
        const {name, value} = event.target;
        // console.log(value)
        dispatch(updateInputsTodo(name,value))
    } 

    const onClick = () => {
        let data = {id: Date.now(), name:todo.name, description:todo.description , checked: false}
        dispatch(addRecord(data));
        dispatch(updateInputsTodo(DEFAUL_TODO))
    }
    return(
        <form className={style.container_form}>
            <div className={style.container_form_area}>

            <label className={style.container_form_input_label} htmlFor='name'>
                Name:
                <input className={style.container_form_input} type="text" id="name" name="name" value={todo.name} onChange={onChange}></input>
            </label>
            <label  className={style.container_form_input_label} htmlFor='description'>
                Description todo:
                <input className={style.container_form_input} type="text" id= "description" name="description" value={todo.description} onChange={onChange}></input>
            </label>
            <Button type="button" name = "ADD TODO" onClick = {onClick}/>
                            
            </div>
        </form>
    )
}