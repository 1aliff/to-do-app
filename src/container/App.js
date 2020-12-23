import { useState } from 'react';
import './App.css';

//reacststrap
import { Input, Button, InputGroup, Form} from 'reactstrap'

// components
import Lists from '../components/Lists'

function App() {
  const [todos, setTodos] = useState([])
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if(!query) return alert('Enter task');

    let todosArr = [...todos, query]
    setTodos(todosArr);
    setQuery('');
  }

  const handleClearTask = (e) => {
    e.preventDefault();
    setTodos([]);
  }

  const handleDeleteTask = (index) => {
    let todosArr = [...todos];
    let deletedIndex = todosArr.splice(index, 1);
    let deletedTodosArr = todosArr.filter(todoArr => todoArr !== deletedIndex)
    setTodos(deletedTodosArr);
  }

  return (
    <div className="App">
      <header className="App-header">Another Todo App</header>
        <div className="App-content">
          {
            todos.map((todo, index) => 
              <Lists
                index={index}
                todo={todo}
                handleDeleteTask={handleDeleteTask}
              />
            )
          }
          <Form onSubmit={(e) => handleSubmit}>
            <InputGroup className="Input-form">
              <Input
                type='text'
                name="name"
                placeholder="Add task.."
                value={query}
                onChange={e => setQuery(e.target.value)}
                />
            </InputGroup>
          <Button size="sm" color="info" onClick={handleAddTask}>Add Task</Button>
          &nbsp;
          <Button size="sm"color="danger" onClick={handleClearTask}>Clear All Task</Button>
          </Form>
        </div>
    </div>
  );
}

export default App;
