import Form from "./components/Form";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
