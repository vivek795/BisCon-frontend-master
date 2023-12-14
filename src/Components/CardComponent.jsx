import React from "react";

function CardComponent({ imageUrl, designation, name, work }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "1rem",
        boxShadow: "none",
        width: "25rem",
      }}
    >
      <img
        src={imageUrl}
        alt="Profile"
        style={{
          borderRadius: "100%",
          marginRight: "2rem",
          height: "7rem",
          width: "7rem",
        }}
      />
      <div
        style={{
          //   marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "0.4rem",
            fontSize: "1.25rem",
          }}
        >
          {designation}
        </div>
        <div>
          <div
            style={{
              fontWeight: "600",
              marginBottom: "0.4rem",
              fontSize: "1rem",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "0.9rem",
            }}
          >
            {work}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
