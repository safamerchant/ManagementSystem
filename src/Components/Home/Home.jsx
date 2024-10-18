import React, { useState } from "react";
import Avatar from "react-avatar";
import GaugeChart from "react-gauge-chart"; // Import GaugeChart component
import { Doughnut, Bar } from "react-chartjs-2";
import Calendar from "react-calendar"; // Import the calendar component
import "react-calendar/dist/Calendar.css"; // Calendar styles
import "./Home.css"; // Custom CSS
import Sidebar from "../Sidebar/Sidebar.jsx"; // Import Sidebar component

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(new Date()); // State for calendar date
  const [taskList, setTasks] = useState([
    { id: 1, task: "Complete project documentation", completed: false },
    { id: 2, task: "Prepare for presentation", completed: false },
    { id: 3, task: "Fix bugs in the delivery app", completed: false },
  ]); // Dummy data for to-do list

  const tasks = [
    { id: 1, name: "Game COO", progress: 30 }, // 30% done
    { id: 2, name: "Delivery App", progress: 88 }, // 88% done
  ];

  // Handle checkbox toggle for tasks
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      taskList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const collaborators = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "Dana", email: "dana@example.com" },
  ];

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar with Avatar */}
        <div className="top-bar">
          <div className="search-container">
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
          <div className="grid-container">
            <div className="tasks-section white-section">
              <h3>Today's Tasks</h3>
              <div className="tasks-list">
                {tasks.map((task) => (
                  <div className="task-item" key={task.id}>
                    <h4>{task.name}</h4>
                    <p>
                      For this indie game, we will be giving it an adventurous
                      vibe to make the player feel at ease.
                    </p>
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
                    <GaugeChart
                      id={`gauge-chart-${task.id}`}
                      nrOfLevels={30}
                      percent={task.progress / 100}
                      colors={["#FF6347", "#FFCE56", "#28a745"]}
                      arcWidth={0.3}
                      style={{
                        width: "200px",
                        height: "100px",
                        margin: "10px 0",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="calendar white-section">
              <h4>Calendar</h4>
              <Calendar value={date} onChange={setDate} />
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
                    <span
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
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
