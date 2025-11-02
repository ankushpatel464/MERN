import { useContext } from "react"
import { useEffect } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";

const LoadItems = () => {

    const {todoItems} = useContext(TodoItemsContext);


    if(todoItems.length !== 0){
        return <></>;
    }

    useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map(todoItemToClientModel);
        addAllTodoItems(newItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }, []);

    return (
      <>
        <h2>Enjoy Your Day</h2>
      </>
    )
}

export default LoadItems
