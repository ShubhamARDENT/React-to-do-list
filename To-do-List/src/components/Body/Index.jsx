import { useState } from "react";
import TaskList from "../TaskList";
import Button from "../Button";
import "./style.css";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Container,
  Typography,
  OutlinedInput,
  Button as ClearAllBtn,
} from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          background: "white",
          padding: "12px",
          marginX: "10px",
          borderRadius: "6px",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "2rem", fontWeight: "600", fontfamily: "Rubik" }}
          >
            Todo App
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveOrUpdate();
            }}
          >
            <OutlinedInput
              sx={{
                marginY: "20px",

                borderRadius: "5px",
                fontSize: "1.2rem",
                width: "80%",
                "& .MuiInputBase-input": {
                  paddingY: "12px",
                },
              }}
              placeholder="Add your new todo"
              value={value}
              onChange={handleOnchange}
            />
            {/* add btn */}
            <Button
              onClick={handleSaveOrUpdate}
              icon={editTaskId ? faSave : faPlus}
              isVisible={true}
              bgColor={"#8f48eb"}
              fontColor={"white"}
            />
          </form>
        </Box>
        {/* component */}
        <TaskList
          tasks={PrevTask}
          onRemove={handleRemoveTask}
          onEdit={handleEditTask}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2rem",
            marginTop: "10px",
          }}
        >
          <Typography component="p" sx={{ fontSize: "1.2rem" }}>
            You have {PrevTask.length} pending Tasks
          </Typography>
          {PrevTask.length >= 1 && (
            <ClearAllBtn
              sx={{
                background: "#8f48eb",
                border: "2px solid #8f48eb",
                color: "white",

                ":hover": {
                  background: "white",
                  border: "2px solid #8f48eb",
                  color: " #8f48eb",
                },
              }}
              onClick={handleClearAll}
            >
              Clear all
            </ClearAllBtn>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Body;
