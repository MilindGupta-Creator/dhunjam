import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./dashboard/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
