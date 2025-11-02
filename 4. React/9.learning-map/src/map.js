const todoItems = [
  { id: 1, todoText: "Buy Milk", todoDate: "4-Sept-2024" },
  { id: 2, todoText: "Go to College", todoDate: "Weekday" },
  { id: 3, todoText: "Exercise", todoDate: "Everyday" },
];

const todoItemsText = todoItems.map(todoItem => todoItem.todoDate);
console.log(todoItemsText);

// function convertObjectToTodoText(todoItem){
//     console.log(`Convert function was called with item ${JSON.stringify(todoItem)}, converting this to ${todoItem.todoText}`);
//     return todoItem.todoText;
// }

// console.log("--------------- Starting --------------- ");
// const todoItemsText = [];
// todoItems.forEach(item =>{
//     const str = convertObjectToTodoText(item);
//     todoItemsText.push(str);
// });
// console.log(todoItemsText);
// console.log("--------------- Ending --------------- ");