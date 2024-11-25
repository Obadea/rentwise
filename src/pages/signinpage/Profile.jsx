import React from "react";

// This is for testing the google Oauth and Facebook Oauth Login
function Profile({ profile, logOut }) {
  return (
    <div>
      <img src={profile.picture} alt="user" />
      <h3>User Logged in</h3>
      <p>Name: {profile.name}</p>
      <p>Email Address: {profile.email}</p>
      <br />
      <br />
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Profile;
