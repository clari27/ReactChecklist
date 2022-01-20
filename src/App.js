import ControlledCheckbox from "./ControlledCheckbox";
import RadioButtons from "./RadioButtons";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RadioButtons />
        <ControlledCheckbox parentToChild={[]} />
      </header>
    </div>
  );
}

export default App;
