import * as React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

async function putTasks(url, task) {
  fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      id: task.id,
      item: task.item,
      bancoLiquidante: task.bancoLiquidante,
      operacao: task.operacao,
      lastro: task.lastro,
      check: task.check,
      status: task.status,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function ControlledCheckbox({ parentToChild }) {
  const [tasks, setTask] = useState([]);

  const handleChange = (taskId) => {
    const result = parentToChild.filter((task) => {
      if (task.id === taskId) {
        task.status = !task.status;
        putTasks(`http://localhost:3333/tasks/${taskId}`, task);
      }

      return task;
    });
    setTask(result);
  };

  return (
    <FormControl>
      <FormLabel component="legend"></FormLabel>

      <FormGroup>
        {parentToChild.map((task) => {
          return (
            <FormGroup key={task.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => handleChange(task.id)}
                    checked={task.status}
                    disabled={task.check === "automatico"}
                  />
                }
                label={task.item}
              />
            </FormGroup>
          );
        })}
      </FormGroup>
    </FormControl>
  );
}

export default ControlledCheckbox;
