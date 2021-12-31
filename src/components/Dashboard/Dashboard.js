import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "5px",
    p: 4,
  };

  return (
    <div className="layout">
      <div className="grid">
        <div className="card">
          <div className="img">
            <img
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/fd0b8d25-4c2c-4640-9a54-93c0c3a0fffb.svg"
              alt=""
            />
            <h3>SHORT TERM SCHOOL FEES FINANCING</h3>
            <p className="dashDetails">
              We ensure the total annual fee amount is disbursed to the school
              of your choice while enabling student loan repayments through easy
              EMIs.
            </p>
            <div className="button">
              <button onClick={handleOpen}>Apply Now</button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <div className="modalCards">
                      <svg
                        class="MuiSvgIcon-root jss115"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                      </svg>
                      <h4>CHECK INSTANT ELIGIBILTY</h4>
                      <p>
                        Use our instant eligibility checker to know your
                        eligibility for the loan amount you need. Please note
                        that the loan disbursement is subject to the documents
                        provided when you actually apply for it.
                      </p>
                      
                      <Button variant="contained" secondary className="btn" style={{backgroundColor:"rgb(237, 47, 88)"}}>
                        CHECK NOW
                      </Button>
                      
                    </div>
                    <div className="modalCards">
                    <svg class="MuiSvgIcon-root jss115" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></svg>
                      <h4>COMPLETE KYC</h4>
                      <p>
                      Complete your KYC now in 3 simple steps to apply for a Loan. It's completely online and hassle-free.
                      </p>
                      <Link to="/form" className="link">
                      <Button variant="contained" secondary className="btn" style={{backgroundColor:"rgb(237, 47, 88)"}}>
                        CHECK NOW
                      </Button>
                      </Link>
                    </div>
                    
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/c9f2ba71-3b6d-437c-b542-46deb48e8dce.svg"
              alt=""
            />
            <h3>SHORT TERM COLLEGE/HIGHER EDUCATION</h3>
            <p className="dashDetails">
              We ensure the total annual fee amount is disbursed to the school
              of your choice while enabling student loan repayments through easy
              EMIs.
            </p>
            <div className="button">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/b79e07b6-d2b9-4cfc-b023-63a7497463a7.svg"
              alt=""
            />
            <h3>SHORT TERM CAREER COACHING</h3>
            <p className="dashDetails">
              We ensure the total annual fee amount is disbursed to the school
              of your choice while enabling student loan repayments through easy
              EMIs.
            </p>
            <div className="button">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src="https://s3.ap-south-1.amazonaws.com/media.creditap.in/production/v2.0/public/products/fd0b8d25-4c2c-4640-9a54-93c0c3a0fffb.svg"
              alt=""
            />
            <h3>LONG TERM EDUCATION LOAN</h3>
            <p className="dashDetails">
              We ensure the total annual fee amount is disbursed to the school
              of your choice while enabling student loan repayments through easy
              EMIs.
            </p>
            <div className="button">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
