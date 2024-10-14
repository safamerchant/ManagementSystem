import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login  from "./Components/Login/Login";
import Home from "./Components/Home/Home";    // Adjust the path as needed
import Register from './Components/Login/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Login />} />  {/* Default route for login */}
          <Route path="/home" element={<Home />} />  {/* Route for the home page */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
