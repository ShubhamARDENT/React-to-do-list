import { useState } from "react";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../Button";
import { Box, List, ListItem, Typography } from "@mui/material";

const TaskList = ({ tasks, onRemove, onEdit }) => {
  const [visibleId, setvisibleId] = useState(null);

  const handleMouseEnter = (id) => {
    setvisibleId(id);
  };

  const handleMouseLeave = () => {
    setvisibleId(null);
  };

  return (
    <Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {tasks.map((task) => {
          return (
            <ListItem
              sx={{
                background: "#f2f2f2",
                marginY: "10px",
                display: "flex",
                justifyContent: "space-between",
                fontfamily: "Rubik",
              }}
              key={task.id}
              onMouseEnter={() => handleMouseEnter(task.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Typography component={"span"} sx={{ fontSize: "1.4rem" }}>
                {task.Text}
              </Typography>
              <Box>
                {/* button component */}
                <Button
                  onClick={() => onEdit(task.id, task.Text)}
                  isVisible={visibleId === task.id}
                  icon={faPenToSquare}
                  bgColor={"#8f48eb"}
                  fontColor={"white"}
                />
                {/* button component */}
                <Button
                  bgColor={"red"}
                  onClick={() => onRemove(task.id)}
                  isVisible={visibleId === task.id}
                  fontColor={"white"}
                  icon={faTrash}
                />
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
export default TaskList;
