import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import Tasks from "./Tasks";

export default function AddTask(props) {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <div className="container container-add-task">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleText1"
              placeholder="New Todo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-primary-add-task"
          >
            Add New Task
          </button>
        </form>
      </div>
    </div>
  );
}
