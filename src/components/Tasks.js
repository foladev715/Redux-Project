import Task from "./Task";
import { useSelector } from "react-redux";

const Tasks = () => {
  const todos = useSelector((state) => state.todos);
  const toDoList = todos.map((el) => <Task key={el.id} item={el} />);

  return <ul className="list-group">{toDoList}</ul>;
};

export default Tasks;
