import React from "react";
import Navigationbar from "../../Components/Navbar";
import HomeHeroImage from "../../images/image 4.png";
import useMatchMedia from "../../Components/UseWindowSize";
function CallForPapers() {
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
            Call for Papers
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
          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            Interested researchers can submit their original (un-published)
            research proposals/ research papers falling under the following two
            broad categories
            <ol>
              <li>
                <b>Doctoral Research Proposals:</b> This category is open to
                research scholars who are currently pursuing or have completed
                their PhD course-work and are in the research proposal
                development for their PhD. The aim is to invite budding research
                scholars to present their research problems and get feedback
                from peers and experts.
              </li>
              <li>
                <b>Research Paper Category:</b> This category is open to all
                researchers who wish to present their research work (conceptual/
                literature review/ empirical studies/ case- studies). The aim is
                to share the research ideas with a diverse set of professionals.
              </li>
            </ol>
            The submitted papers/ research proposals to the conference will be
            included in one of the following conference tracks:
            <ul style={{ fontSize: "1rem", marginTop: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                General Management & Strategy
              </li>
              <li style={{ marginBottom: "0.4rem" }}>Finance & Accounting</li>
              <li style={{ marginBottom: "0.4rem" }}>Marketing</li>
              <li style={{ marginBottom: "0.4rem" }}>Operations Management</li>
              <li style={{ marginBottom: "0.4rem" }}>Role of Technology</li>
              <li style={{ marginBottom: "0.4rem" }}>HR & OB</li>
              <li style={{ marginBottom: "0.4rem" }}>
                Cases in Business Management
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Doctoral Research Proposal (special track)
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Guidelines </span>
            for Paper Submission
          </div>

          <ul>
            <li>All submissions should be made in PDF format</li>
            <li>
              All submissions should be in English only on A4 size paper using
              Times New Roman font, font size 11, and typed in double-line space
              with 1.25 cm of margins on each side
            </li>
            <li>
              All submissions should accompany a cover page that includes the
              title of the paper, abstract (not more than 200 words), author
              names, and affiliations with full postal address, email, and
              mobile number
            </li>
            <li>
              For details regarding manuscript preparation and references,
              please visit following link:{" "}
              <a href="https://drive.google.com/file/d/1EUyMkps4ps3VjONOmT0BuBsFq_x-SCIr/view?usp=sharing">
                References
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers;
