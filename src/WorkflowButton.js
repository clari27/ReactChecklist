import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function WorkflowButton() {
  return (
    <Button variant="contained" component={Link} to="/questionario">
      Workflow
    </Button>
  );
}

export default WorkflowButton;
