import * as React from "react";
import Button from "@mui/material/Button";
import RadioButtons from "./RadioButtons";

function Button() {
  const isClicked = () => {
    return <RadioButtons />;
  };

  return (
    <Button variant="text" onClick={isClicked}>
      Workflow
    </Button>
  );
}
export default Button;
