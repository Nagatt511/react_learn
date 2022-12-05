
export const addRecord =(data) =>({type:"ADD_TODO_ITEM", data});

export const deleteRecord =(id)=>({type:"DELETE_TODO_ITEM", id});

export const updateInputsTodo = (name, value)=> ({type:"INPUT_AREA_NEW_TODO", name: name, value:value});
export const toggleStatusTodo = () => ({type:"CHANGE_STATUS"});