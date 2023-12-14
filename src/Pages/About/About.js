import React from "react";
import Navigationbar from "../../Components/Navbar";
import HomeHeroImage from "../../images/image 3.png";
import useMatchMedia from "../../Components/UseWindowSize";

function About() {
  const homeImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "fill",
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
            About
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
            <span style={{ color: "blue" }}>MNIT</span> Jaipur
          </div>

          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            Malaviya National Institute of Technology Jaipur (MNIT) Jaipur, one
            of India's 31 National Institutes of Technology, was created as a
            Centre of Excellence for higher training, research, and development
            in science, engineering, and technology. Established as Malaviya
            Regional Engineering College (MREC) Jaipur in 1963 jointly by the
            Government of India and the Government of Rajasthan, the Institute
            was upgraded to Malaviya National Institute of Technology (MNIT)
            Jaipur in 2002 by the Government of India and was accorded the
            status of a deemed university. MNIT Jaipur was subsequently declared
            as an Institute of National Importance under the National Institutes
            of Technology Act, 2007, by the Parliament of India. MNIT Jaipur is
            now an autonomous institute, fully funded by the Ministry of
            Education, Government of India. The Institute offers nine (09)
            undergraduate programs and twenty-four (24) postgraduate and
            doctoral programs in science, technology, humanities, and
            management.
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>DMS,</span> MNIT Jaipur
          </div>

          <div style={{ fontSize: "1rem", marginTop: "1rem" }}>
            The Department of Management Studies at MNIT Jaipur was established
            in 1996 as the Centre of Management Studies and Industrial
            Collaboration. It was later elevated to a full-fledged academic
            department in 2013. Since then, DMS has played a seminal role in the
            growth of the corporate sector and management education in India.
            DMS grooms future business leaders by following a judicious blend of
            theory and practice, using highly innovative teaching pedagogy, and
            is proud that its alums occupy high positions in business echelons.
            DMS currently offers a regular two-year full-time postgraduate
            degree in management (MBA) and a rigorous doctoral program (PhD in
            Management) focused on research in business and managerial issues
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Jaipur </span>
          </div>

          <div style={{ marginTop: "1rem" }}>
            The capital city of vibrant Rajasthan, Jaipur, was the stronghold of
            a clan of rulers whose three hill forts and series of palaces in the
            city are important attractions. Known as the Pink City because of
            the color of the stone used exclusively in the walled city. Apart
            from being the epicentre of the vibrant and colorful Rajasthani
            culture, Jaipur's bazaars' major attractions are embroidered leather
            shoes, blue pottery, tie-dye scarves, and various other exotic
            wares. Major tourist attractions include Jantar Mantar, Amber Fort,
            Moti Doongri, Lakshmi Narayan Temple, City Palace, Albert Hall
            (Museum), Hawa Mahal, Jaigarh Fort, Sisodia Rani Garden and many
            more
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
