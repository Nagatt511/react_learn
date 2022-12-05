import React from 'react';

export const HeaderTodo = props => {
    return (
        <div className='style.herader_container'>
            <div>
                Todo list <b>{props.todoCount}</b> task(s)
            </div>

        </div>
    )
}