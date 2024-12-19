import React, { useState } from "react";
import TaskList from "./TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
const Body = () => {
  const [value, setValue] = useState("");
  const [PrevTask, setTask] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };
  
  const handleUpdateTask = (id, newText) => {
    const updatedTasks = PrevTask.map((task) =>
      task.id === id ? { ...task, Text: newText } : task
    );
    setTask(updatedTasks);
    setEditTaskId(null);
    setValue("");
  };

  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setValue(text);
    console.log(text);
  };

  const handleAddTask = () => {
    const GeneratedId = Math.floor(Math.random() * 100);
    const newTask = {
      id: GeneratedId,
      Text: value,
    };
    if (value.trim()) {
      setTask([...PrevTask, newTask]);
      setValue("");
    }
  };

  const handleRemoveTask = (id) => {
    const filteredTasks = PrevTask.filter((task) => task.id !== id);
    setTask(filteredTasks);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleSaveOrUpdate = () => {
    if (editTaskId !== null) {
      handleUpdateTask(editTaskId, value);
    } else {
      handleAddTask();
    }
  };
  return (
    <section className="body-section">
      <div className="wrapper">
        <div className="parent">
          <h2>Todo App</h2>
          <input
            className="input_box"
            type="text"
            placeholder="Add your new todo"
            value={value}
            onChange={handleOnchange}
          />
          <button className="add_task_btn" onClick={handleSaveOrUpdate}>
            <FontAwesomeIcon
              className="plus_icon"
              icon={editTaskId ? faSave : faPlus}
            />
          </button>
        </div>

        <TaskList
          Tasks={PrevTask}
          onRemove={handleRemoveTask}
          onEdit={handleEditTask}
        />

        <div className="remaining_tasks">
          <p>You have {PrevTask.length} pending Tasks </p>
          {PrevTask.length >= 1 && (
            <button className="clear_all_btn" onClick={handleClearAll}>
              Clear all
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Body;
