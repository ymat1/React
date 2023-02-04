import { useState } from 'react';

function App() {
  // handle textbox value
  const [input, setInput] = useState('');
  // prepare todos handler array
  const [todos, setTodos] = useState([]);
  // handle submit
  function addTodo() {
    const item = {
      id: Math.floor(Math.random()* 1000),
      value: input,
      status: false
    }
    setTodos(oldTodos => [...oldTodos, item]);
    setInput('');
  }
  // handle delete todo
  function deleteTodo(id) {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList)
  }
  // mark todo as done
  function doneTodo(id) {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const tmpTodos = [...todos];
    tmpTodos[todoIndex].status = true
    setTodos(tmpTodos)
  }
  return (
    <div className='App'>
      <div className="card bg-light p-5 border-success position-absolute top-50 start-50 translate-middle">
        <input type='text' onChange={e => setInput(e.target.value)} value={input} placeholder='Add todo' className='form-control mb-2 border-success'/>
        <button onClick={() => addTodo()} className='btn btn-success'>Submit</button>
        <hr />
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id} style={{textDecoration: todo.status ? 'line-through' : ''}} className='list-unstyled mb-4'>
                <p className='d-flex align-items-center justify-content-end'>
                  {todo.value}
                  <button className='btn btn-danger ms-2' onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button className='btn btn-primary ms-2' onClick={() => doneTodo(todo.id)}>Done</button>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;
