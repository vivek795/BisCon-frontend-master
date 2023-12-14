import React from "react";

const bankAccountInformation = [
  {
    accountName: "REGISTRAR (Sponsored Research) MNIT Jaipur",
    accountNumber: "0676801700388",
    ifscCode: "ICIC0006768",
    branchName: "ICICI BANK LTD",
    branchAddress: "J.L.N. Marg Jaipur-302017",
    accountType: "Saving",
    micrNumber: "302229031",
  },
];

const BankAccountInformation = () => {
  return (
    <div className="bank-account-information">
      <table style={{ width: "100%", marginTop: "2rem" }}>
        <tbody>
          {bankAccountInformation.map((account) => (
            <>
              <tr>
                <td>Account Name</td>
                <td>{account.accountName}</td>
              </tr>
              <tr>
                <td>Account No.</td>
                <td>{account.accountNumber}</td>
              </tr>
              <tr>
                <td>IFSC Code</td>
                <td>{account.ifscCode}</td>
              </tr>
              <tr>
                <td>Branch Name</td>
                <td>{account.branchName}</td>
              </tr>
              <tr>
                <td>Complete Branch Address</td>
                <td>{account.branchAddress}</td>
              </tr>
              <tr>
                <td>Account Type</td>
                <td>{account.accountType}</td>
              </tr>
              <tr>
                <td>MICR No.</td>
                <td>{account.micrNumber}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankAccountInformation;
