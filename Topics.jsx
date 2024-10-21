import React, { useState } from 'react';
import { FaHome, FaTasks, FaComments, FaChartLine, FaPlus, FaThumbsUp, FaSearch } from 'react-icons/fa';
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = () => {
  const [topics, setTopics] = useState([]); // List of topics
  const [newTopicTitle, setNewTopicTitle] = useState(''); // Title of the new topic
  const [newTopicContent, setNewTopicContent] = useState(''); // Content of the new topic
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false); // Toggle for Add Topic form
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Manage sidebar visibility
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  // Add new properties for tracking likes and comments
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});

  // Toggle the form to create a new topic
  const toggleAddTopic = () => {
    setIsAddTopicOpen(!isAddTopicOpen);
  };

  // Add a new topic
  const handleAddTopic = () => {
    if (newTopicTitle && newTopicContent) {
      const newTopic = { title: newTopicTitle, content: newTopicContent, id: Date.now() };
      setTopics([...topics, newTopic]);
      setNewTopicTitle(''); // Clear the input fields
      setNewTopicContent('');
      setIsAddTopicOpen(false); // Close the form

      // Initialize likes and comments for the new topic
      setLikes({ ...likes, [newTopic.id]: 0 });
      setComments({ ...comments, [newTopic.id]: [] });
    }
  };

  // Handle liking a topic
  const handleLike = (topicId) => {
    setLikes((prevLikes) => ({ ...prevLikes, [topicId]: prevLikes[topicId] + 1 }));
  };

  // Handle adding a comment to a topic
  const handleAddComment = (topicId, commentText) => {
    if (commentText) {
      setComments((prevComments) => ({
        ...prevComments,
        [topicId]: [...prevComments[topicId], commentText]
      }));
    }
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-logo">My App</div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarCollapsed ? '☰' : '×'} {/* Toggle icon */}
        </button>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <Link to="/home" className="sidebar-link">
              <FaHome className="sidebar-icon" /> <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/topics" className="sidebar-link">
              <FaChartLine className="sidebar-icon" /> <span>Topics</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/tasks" className="sidebar-link">
              <FaTasks className="sidebar-icon" /> <span>My Tasks</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/messages" className="sidebar-link">
              <FaComments className="sidebar-icon" /> <span>Messages</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar with Avatar */}
        <div className="top-bar">
          <div className="search-container"> {/* Search bar */}
            <FaSearch className="search-icon" />
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
            <span className="user-name">Alice / Backend Developer</span>
          </div>
        </div>

        {/* Content Below Navbar */}
        <h1>Blog Topics</h1>

        {/* Topics Display */}
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={topic.id} className="topic-card">
              <h2>{topic.title}</h2>
              <p>{topic.content}</p>

              {/* Like and Comment Buttons */}
              <div className="actions">
                <button onClick={() => handleLike(topic.id)}>
                  <FaThumbsUp /> {likes[topic.id] || 0} Likes
                </button>
                <button>
                  <FaComments /> {comments[topic.id]?.length || 0} Comments
                </button>
              </div>

              {/* Comment Section displayed when hovering */}
              <div className="comment-section">
                <h4>Comments</h4>
                {comments[topic.id]?.map((comment, idx) => (
                  <p key={idx}><strong>Comment {idx + 1}:</strong> {comment}</p>
                ))}
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAddComment(topic.id, e.target.value);
                        e.target.value = ''; // Clear the input
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Topic Form */}
        {isAddTopicOpen && (
          <div className="add-topic-form">
            <input
              type="text"
              placeholder="Topic Title"
              value={newTopicTitle}
              onChange={(e) => setNewTopicTitle(e.target.value)}
            />
            <textarea
              placeholder="Write something about the topic..."
              value={newTopicContent}
              onChange={(e) => setNewTopicContent(e.target.value)}
            ></textarea>
            <button onClick={handleAddTopic}>Add Topic</button>
          </div>
        )}

        {/* Floating Add Topic Button */}
        <button className="floating-button" onClick={toggleAddTopic}>
          <FaPlus />
        </button>
      </main>
    </div>
  );
};

export default Topics;
