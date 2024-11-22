import React from "react";

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
