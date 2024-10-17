import React, { useState } from 'react';
import { FaUser, FaHeartbeat, FaCalendar, FaUsers, FaCog, FaGift } from 'react-icons/fa'; // Icons

const ProfilePage = ({ user }) => {
  const [activeTab, setActiveTab] = useState('Basic Info');

  const renderContent = () => {
    switch (activeTab) {
      case 'Basic Info':
        return (
          <div className="profile-content">
            <h2>Basic Info</h2>
            <ul className="profile-info-list">
              <li>
                <span>Name</span>
                <span>John Doe</span>
                <a href="#">Edit</a>
              </li>
              <li>
                <span>Age</span>
                <span>75</span>
                <a href="#">Edit</a>
              </li>
              <li>
                <span>Emergency Contact</span>
                <span>Jane Doe (Daughter)</span>
                <a href="#">Edit</a>
              </li>
              <li>
                <span>Medical Conditions</span>
                <span>Hypertension, Arthritis</span>
                <a href="#">Edit</a>
              </li>
              <li>
                <span>Medications</span>
                <span>Lisinopril, Metformin</span>
                <a href="#">Edit</a>
              </li>
            </ul>
          </div>
        );
      case 'Points':
        return (
          <div className="profile-content">
            <h2>Care Points</h2>
            <ul>
              <li>
                <span>Total Points</span>
                <span>1250</span>
              </li>
              <li>
                <span>This Month</span>
                <span>250</span>
              </li>
              <li>
                <span>Redeemable Points</span>
                <span>1000</span>
                <a href="#">Redeem</a>
              </li>
            </ul>
            <h3>Recent Activities</h3>
            <ul>
              <li>
                <span>Daily Exercise</span>
                <span>+10 points</span>
              </li>
              <li>
                <span>Medication Adherence</span>
                <span>+20 points</span>
              </li>
              <li>
                <span>Social Activity</span>
                <span>+15 points</span>
              </li>
            </ul>
            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}>
                80% to next reward
              </div>
            </div>
          </div>
        );
      case 'Care Schedule':
        return (
          <div className="profile-content">
            <h2>Care Schedule</h2>
            {/* Integrate a Calendar component here */}
            <p>Show upcoming appointments and care tasks here.</p>
          </div>
        );
      case 'Health Metrics':
        return (
          <div className="profile-content">
            <h2>Health Metrics</h2>
            {/* Include data visualization, charts, etc. */}
            <p>Display health metrics such as blood pressure, heart rate, etc.</p>
          </div>
        );
      case 'Support Network':
        return (
          <div className="profile-content">
            <h2>Support Network</h2>
            {/* List of emergency contacts and family members */}
            <p>Show emergency contacts, doctors, family members here.</p>
          </div>
        );
      case 'Preferences':
        return (
          <div className="profile-content">
            <h2>Preferences</h2>
            <p>Customize your notification and care preferences.</p>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-username">John Doe</h1>
      </div>
      <div className="profile-body">
        <div className="profile-sidebar">
          <ul>
            {[
              { label: 'Basic Info', icon: <FaUser /> },
              { label: 'Points', icon: <FaGift /> },
              { label: 'Care Schedule', icon: <FaCalendar /> },
              { label: 'Health Metrics', icon: <FaHeartbeat /> },
              { label: 'Support Network', icon: <FaUsers /> },
              { label: 'Preferences', icon: <FaCog /> }
            ].map((tab) => (
              <li
                key={tab.label}
                className={activeTab === tab.label ? 'active' : ''}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.icon} {tab.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-content-area">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
