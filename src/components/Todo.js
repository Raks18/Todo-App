import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState({
    name: "",
  });
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div className="main-div">
      <h4>Add your list here</h4>
      <div>
        <input
          type="text"
          placeholder="Add Items ..."
          value={inputData.name}
          onChange={(e) => setInputData({ name: e.target.value })}
        />
      </div>
      <button
        className="btn btn-primary btn-md mt-2"
        onClick={() =>
          dispatch(addTodo(inputData), setInputData({ name: "" }))
        }
      >
        Add
      </button>
      <div className="mt-2">
          {list.map((elem) => {
              return (
                  <div className="todo-item mt-2">
                      <h5>{elem.data.name}</h5>
                      <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
                  </div>
              )
          })}
      </div>
      <div>
          <button className="btn btn-warning mt-3" onClick={() => dispatch(removeTodo())}>Remove All</button>
      </div>
    </div>
    
  );
};

export default Todo;
