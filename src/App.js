// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home"; // Adjust the path as needed
import Register from "./Components/Login/Register";
import ToDo from "./Components/ToDo/ToDo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<ToDo />} />
          {/* <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analystics />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
