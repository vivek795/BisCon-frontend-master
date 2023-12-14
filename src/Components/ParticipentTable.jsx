import React from "react";

const ParticipantTable = () => {
  const participantData = [
    { category: "PhD Research scholar / PG student", amount: "Rs. 3000.00" },
    { category: "Academicians", amount: "Rs. 4000.00" },
    { category: "Industry", amount: "Rs. 5000.00" },
    { category: "International Participant", amount: "US$ 150.00" },
    { category: "Attending only (Indian)", amount: "Rs. 2000.00" },
    { category: "Attending only (International)", amount: "US$ 100.00" },
  ];

  const styles = {
    table: {
      width: "100%",
    },
    heading: {
      textAlign: "left",
    },
    amount: {
      color: "blue",
      fontSize: "1rem",
      fontWeight: "semibold",
      marginLeft: "1rem",
    },
  };

  return (
    <table style={styles.table} className="participant-table">
      <thead>
        <tr>
          <th style={styles.heading}>Category of Participant</th>
          <th style={styles.heading}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {participantData.map((participant) => (
          <tr key={participant.category}>
            <td>{participant.category}</td>
            <td style={styles.amount}>{participant.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParticipantTable;
