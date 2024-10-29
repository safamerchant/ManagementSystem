import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login/Login";
import Analytics from "./Components/Analytics/Analytics"; 
import Projects from "./Components/Projects/Projects"; 
import Home from "./Components/Home/Home"; // Home contains the sidebar and sub-routes
import Register from './Components/Login/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Default route for login */}
          <Route path="/" element={<Projects />} />  {/* Route for the dashboard (contains sidebar) */}
          <Route path="/register" element={<Register />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
