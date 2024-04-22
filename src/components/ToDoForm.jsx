import { useState } from "react";
import ToDoItems from "./ToDoItem";

const ToDoForm = () => {
  // State management to update based on user input
  //   first is the variable to store info and
  // second is a function to update state
  // info is available until refresh
  // can be initialized with empty data type needed
  const [todoInput, setTodoInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [toDoItems, setToDoItems] = useState([]);

  //   function to handle things inside of html code
  // in this case we're writing a function to submit the task
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setToDoItems((prevItems) => [...prevItems, todoInput]);
      window.alert("Submitted!");
      setLoading(false);
      setTodoInput("");
    }, 2000);
  }

  //   Return html code that the user sees, but we can
  // integrate with js
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button type="submit" disabled={loading}>
          Add To Do
        </button>
      </form>
      <div>
        {toDoItems && toDoItems.length > 0 ? (
          <ToDoItems items={toDoItems} />
        ) : (
          "No to-do items found"
        )}
      </div>
    </div>
  );
};

export default ToDoForm;
