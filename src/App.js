import ControlledCheckbox from "./ControlledCheckbox";
import RadioButtons from "./RadioButtons";
import WorkflowButton from "./WorkflowButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkflowButton />}></Route>
        <Route path="/questionario" element={<RadioButtons />}></Route>
        <Route path="/checklist" element={<ControlledCheckbox />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
