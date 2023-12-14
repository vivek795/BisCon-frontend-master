import React from "react";
import Navigationbar from "../../Components/Navbar";
import HomeHeroImage from "../../images/image 6.png";
import useMatchMedia from "../../Components/UseWindowSize";
import ParticipantTable from "../../Components/ParticipentTable";
import BankAccountInformation from "../../Components/BankAccountInformation";
import { Button } from "@mui/material";

function Register() {
  const homeImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    zIndex: 1,
  };

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
            <span style={{ color: "blue" }}>TIME</span> AND VENUE
          </div>

          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            The BIS-CON 2024 will be conducted during March 15-16, 2024, at the
            Department of Management Studies, MNIT Jaipur [Rajasthan, INDIA]
          </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>REGISTRATION</span> FEES
          </div>

          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            Registration fee (inclusive of 18% GST) is payable only ONLINE
            through NEFT/IMPS/RTGS by Indian participants or through SWIFT by
            international participants. Registration fee includes participation
            in all the tracks, registration in the conference workshop on how to
            publish, tea (morning and afternoon) and lunch on both conference
            days, a copy of the group photograph of all participants, and a
            presentation/participation certificate.
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>PARTICIPANT </span> TABLE
          </div>

          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            <ParticipantTable />

            <div
              style={{
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
                fontSize: "1.3rem",
                fontWeight: "600",
              }}
            >
              The bank details for online payment of the registration fees are
              as under:
            </div>

            <BankAccountInformation />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Button
              variant="contained"
              style={{ color: "#fff", marginRight: "1rem" }}
              href={"./eventRegister"}
            >
              Register
            </Button>
            <Button variant="contained" style={{ color: "#fff" }}>
              Fee Payment
            </Button>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              <span style={{ color: "blue" }}>ACCOMODATIONS:</span>
            </div>

            <div
              style={{
                fontSize: "1rem",
                marginTop: "1rem",
                lineHeight: "1.5rem",
              }}
            >
              Limited accommodation on twin sharing basis is available in the
              Institute Guest House for outstation candidates on a payment
              basis. Participants are requested to contact in advance if
              interested in on-campus accommodation.
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              <span style={{ color: "blue" }}>TRAVEL:</span>
            </div>

            <div
              style={{
                fontSize: "1rem",
                marginTop: "1rem",
                lineHeight: "1.5rem",
              }}
            >
              Jaipur is well connected to all main cities in India by road,
              railways, and air services. MNIT Jaipur is situated on Jawahar Lal
              Nehru (JLN) Marg, about 10km from Jaipur's Central railway station
              and the Main bus stand (Sindhi Camp). Jaipur International Airport
              is about 4km away from the Institute. For details regarding how to
              reach MNIT Jaipur, please visit
              http://www.mnit.ac.in/contact_us/howtoreach.php.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
