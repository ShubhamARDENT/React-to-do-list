import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const TaskList = ({ Tasks, onRemove, onEdit }) => {
  const [state, setState] = useState(true);

  return (
    <div className="tasklist_parent">
      <ul className="tasklist_child_1">
        {Tasks.map((Task) => {
          return (
            <li
              key={Task.id}
              className="tasklist_child_2"
              onMouseEnter={() => setState(false)}
              onMouseLeave={() => setState(true)}
            >
              <span>{Task.Text}</span>
              <div className="tasklist_child_3">
                <button
                  className="edit_btn"
                  onClick={() => onEdit(Task.id, Task.Text)}
                  style={{ visibility: state ? "hidden" : "visible" }}
                >
                  <FontAwesomeIcon className="edit_icon" icon={faPenToSquare} />
                </button>
                <button
                  className="remove_btn"
                  style={{ visibility: state ? "hidden" : "visible" }}
                  onClick={() => onRemove(Task.id)}
                >
                  <FontAwesomeIcon className="remove_icon" icon={faTrash} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
