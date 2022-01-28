import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";

function WorkflowButton() {
  return (
    <Button
      variant="contained"
      startIcon={<PublishedWithChangesOutlinedIcon />}
      component={Link}
      to="/questionario"
    >
      Workflow
    </Button>
  );
}

export default WorkflowButton;
