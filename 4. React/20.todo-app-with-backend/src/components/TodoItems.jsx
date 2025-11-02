import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";
import {useContext} from "react";

const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  if(todoItems.length===0){
    return <h2>Enjoy Your Day</h2>
  }

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
      ))}
    </>
  );
};

export default TodoItems;