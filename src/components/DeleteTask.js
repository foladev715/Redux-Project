import React from "react";

export default function DeleteTask(props) {
  return (
    <div>
      <div className="container container-delete-task">
        <button type="button" class="btn btn-danger btn-danger-delete-task">
          Delete done tasks
        </button>
        <button type="button" class="btn btn-danger btn-danger-delete-task">
          Delete all tasks
        </button>
      </div>
    </div>
  );
}
