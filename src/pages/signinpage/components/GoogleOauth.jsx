import React, { useEffect } from "react";

import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";

function GoogleOauth({ user, setUser, profiler, setProfiler }) {
  console.log(user);

  const login = useGoogleLogin({
    onSuccess: (userData) => setUser(userData),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    console.log(user);
    if (user?.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.clientId}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfiler(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <h4 className="flex border gap-3 justify-center items-center border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
      <img
        src="https://www.cdnlogo.com/logos/g/35/google-icon.svg"
        className="w-5"
        alt="img"
      />

      <button onClick={() => login()}>Sign in via google </button>
    </h4>
  );
}

export default GoogleOauth;
