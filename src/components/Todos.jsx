import React, { Fragment, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import axios from "axios";

const Todos = (props) => {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=20"
        );
        if (res.data) setTodosState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTodos();
  }, []);

  const changeStateTodo = (id) => {
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;

      return todo;
    });
    setTodosState(newTodos);
  };

  const deleteTodos = async (id) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

		const newTodos = todosState.filter((todo) => {
			if (todo.id !== id) return todo;
		});
	
		setTodosState(newTodos);
	} catch (error) {
		console.log(error.message)
	}
    
  };

  const addTodos = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title: title, completed: false }
      );

      const newTodos = [...todosState, res.data];
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <AddTodo addTodoFunc={addTodos} />
      {todosState.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todoProps={item}
            changeStateTodoFunc={changeStateTodo}
            deleteTodoFunc={deleteTodos}
          ></TodoItem>
        );
      })}
    </Fragment>
  );
};

export default Todos;
