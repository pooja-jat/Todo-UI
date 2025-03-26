import { createContext, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // initial state structure

  const initialState = {
    todos: [{ id: 1, text: "I Am  From Reducer" }],
    edit: {
      todo: {},
      isEdit: false,
    },
  };

  //Use Reducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
