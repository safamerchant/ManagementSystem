import React, { useState } from "react";
import { FaHome, FaTasks, FaComments, FaChartLine } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2"; // Correctly import both Bar and Pie
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js"; // Import necessary elements for charts
import "./Analytics.css"; // Ensure that you have the necessary CSS for sidebar styling
import Sidebar from "../Sidebar/Sidebar.jsx";
// Register the required elements for both Bar and Pie charts
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Home = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to manage sidebar visibility

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };
  

  // Dummy tasks for Backlog
  const b_tasks = [
    "Complete project documentation",
    "Team meeting preparation",
    "Code review for new features",
    "Fix bugs in the system",
    "Update project management tools",
  ];

  // Dummy data for task performance report
  const performanceData = [
    { employeeName: "Sam", completedTasks: 4, totalTasks: 5 },
    { employeeName: "Linda", completedTasks: 3, totalTasks: 4 },
    { employeeName: "Mari", completedTasks: 2, totalTasks: 3 },
    { employeeName: "Hawke", completedTasks: 5, totalTasks: 5 },
    { employeeName: "Alice", completedTasks: 3, totalTasks: 6 },
    { employeeName: "Bob", completedTasks: 1, totalTasks: 2 },
  ];
  const getLowestPerformer = () => {
    // Calculate efficiency based on completedTasks / totalTasks and find the lowest
    let lowestPerformer = performanceData.reduce((prev, current) => {
      const prevEfficiency = prev.completedTasks / prev.totalTasks;
      const currentEfficiency = current.completedTasks / current.totalTasks;
      return prevEfficiency < currentEfficiency ? prev : current;
    });
  
    return lowestPerformer;
  };

  const [isReportVisible, setIsReportVisible] = useState(false);

  // Function to toggle report visibility
  const toggleReportVisibility = () => {
    setIsReportVisible((prevState) => !prevState);
  };

  // Dummy data for users
  const dummyUsers = [
    { id: 1, name: "Alice", status: "Pending" },
    { id: 2, name: "Bob", status: "Active" },
    { id: 3, name: "Charlie", status: "Suspended" },
    { id: 4, name: "David", status: "Active" },
    { id: 5, name: "Eve", status: "Pending" },
  ];

  // State to manage the expansion of the "Manage Users" section and user data
  const [isExpanded, setIsExpanded] = useState(false);
  const [users, setUsers] = useState(dummyUsers);

  // Toggle function to expand/collapse the "Manage Users" section
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  // Function to change user status
  const updateUserStatus = (id, status) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status } : user
    );
    setUsers(updatedUsers);
  };

  // Function to delete a user
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Dummy data for task timeline chart
  const taskTimelineData = {
    labels: ["Project A", "Project B", "Project C", "Project D"], // Project names
    datasets: [
      {
        label: "Deadline (Days Left)",
        data: [10, 15, 5, 7], // Deadlines for each project
        backgroundColor: "rgba(255, 205, 86, 0.6)", // Yellow color
      },
      {
        label: "Assumed Completion (Days)",
        data: [8, 13, 6, 5], // Assumed completion for each project
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Blue color
      },
    ],
  };

  const [tasks, setTasks] = useState([
    { taskName: "Team meeting preparation", employeeName: "Sam" },
    { taskName: "Fix bugs", employeeName: "Linda" },
    { taskName: "Code review", employeeName: "Mari" },
    { taskName: "Budgeting", employeeName: "Hawke" },
    { taskName: "Client Meeting", employeeName: "Alice" },
    { taskName: "Complete project documentation", employeeName: "Bob" },
  ]);

  const [taskName, setTaskName] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  // Data for pie chart
  const pieChartData = {
    labels: tasks.map((task) => task.employeeName),
    datasets: [
      {
        data: tasks.map(() => 1), // Equal task distribution
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF3F40",
          "#4EC0C0",
          "#FA6384",
          "#5D2244",
        ],
      },
    ],
  };

  // Pie chart options to show task name on hover
  const pieChartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            // Show the task name instead of the count
            const task = tasks[context.dataIndex]; // Get the task from the dataIndex
            return `${task.taskName} (Assigned to: ${task.employeeName})`;
          },
        },
      },
    },
    responsive: true,
  };

  // Function to add a new task
  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { taskName, employeeName }]);
    setTaskName("");
    setEmployeeName("");
  };

  return (

    <div className="home-container">
      {/* Left Sidebar */}
      <Sidebar/>

      {/* Blank Main Content for Customization */}
      <main className="main-content">
  {/* Backlog Card */}
  <div className="backlog-card">
    <h2 className="backlog-title">Backlog</h2>
    <ul className="task-list">
      {b_tasks.map((task, index) => (
        <li key={index} className="task-item">
          {task}
        </li>
      ))}
    </ul>
  </div>

  

  {/* Task Timeline Chart Card */}
  <div className="task-timeline-card">
    <h2 className="timeline-title">Task Timeline</h2>
    <div className="chart-container">
      <Bar
        data={taskTimelineData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Days Left',
              },
            },
          },
        }}
      />
    </div>
  </div>

  {/* Task Distribution Pie Chart Card */}
  <div className="task-pie-chart-card">
    <h2 className="timeline-title">Task Distribution</h2>
    <div className="chart-container">
      <Pie data={pieChartData} options={pieChartOptions} />
    </div>

    {/* Add Task Form */}
    <div className="add-task-form">
      <h3>Add New Task</h3>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    </div>
  </div>
  {/* Task Performance Report Card */}
  <div className="task-performance-report-card">
    <button onClick={toggleReportVisibility} className="toggle-report-button">
      {isReportVisible ? "-" : "+"} Workload Metrics
    </button>
    {isReportVisible && (
      <div className="performance-report-content">
        <h3>Task Completion Efficiency</h3>
        <ul>
          {performanceData.map((member, index) => (
            <li key={index}>
              {member.employeeName}: {member.completedTasks}/{member.totalTasks} tasks completed
            </li>
          ))}
        </ul>
        {/* Display the lowest performer */}
        <div className="training-suggestion">
          {/* Get the employee with the lowest score */}
          {(() => {
            const lowestPerformer = getLowestPerformer();
            return (
              <p>
                Employee <strong>{lowestPerformer.employeeName}</strong> needs training.
              </p>
            );
          })()}
        </div>
      </div>
    )}
  </div>

  <div className="manage-users-section">
      <button className="expand-btn" onClick={toggleExpanded}>
        {isExpanded ? "-" : "+"} Manage Users
      </button>

      {isExpanded && (
        <div className="manage-users-content">
          <h3>User Accounts</h3>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                  <td>
                    {user.status === "Pending" && (
                      <button
                        onClick={() => updateUserStatus(user.id, "Active")}
                      >
                        Approve
                      </button>
                    )}
                    {user.status === "Active" && (
                      <button
                        onClick={() => updateUserStatus(user.id, "Suspended")}
                      >
                        Suspend
                      </button>
                    )}
                    {user.status === "Suspended" && (
                      <button
                        onClick={() => updateUserStatus(user.id, "Active")}
                      >
                        Reactivate
                      </button>
                    )}
                    <button
                      className="delete-btn"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
</main>

    </div>
  );
};

export default Home;
