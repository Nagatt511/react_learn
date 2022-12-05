import logo from './logo.svg';
import './App.css';
import { TodoApp } from './components/TodoApp/TodoApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from "./reducers/reducer"

function App() {
  const store = createStore(reducer)

  return (
    <Provider store = {store} >
      <div className="App">
        <TodoApp/>
      </div>
    </Provider>
  );
}

export default App;
