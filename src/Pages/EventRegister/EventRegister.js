import React from "react";
import Navigationbar from "../../Components/Navbar";
import HomeHeroImage from "../../images/image 6.png";
import useMatchMedia from "../../Components/UseWindowSize";
import ParticipantTable from "../../Components/ParticipentTable";
import BankAccountInformation from "../../Components/BankAccountInformation";
import { Button } from "@mui/material";
import GoogleLoginButton from "../../Components/GoogleLoginButton";
import { useState } from "react";
import RegisterForm from "../../Components/RegisterForm";

function EventRegister() {
  const homeImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    zIndex: 1,
  };
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const isDesktopResolution = useMatchMedia("(min-width : 1300px)", true);
  const isDesktopResolution2 = useMatchMedia("(min-width : 1025px)", true);
  const isDesktopResolution3 = useMatchMedia("(min-width : 992px)", true);

  return (
    <div>
      <div>
        <Navigationbar />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "90vh",
          // backgroundColor: "white",
          // opacity: "50%",
          // zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "2rem",
            bottom: isDesktopResolution3 ? "30%" : "40%",
            zIndex: 3,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: isDesktopResolution3 ? "4rem" : "3em",
              fontWeight: "bold",
            }}
          >
            Registration
          </div>
        </div>

        <img src={HomeHeroImage} alt="magazineImage" style={homeImageStyle} />
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: isDesktopResolution3 ? "4rem" : "2em",
        }}
      >
        <div>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Sign-</span>IN
          </div>
          {user === null ? (
            <GoogleLoginButton
              user={user}
              setUser={setUser}
              profile={profile}
              setProfile={setProfile}
            />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
}

export default EventRegister;
