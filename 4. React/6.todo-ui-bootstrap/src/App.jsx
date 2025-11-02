import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

function App() {

  return (
    <>
      <center>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems></TodoItems>
      </center>
    </>
  );
}

export default App;
