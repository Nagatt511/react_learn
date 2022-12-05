import React from 'react';
import { Button } from '../../Button/Button';
import style from './todo.module.css';
import {connect, useSelector, useDispatch} from 'react-redux';
import { deleteRecord } from '../../../actions/action';

export const ItemTodo = props => {
    const {id, name, description, checked, toggleTodo, deleteTodo,  ...rest} = props;
    const dispatch = useDispatch();

    return (
        <div className={style.todo_wrapper} >
            <p style={
                {textDecoration: checked ? "line-through" : "none"}
            } 
              onClick={()=> {
                toggleTodo(id)
            }}
        >
                {name}
            </p>
            <p>
                {description}
            </p>
            <Button onClick={()=>{dispatch(deleteRecord(id))}} name ="DELETE" />
        </div>
    )
}




