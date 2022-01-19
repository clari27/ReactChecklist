import * as React from "react";
import { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ControlledCheckbox from "./ControlledCheckbox";
import Box from "@mui/material/Box";

async function getTasks() {
  const data = await fetch("http://localhost:3333/tasks");
  return await data.json();
}

function RadioButtons() {
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

  const taskFilter = (bancoLiquidante, operacao, lastro) => {
    const result = tasks.filter((task) => {
      if (
        task.bancoLiquidante === bancoLiquidante &&
        task.operacao === operacao &&
        task.lastro === lastro
      ) {
        return task;
      }
    });
    setTask(result);
  };

  return (
    <Box flexDirection="row">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Operação</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value={"1"}
            control={<Radio />}
            onChange={() => taskFilter("bradesco", "corporativa", "automatico")}
            label="Corporativo_LastroAutomático_Bradesco"
          />
          <FormControlLabel
            value={"2"}
            control={<Radio />}
            onChange={() => taskFilter("itau", "corporativa", "automatico")}
            label="Corporativo_lastroAutomático_Itaú"
          />
          <FormControlLabel
            value={"3"}
            control={<Radio />}
            onChange={() =>
              taskFilter("bradesco", "corporativa", "nao_automatico")
            }
            label="Corporativo_LastroNaoAutomático_Bradesco"
          />
          <FormControlLabel
            value={"4"}
            control={<Radio />}
            onChange={() => taskFilter("itau", "corporativa", "nao_automatico")}
            label="Corporativo_LastroNaoAutomático_Itaú"
          />
          <FormControlLabel
            value={"5"}
            control={<Radio />}
            onChange={() => taskFilter("bradesco", "pulverizada", "n/a")}
            label="Pulverizado_Bradesco"
          />
          <FormControlLabel
            value={"6"}
            control={<Radio />}
            onChange={() => taskFilter("itau", "pulverizada", "n/a")}
            label="Pulverizado_Itaú"
          />
        </RadioGroup>
      </FormControl>
      <ControlledCheckbox parentToChild={tasks} />
    </Box>
  );
}

export default RadioButtons;
