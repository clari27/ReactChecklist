import * as React from "react";
import { useEffect, useState } from "react";
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
  const [filteredResults, setFilteredResults] = useState([]);
  const [checked, setChecked] = React.useState(false);

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

    setFilteredResults(result);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <h2>Selecione o tipo de Operação</h2>
        </FormLabel>
        <RadioGroup
          defaultValue="1"
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value={"1"}
            control={<Radio />}
            onChange={() => taskFilter("bradesco", "corporativa", "automatico")}
            label="Corporativo/Lastro Automático/Bradesco"
          />
          <FormControlLabel
            value={"2"}
            control={<Radio />}
            onChange={() => taskFilter("itau", "corporativa", "automatico")}
            label="Corporativo/Lastro Automático/Itaú"
          />
          <FormControlLabel
            value={"3"}
            control={<Radio />}
            onChange={() =>
              taskFilter("bradesco", "corporativa", "nao_automatico")
            }
            label="Corporativo/Lastro Não Automático/Bradesco"
          />
          <FormControlLabel
            value={"4"}
            control={<Radio />}
            onChange={() => taskFilter("itau", "corporativa", "nao_automatico")}
            label="Corporativo/Lastro Não Automático/Itaú"
          />
          <FormControlLabel
            value={"5"}
            control={<Radio />}
            onChange={() => taskFilter("bradesco", "pulverizada", "n/a")}
            label="Pulverizada/Bradesco"
          />
          <FormControlLabel
            value={"6"}
            control={<Radio />}
            onChange={() => taskFilter("itau", "pulverizada", "n/a")}
            label="Pulverizada/Itaú"
          />
        </RadioGroup>
      </FormControl>
      <ControlledCheckbox parentToChild={filteredResults} />
    </Box>
  );
}

export default RadioButtons;
