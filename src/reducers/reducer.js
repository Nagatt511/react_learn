const TEST_TODOS = {
    todos:[
        {id:1, name: 'todo item 1', description: 'some text 1', checked:false},
        {id:2, name:'todo item 2', description: 'some text 2', checked:true},
        {id:3, name:'todo item 3', description: 'some text 3', checked:false },
    ],
    inputAreaTodo:{}
}
const DEFAULT_INPUT = '';

const reducer = (state = TEST_TODOS, action) =>{
    switch (action.type){
        case "ADD_TODO_ITEM":
            state.todos.push(action.data);
            // console.log(state)
            return state;
        case "DELETE_TODO_ITEM": 
            state.todos = state.todos.filter((todo)=> todo.id !== action.id );
            // console.log(state)
            return state;

        case "INPUT_AREA_NEW_TODO":

        state.inputAreaTodo[action.name]= action.value
            return state;
        default:
            return state;
        
    }
    return state;
}

export default reducer;