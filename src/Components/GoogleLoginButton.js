import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@mui/material";

function GoogleLoginButton({ user, setUser, profile, setProfile }) {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <br></br>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <p>Google ID: {profile.id}</p>
          <br />
          <br />
          <Button
            variant="contained"
            style={{ color: "#fff", marginRight: "1rem" }}
            onClick={logOut}
          >
            Log out
          </Button>
        </div>
      ) : (
        <Button
          variant="contained"
          style={{ color: "#fff", marginRight: "1rem" }}
          onClick={() => login()}
        >
          Sign in with Google 🚀{" "}
        </Button>
      )}
    </div>
  );
}
export default GoogleLoginButton;
