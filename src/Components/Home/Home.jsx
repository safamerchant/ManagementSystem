import React, { useState } from "react";
import Avatar from "react-avatar";
import GaugeChart from "react-gauge-chart"; // Import GaugeChart component
import { FaHome, FaTasks, FaComments, FaChartLine, FaSearch } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import Calendar from "react-calendar"; // Import the calendar component
import "react-calendar/dist/Calendar.css"; // Calendar styles
import "./Home.css"; // Custom CSS

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to manage sidebar visibility

  // Function to handle the search click
  const handleSearchClick = () => {
    alert(`Searching for: ${searchTerm}`); // Replace with your search logic
  };

  const tasks = [
    { id: 1, name: "Game COO", progress: 30 }, // 30% done
    { id: 2, name: "Delivery App", progress: 88 }, // 88% done
  ];

  const [date, setDate] = useState(new Date()); // State for calendar date
  const [taskList, setTasks] = useState([
    { id: 1, task: "Complete project documentation", completed: false },
    { id: 2, task: "Prepare for presentation", completed: false },
    { id: 3, task: "Fix bugs in the delivery app", completed: false },
  ]); // Dummy data for to-do list

  // Dummy data for charts
  const taskProgressData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const taskTimelineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Tasks",
        data: [5, 10, 3, 8],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const collaborators = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "Dana", email: "dana@example.com" },
  ];

  // Handle checkbox toggle for tasks
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      taskList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <div className="home-container">
      {/* Left Sidebar */}
      <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-logo">My App</div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarCollapsed ? "☰" : "×"} {/* Toggle icon */}
        </button>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#home" className="sidebar-link">
              <FaHome className="sidebar-icon" /> <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#topics" className="sidebar-link">
              <FaChartLine className="sidebar-icon" /> <span>Topics</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#tasks" className="sidebar-link">
              <FaTasks className="sidebar-icon" /> <span>My Tasks</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#messages" className="sidebar-link">
              <FaComments className="sidebar-icon" /> <span>Messages</span>
            </a>
          </li>
        </ul>
      </aside>


      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar with Avatar */}
        <div className="top-bar">
        <div className="search-container"> {/* New container for search input and icon */}
            <FaSearch className="search-icon" /> {/* Icon on the left */}
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
           <div className="user-info">
            <Avatar name="Alice" round={true} size="40" />
            <span className="user-name">Alice / BackEnd Developer </span>
          </div>
        </div>

        {/* Content Below Navbar */}
        <div className="content">
          <div className="grid-container"> {/* Grid container for layout */}
            <div className="tasks-section white-section">
              <h3>Today's Tasks</h3>
              <div className="tasks-list">
                {tasks.map((task) => (
                  <div className="task-item" key={task.id}>
                    <h4>{task.name}</h4>
                    <p>For this indie game, we will be giving it a adventerous vibe to make the plqayer feel at ease..</p>
                    <p>
                      Collaborators:
                      {collaborators.map((collab, index) => (
                        <Avatar
                          key={index}
                          name={collab.name}
                          email={collab.email}
                          round={true}
                          size="20"
                          style={{ margin: "0 2px" }}
                        />
                      ))}
                    </p>
                    {/* Render the gauge chart */}
                    <GaugeChart
                      id={`gauge-chart-${task.id}`}
                      nrOfLevels={30}
                      percent={task.progress / 100}
                      colors={['#FF6347', '#FFCE56', '#28a745']}
                      arcWidth={0.3}
                      style={{ width: '200px', height: '100px', margin: '10px 0' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="calendar white-section">
              <h4>Calendar</h4>
              <Calendar value={date} onChange={setDate} /> {/* Calendar component */}
            </div>
            
            <div className="todo-list white-section">
              <h4>To-do List</h4>
              <ul>
                {taskList.map((task) => (
                  <li key={task.id}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                      {task.task}
                    </span>
                  </li>
                ))}
              </ul>
              
            </div>
            
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
