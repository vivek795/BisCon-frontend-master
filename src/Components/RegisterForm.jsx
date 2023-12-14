import React, { useState } from "react";
import { Radio, RadioGroup } from "@mui/material";
import Modal from '@mui/material/Modal';
import styles from "../styles/register.module.css";
import UploadManuscript from "./UploadManuscript";

import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function RegisterForm() {
  const [form, setForm] = useState({
    participantName: "",
    designation: "",
    affiliation: "",
    category: "",
    specializationArea: "",
    submissionId: "",
    submissionTitle: "",
    mobileNumber: "",
    authorName: "",
  });

  const [facilities, setFacilities] = useState("");
  const [openModal1, setOpenModal1] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);
  
  const handleUploadManuscript = () => {
    handleOpenModal1();
  };


  const handleRadioChange = (event) => {
    setFacilities(event.target.value);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(facilities);
  };

  const handleManuscript = () => {
    console.log(files);

  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '30px',
    boxShadow: 24,
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        mx: "auto",
      }}
    >
      <TextField
        name="participantName"
        label="Participant Name"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="designation"
        label="Designation"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="affiliation"
        label="Affiliation"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <FormControl sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select name="category" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="specializationArea"
        label="Specialization Area"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="submissionId"
        label="Submission ID"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="submissionTitle"
        label="Title of the Submission"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="mobileNumber"
        label="Mobile Number"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />



      <TextField
        name="authorName"
        label="Author Name"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />


      <div style={{marginTop : "1rem", marginBottom : "1rem", display : "flex", justifyContent : "space-between"}}>

        <div>Upload Manuscript : </div>
        <div>
          <Button variant="contained" onClick={() => handleUploadManuscript()} className={styles.secondBoxButton}>Upload Manuscript</Button>
        </div>

      </div>


      <p>
        Please indicate if you wish to avail these facilities within the campus:
      </p>
      <RadioGroup
        row
        name="facilities"
        value={facilities}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>

      <Button
        type="submit"
        variant="contained"
        sx={{ my: 2, height: "2.5rem", width: "10rem", mx: "auto" , backgroundColor : "#1C4EFE"}}
      >
        Submit
      </Button>


      <Modal
        open={openModal1}
        onClose={handleCloseModal1}
      >
        <Box sx={modalStyle} className={styles.modalBox}>
          <UploadManuscript files={files} setFiles={setFiles} handleManuscript = {handleManuscript} handleGoBack={handleCloseModal1} />
        </Box>
      </Modal>

    </Box>
  );
}

export default RegisterForm;
