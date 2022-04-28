import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDone } from "../redux/todoSlice";
import { showAll } from "../redux/todoSlice";
import Tasks from "./Tasks";

export default function ListTask(props) {
  const dispatch = useDispatch();

  const handleDone = (event) => {
    dispatch(showDone());
  };

  const handleAll = (event) => {
    dispatch(showAll());
  };
  return (
    <div>
      <h2>List Todo</h2>
      <div className="container container-list-task">
        <button
          type="button"
          class="btn btn-primary btn-primary-list-task"
          onClick={handleAll}
        >
          All
        </button>
        <button
          type="button"
          class="btn btn-primary btn-primary-list-task"
          onClick={handleDone}
        >
          Done
        </button>
        <button type="button" class="btn btn-primary btn-primary-list-task">
          Todo
        </button>
      </div>
    </div>
  );
}
