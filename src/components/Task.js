// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, toggleEdit } from "../redux/todoSlice";
export default function Task(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({ id: props.item.id, completed: !props.item.completed })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: props.item.id }));
  };

  const handleEditClick = () => {
    dispatch(toggleEdit({ id: props.item.id, editable: !props.item.editable }));
  };

  return (
    <div>
      <div
        className={`container ${
          props.item.editable ? "task-container-editable" : "task-container"
        }`}
        contentEditable={props.item.editable}
      >
        <div className="task-container-text">
          <span className={props.item.completed ? "completed" : ""}>
            {props.item.title}
          </span>
        </div>
        <div className="task-container-icons">
          <input
            className="task-checkbox task-container-icon"
            type="checkbox"
            name="completed"
            id="completed"
            checked={props.item.completed}
            onChange={handleCompleteClick}
          />
          <i
            class="fa-solid fa-pen-to-square task-container-icon"
            onClick={handleEditClick}
          ></i>
          <i
            class="fa-solid fa-trash task-container-icon"
            onClick={handleDeleteClick}
          ></i>
        </div>
      </div>
    </div>
  );
}
