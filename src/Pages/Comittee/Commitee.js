import React from "react";
import Navigationbar from "../../Components/Navbar";
import HomeHeroImage from "../../images/image 5.png";
import useMatchMedia from "../../Components/UseWindowSize";
import CardComponent from "../../Components/CardComponent";
import Padhya from "../../images/Faculty/Ellipse 1.png";
import Deepak from "../../images/Faculty/Ellipse 2.png";
import Divesh from "../../images/Faculty/Ellipse 3.png";
import Shridev from "../../images/Faculty/Ellipse 4.png";
import Monika from "../../images/Faculty/Ellipse 3-1.png";
import Reeta from "../../images/Faculty/Ellipse 4-1.png";
import Ritika from "../../images/Faculty/Ellipse 5.png";
import Shweta from "../../images/Faculty/Ellipse 6.png";
import Akansha from "../../images/Faculty/Ellipse 7.png";

import Arpana from "../../images/Faculty/Prof Arpna Kar.jpg";
import Felix from "../../images/Faculty/Prof Felix Chan.jpg";
import PLMeena from "../../images/Faculty/Prof PL Meena.jpg";
import Qureshi from "../../images/Faculty/Prof Qureshi.jpg";
import Rahman from "../../images/Faculty/Prof Rahman.jpg";
import Sanjeev from "../../images/Faculty/Prof Sanjeev Parasar.jpg";
import Mnai from "../../images/Faculty/Prof. Mnai Venkatesh.jpg";
import Spais from "../../images/Faculty/Spais.jpg";

function Commitee() {
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
            Committee
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
            <span style={{ color: "blue" }}>Conference </span>
            Committee
          </div>
          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
              display: "flex",
              justifyContent: "space-around",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <CardComponent
              imageUrl={Padhya}
              name={"Prof. N. P. Padhy"}
              designation={"Conference Patron"}
              work={"Director, MNIT Jaipur"}
            />
            <CardComponent
              imageUrl={Deepak}
              name={"Dr. Deepak Verma"}
              designation={"Conference Chair"}
              work={"Head, DMS MNIT Jaipur"}
            />
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
            Conference Organizing Secretaries
          </div>
          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
              display: "flex",
              justifyContent: "space-around",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <CardComponent
              imageUrl={Divesh}
              name={"Dr. Divesh Kumar"}
              //   designation={"Conference Patron"}
              work={"Assistant Professor DMS"}
            />
            <CardComponent
              imageUrl={Shridev}
              name={"Dr. Shridev"}
              //   designation={"Conference Chair"}
              work={"Assistant Professor, DMS"}
            />
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
            Conference Committee Members
          </div>
          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Monika}
                  name={"Dr. Monica Sharma"}
                  designation={""}
                  work={"Associate Professor DMS"}
                />
                <CardComponent
                  imageUrl={Reeta}
                  name={"Dr. Reeta Singh"}
                  //   designation={"Conference Chair"}
                  work={"Assistant Professor, DMS"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Ritika}
                  name={"Dr. Ritika Mahajan"}
                  //   designation={"Conference Chair"}
                  work={"Assistant Professor, DMS"}
                />
                <CardComponent
                  imageUrl={Shweta}
                  name={"Dr. Shweta Sharma"}
                  //   designation={"Conference Chair"}
                  work={"Assistant Professor, DMS"}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Akansha}
                  name={"Dr. Aakanksha Kataria"}
                  //   designation={"Conference Chair"}
                  work={"Assistant Professor, DMS"}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
            International Advisory Committee
          </div>
          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Rahman}
                  name={"Prof. Zillur Rahman"}
                  designation={""}
                  work={"Department of Management Studies, IIT Roorkee India "}
                />
                <CardComponent
                  imageUrl={Spais}
                  name={"Prof. George S. Space"}
                  //   designation={"Conference Chair"}
                  work={"Hellenic Open University Greece"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Sanjeev}
                  name={"Prof. Sanjeev Parashar"}
                  //   designation={"Conference Chair"}
                  work={"Indian Institute of Management Raipur, India"}
                />
                <CardComponent
                  imageUrl={Felix}
                  name={"Prof. Felix T. S. Ching chong chini"}
                  //   designation={"Conference Chair"}
                  work={
                    "Macau University of Science and Technology,Macau,China (Vadapav yaha nhi milta)"
                  }
                />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Mnai}
                  name={"Prof. Venkatesh Mani"}
                  //   designation={"Conference Chair"}
                  work={"Montpellier Business School, France "}
                />
                <CardComponent
                  imageUrl={PLMeena}
                  name={"Prof. Purshottam Meena"}
                  //   designation={"Conference Chair"}
                  work={"College of Charleston, USA"}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CardComponent
                  imageUrl={Qureshi}
                  name={"Prof. M. N. Qureshi"}
                  designation={""}
                  work={"King Khalid University, Saudi Arabia"}
                />
                <CardComponent
                  imageUrl={Arpana}
                  name={"Prof Arpan Kumar Kar"}
                  //   designation={"Conference Chair"}
                  work={"Indian Institute of Technology Delhi, India"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commitee;
