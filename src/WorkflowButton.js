import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

function WorkflowButton() {
  return (
    <Box
      sx={{
        color: "action.active",
        justifyContent: "center",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        p: 1,
        m: 1,
      }}
    >
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
        <Badge color="warning" badgeContent={5}>
          <PublishedWithChangesOutlinedIcon />
        </Badge>
        <Button variant="space-between" component={Link} to="/questionario">
          Workflow
        </Button>
      </Box>
    </Box>
  );
}

export default WorkflowButton;
