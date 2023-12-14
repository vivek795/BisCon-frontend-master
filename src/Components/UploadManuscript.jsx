import React from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "filepond/dist/filepond.min.css";
import styles from "../styles/uploadManuscript.module.css"; 
import UploadFile from "./UploadFile.jsx"

const UploadManuscript = ({ handleGoBack, files, setFiles , handleManuscript}) => {
    
    const handleProceed = () => {
      handleGoBack();
      handleManuscript();
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerText}>
              Upload Manuscript
            </div>
            <div className={styles.headerIcon} onClick={handleGoBack} >
                <CloseIcon style={{width: '100%', height: '100%'}} />
            </div>
        </div>
        {/* <div className={styles.upload}>Upload File</div> */}

        <div className={styles.upload}>
          <UploadFile files={files} setFiles={setFiles}  />
        </div>

        <div className={styles.buttonWrapper}>
         <Button variant="contained" onClick={() => handleProceed()} className={styles.proceedButton}>Proceed</Button>
        </div>
    </div>
  );
}

export default UploadManuscript;