import "./App.css";
import AddTask from "./components/AddTask";
import DeleteTask from "./components/DeleteTask";
import Footer from "./components/footer";
import ListTask from "./components/ListTask";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="app_header">
        <h1 className="app_title">Todo App</h1>
      </div>
      <br />
      <div className="app_body">
        <AddTask />
        <br />
        {/* <ListTask /> */}
        <br />
        <Tasks />
        <br />
        {/* <DeleteTask /> */}
      </div>
      <br />
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
