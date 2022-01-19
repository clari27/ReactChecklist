import * as React from "react";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


async function getTasks() {
  const data = await fetch("http://localhost:3333/tasks");
  return await data.json();
}

function ControlledCheckbox() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    let mounted = true;
    getTasks().then((tasks) => {
      if (mounted) {
        setTask(tasks);
      }
    });
    return () => (mounted = false);
  }, []);


  const handleChange = (taskId) => {

    const result = tasks.filter((task) => {
    
    if (task.id === taskId) {
    
    task.status = !task.status;
    
    }
    
    return task;
    
    });
    
    setTask(result);
    
    };

  return (
    <FormControl>
      <FormLabel component="legend">
        <h1>Workflow Itau Pulverizada</h1>
      </FormLabel>

      <FormGroup>
        {tasks.map((task) => {
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
