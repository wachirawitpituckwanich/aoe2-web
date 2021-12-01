import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
    useHistory
  } from "react-router-dom";
import './returnBtn.css'
const ReturnBtn = () => {
    const history = useHistory();
    return (
        <div className="returnBtn">
            <Button
            style={{color: 'white'}}
            type="submit"
            color="primary"
            variant="text"
            startIcon={<ArrowBackIosIcon/>}
            onClick={() => history.goBack()}
            >
                Back
            </Button>
        </div>
    )
}
export default ReturnBtn;