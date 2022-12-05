import React from 'react';
import { TodoList } from '../TodoList/TodoList';
import { HeaderTodo } from '../HeaderTodo/HeaderTodo';
import { InputTodo } from '../InputTodo/InputTodo';
import { useDispatch, useSelector } from 'react-redux';
import {addRecord} from '../../actions/action'

export const TodoApp = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos)

    const addTodo = (data)=>{

    }
    // const [todos, setTodos] = React.useState(TEST_TODOS);
    // const addTodo = (data)=>{

    //     const {name, description} = data;
    //     if (name !=="") {
    //         setTodos([...todos, {id:todos[todos.length-1].id + 1, name, description, checked:false}])
    //     }
       
    // }
    // const deleteTodo = (id) => {
    //     setTodos(todos.filter((todo)=> todo.id !== id));
    // }
    // const toggleTodo = (id)=>{
    //     setTodos( todos.map( todo =>{
    //         if (todo.id === id) {
    //             return {...todo, checked: !todo.checked}
    //         }
    //         return todo;
    //     }))
    // }


    const toggleTodo = () =>{
        return 0;
    }
    return (<div>
        <HeaderTodo todoCount={todos.length} />
        <InputTodo  addTodo={addTodo}/>
        <TodoList toggleTodo={toggleTodo}/>
    </div>)
} 