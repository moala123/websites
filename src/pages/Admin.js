import React, { useState } from 'react';

function Admin() {
  const [activeTab, setActiveTab] = useState('talents');

  // Sample data (replace with real data later)
  const talents = [
    { id: 1, title: "Amazing Guitar Solo", author: "John Doe", status: "pending" },
    { id: 2, title: "Digital Art Portfolio", author: "Jane Smith", status: "approved" }
  ];

  const users = [
    { id: 1, name: "John Doe", role: "user", status: "active" },
    { id: 2, name: "Jane Smith", role: "user", status: "active" }
  ];

  const stats = {
    totalTalents: 25,
    totalUsers: 50,
    totalVisits: 1000,
    mostViewed: ["Amazing Guitar Solo", "Street Photography", "Modern Dance"]
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, Moala Ibrahim</p>
      </div>

      <div className="admin-nav">
        <button 
          className={`admin-nav-btn ${activeTab === 'talents' ? 'active' : ''}`}
          onClick={() => setActiveTab('talents')}
        >
          Talent Management
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Statistics
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'talents' && (
          <div className="talents-management">
            <h2>Talent Management</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {talents.map(talent => (
                  <tr key={talent.id}>
                    <td>{talent.title}</td>
                    <td>{talent.author}</td>
                    <td>{talent.status}</td>
                    <td>
                      <button className="admin-btn approve">Approve</button>
                      <button className="admin-btn edit">Edit</button>
                      <button className="admin-btn delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="users-management">
            <h2>User Management</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                      <button className="admin-btn">Change Role</button>
                      <button className="admin-btn ban">Ban</button>
                      <button className="admin-btn delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="statistics">
            <h2>Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Talents</h3>
                <p>{stats.totalTalents}</p>
              </div>
              <div className="stat-card">
                <h3>Total Users</h3>
                <p>{stats.totalUsers}</p>
              </div>
              <div className="stat-card">
                <h3>Total Visits</h3>
                <p>{stats.totalVisits}</p>
              </div>
              <div className="stat-card">
                <h3>Most Viewed Talents</h3>
                <ul>
                  {stats.mostViewed.map((talent, index) => (
                    <li key={index}>{talent}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings">
            <h2>General Settings</h2>
            <form className="settings-form">
              <div className="form-group">
                <label>Website Logo</label>
                <input type="file" accept="image/*" />
              </div>
              <div className="form-group">
                <label>Primary Color</label>
                <input type="color" defaultValue="#007bff" />
              </div>
              <div className="form-group">
                <label>Contact Email</label>
                <input type="email" placeholder="admin@example.com" />
              </div>
              <div className="form-group">
                <label>About Text</label>
                <textarea rows="4" placeholder="About your website..."></textarea>
              </div>
              <button type="submit" className="admin-btn save">Save Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;