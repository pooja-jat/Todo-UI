import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <div className="container p-5">
        <Form />
        <ListGroup />
      </div>
    </TodoProvider>
  );
};

export default App;
