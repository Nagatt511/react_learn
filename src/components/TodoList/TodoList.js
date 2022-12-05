import React, {useEffect, useState} from 'react';
import { ItemTodo } from './ItemTodo/ItemTodo';

import {connect, useSelector, useDispatch} from 'react-redux';

export const TodoList = props => {
    const todos = useSelector((state) => state.todos)
    const {todoList, setTodoList} = useState([])
    const { toggleTodo,  ...rest} = props;

    useEffect(()=>{
        if (todos.length){
            setTodoList(todos)
        }
        console.log(todoList)
        console.log(todos)
    }, [todos])
    

    return (
        <div > 
            {/* {todoList.length && todoList.join('')} */}
            {/* {todoList.map((value)=>{
                return <ItemTodo id={value.id}  toggleTodo = {toggleTodo} checked={value.checked} name = {value.name} description = {value.description} key={value.id} />
            })} */}
        </div>

    )
} 
