import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

const Form = () => {
  const { edit, dispatch } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit
      ? dispatch({
          type: "ADD_TODO",
          payload: { id: crypto.randomUUID(), text },
        })
      : dispatch({
          type: "UPDATE_TODO",
          payload: { id: edit.todo.id, text },
        });

    setText("");
  };
  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Any Text Here"
        className="form-control rounded-0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="btn btn-success my-2 w-100 rounded-0">
        Save Todo
      </button>
    </form>
  );
};

export default Form;
