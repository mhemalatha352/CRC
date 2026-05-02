import React from "react";

function Profile() {
  return (
    <div className="container">
      <h2>User Profile</h2>

      <div className="card">
        <p>Name: Demo User</p>
        <p>Skills: React, JavaScript</p>
        <p>AI Suggestion: Improve DSA for better placement</p>
      </div>

      <button className="button">
        🎤 Voice Assist (Coming Soon)
      </button>
    </div>
  );
}

export default Profile;