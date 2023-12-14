import React from "react";
import Navigationbar from "../../Components/Navbar";
import HomeHeroImage from "../../images/image_1.png";
import useMatchMedia from "../../Components/UseWindowSize";
function Home() {
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
              fontSize: isDesktopResolution3 ? "2rem" : "1.5rem",
            }}
          >
            First International Conference on
          </div>
          <div
            style={{
              color: "white",
              fontSize: isDesktopResolution3 ? "3rem" : "2em",
              fontWeight: "semi-bold",
            }}
          >
            Business, Innovation & Sustainability
          </div>
          <div
            style={{
              color: "#FFB511",
              fontSize: isDesktopResolution3 ? "3rem" : "2rem",
              fontWeight: "bold",
            }}
          >
            (BIS-CON 2024)
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "80vh",
            right: "4vw",
            color: "#fff",
            fontSize: isDesktopResolution3 ? "1rem" : "1rem",
            zIndex: 3,
          }}
        >
          March 15-16, 2024 | Jaipur (Rajasthan, INDIA)
        </div>

        <img src={HomeHeroImage} alt="magazineImage" style={homeImageStyle} />
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: isDesktopResolution3 ? "4rem" : "2em",
          // fontSize: isDesktopResolution3 ? "4rem" : "2.5em",
        }}
      >
        <div>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Conference</span> Overview
          </div>

          <div
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            BIS-CON 2024, the inaugural International Conference on Business,
            Innovation, and Sustainability hosted by the Department of
            Management Studies at Malaviya National Institute of Technology
            Jaipur, is a visionary initiative in response to the evolving
            landscape of global enterprises. This conference series aims to
            navigate the intricate interplay of business, innovation, and
            sustainability, recognizing their symbiotic relationship. Against
            the backdrop of a transformative era, where businesses understand
            the crucial role of sustainability alongside financial success,
            BIS-CON serves as a catalyst for collaborative action. It fosters
            cross-sector idea exchange, encouraging the crafting of a blueprint
            that integrates innovation to drive sustainability and positions
            sustainability as a core driver of innovation in the future.
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Conference</span> Objectives
          </div>

          <div style={{ fontSize: "1rem", marginTop: "1rem" }}>
            <ul style={{ fontSize: "1rem", marginTop: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                Inaugural International Conference on Business, Innovation, and
                Sustainability
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Panoramic vision of the management and business landscape
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Broad spectrum of themes covered
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Multifaceted challenges and opportunities addressed
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Topics include corporate governance, strategic management,
                marketing innovations, and organizational behavior
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Focus on supply chain resilience and beyond
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Encompasses all areas of management and business
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Diverse tapestry for holistic insights
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Emphasis on innovative solutions
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                Aim to drive real-world impact
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Important </span> Dates
          </div>

          <div style={{ marginTop: "1rem" }}>
            <table style={{ width: "60%" }}>
              <tr>
                <td style={{ padding: "0.5rem" }}>
                  Last Date of Paper Submission
                </td>
                <td style={{ padding: "0.5rem" }}>February 16, 2024</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Decision to the Author</td>
                <td style={{ padding: "0.5rem" }}>February 20, 2024</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>
                  Last Date of conference Registration
                </td>
                <td style={{ padding: "0.5rem" }}>February 26, 2024</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Dates of BIS-CON 2024</td>
                <td style={{ padding: "0.5rem" }}>March 15-16, 2024</td>
              </tr>
            </table>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Conference</span> Highlights
          </div>

          <ul style={{ fontSize: "1rem", marginTop: "1rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              An interactive workshop on how to publish in quality journals by
              renowned authors/ journal editors
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              A dedicated track for doctoral research proposals with one-to-one
              feedback to the research scholars from peers and experts
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Learning and networking opportunities with a diverse lot of
              professionals
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Publication opportunity for select papers in ABDC/ SCOPUS indexed
              journals
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Best Paper Award in each track
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "blue" }}>Intended</span> Audience
          </div>

          <ul style={{ fontSize: "1rem", marginTop: "1rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>PhD research scholars</li>
            <li style={{ marginBottom: "0.4rem" }}>Early-career researchers</li>
            <li style={{ marginBottom: "0.4rem" }}>Academicians</li>
            <li style={{ marginBottom: "0.4rem" }}>Professionals</li>
            <li style={{ marginBottom: "0.4rem" }}>Policy-makers/ NGOs</li>
            <li style={{ marginBottom: "0.4rem" }}>Graduate students</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
