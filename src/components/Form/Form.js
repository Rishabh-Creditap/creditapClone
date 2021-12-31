import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useFormik, ErrorMessage } from "formik";
import * as yup from 'yup';
 
import "./form.css";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  Box
} from "@mui/material";

const Form = () => {
  const steps = ["Basic Details", "Address Details", "Other Details"];

  const [page, setPage] = useState(1);

  const handleBack = () => {
    setPage(() => {
      if (page !== 1) {
        return page - 1;
      }
    });
  };

//   const validate = yup.object({
//     values.name: yup.string().required('Required')
// })

  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      email: "",
      pan: "",
      aadhaar: "",
      fatherName: "",
      motherName: "",
      houseNo: "",
      street: "",
      landmark: "",
      state: "",
      city: "",
      country: "",
      pHouseNo: "",
      pStreet: "",
      pLandmark: "",
      pState: "",
      pCity: "",
      pCountry: "",
    },
    onSubmit: (values) => {
      console.log("Form data: ", values);
      setPage(page + 1);
    },
    // validationSchema: {validate}
    // validate: (values) => {
    //     let errors ={}

    //     if(!values.name){
    //         errors.name="Required";
    //     }
    //     if(!values.dob){
    //         errors.dob="Required";
    //     }
    //     if(!values.email){
    //         errors.email="Required";
    //     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    //         errors.email = "Invalid email format";
    //     }
    //     if(!values.pan){
    //         errors.pan="Required";
    //     }
    //     if(!values.aadhaar){
    //         errors.aadhaar="Required";
    //     }
    //     if(!values.fatherName){
    //         errors.fatherName="Required";
    //     }
    //     if(!values.motherName){
    //         errors.motherName="Required";
    //     }

    //     return errors;
    // }
  });

  

  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    if (checked === false) {
      setChecked(true);
      formik.values.pHouseNo = formik.values.houseNo;
      formik.values.pStreet = formik.values.street;
      formik.values.pLandmark = formik.values.landmark;
      formik.values.pState = formik.values.state;
      formik.values.pCity = formik.values.city;
      formik.values.pCountry = formik.values.country;
    } else {
      setChecked(false);
      formik.values.pHouseNo = "";
      formik.values.pStreet = "";
      formik.values.pLandmark = "";
      formik.values.pState = "";
      formik.values.pCity = "";
      formik.values.pCountry = "";
    }
  };

  //   console.log("Form values: ", formik.values);

  return (
    <div>
      <Box sx={{ width: "100%" }} className="stepper">
        <Stepper activeStep={page - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {page === 1 ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="pg1">
            <Stack spacing={4} className="stackPg1">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="inp"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                // error={formik.errors.name?true:false}
                // helperText={formik.errors.name?formik.errors.name:null}
              />
              <TextField
                type="date"
                className="inp"
                label="Date of Birth"
                variant="outlined"
                name="dob"
                InputLabelProps={{ shrink: true }}
                onChange={formik.handleChange}
                value={formik.values.dob}
              />

              <TextField
                className="inp"
                variant="outlined"
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              {/* <FormControl className="inp">
                <InputLabel id="gender">Gender</InputLabel>
                <Select labelId="gender" label="Gender" id="selectgender">
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Others"}>Others</MenuItem>
                </Select>
              </FormControl>

              <FormControl className="inp">
                <InputLabel id="marital">Marital Status</InputLabel>
                <Select labelId="marital" label="Marital Status">
                  <MenuItem value={"Single"}>Single</MenuItem>
                  <MenuItem value={"Married"}>Married</MenuItem>
                  <MenuItem value={"Divorced"}>Divorced</MenuItem>
                </Select>
              </FormControl> */}

              <TextField
                className="inp"
                variant="outlined"
                label="PAN"
                name="pan"
                onChange={formik.handleChange}
                value={formik.values.pan}
              />
              <TextField
                className="inp"
                variant="outlined"
                label="Aadhaar"
                name="aadhaar"
                onChange={formik.handleChange}
                value={formik.values.aadhaar}
              />
              <TextField
                className="inp"
                variant="outlined"
                label="Applicant's Father / Husband Name"
                name="fatherName"
                onChange={formik.handleChange}
                value={formik.values.fatherName}
              />
              <TextField
                className="inp"
                variant="outlined"
                label="Mother's Name"
                name="motherName"
                onChange={formik.handleChange}
                value={formik.values.motherName}
              />
            </Stack>
            <div className="buttons">
              <Button
                variant="contained"
                disabled
                className="btn"
                // onClick={handleBack}
                // type="button"
              >
                BACK
              </Button>
              <Button
                variant="contained"
                className="btn"
                style={{ marginLeft: 20 }}
                type="submit"
              >
                NEXT
              </Button>
            </div>
          </div>
        </form>
      ) : page === 2 ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="pg2">
            <div className="crAdd">
              <h3>Current Address</h3>
              <Stack spacing={3} className="stackPg2">
                <TextField
                  className="inp"
                  variant="outlined"
                  label="House/Door No."
                  name="houseNo"
                  onChange={formik.handleChange}
                  value={formik.values.houseNo}
                />
                <TextField
                  className="inp"
                  variant="outlined"
                  label="Street, Area"
                  name="street"
                  onChange={formik.handleChange}
                  value={formik.values.street}
                />
                <TextField
                  className="inp"
                  variant="outlined"
                  label="Landmark"
                  name="landmark"
                  onChange={formik.handleChange}
                  value={formik.values.landmark}
                />

                <TextField
                  className="inp"
                  variant="outlined"
                  label="City"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />

                <TextField
                  className="inp"
                  variant="outlined"
                  label="State"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                />

                <TextField
                  className="inp"
                  variant="outlined"
                  label="Country"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
              </Stack>
            </div>

            <div className="check">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Same as Current Address"
                  checked={checked}
                  onChange={handleChecked}
                />
              </FormGroup>
            </div>

            <div className="permAdd">
              <h3>Permanent Address</h3>
              <Stack spacing={3} className="stackPg2">
                <TextField
                  className="inp"
                  variant="outlined"
                  label="House/Door No."
                  value={formik.values.pHouseNo}
                />
                <TextField
                  className="inp"
                  variant="outlined"
                  label="Street, Area"
                  name="pStreet"
                  onChange={formik.handleChange}
                  value={formik.values.pStreet}
                />
                <TextField
                  className="inp"
                  variant="outlined"
                  label="Landmark"
                  name="pLandmark"
                  onChange={formik.handleChange}
                  value={formik.values.pLandmark}
                />

                <TextField
                  className="inp"
                  variant="outlined"
                  label="City"
                  name="pCity"
                  onChange={formik.handleChange}
                  value={formik.values.pCity}
                />

                <TextField
                  className="inp"
                  variant="outlined"
                  label="State"
                  name="pState"
                  onChange={formik.handleChange}
                  value={formik.values.pState}
                />

                <TextField
                  className="inp"
                  variant="outlined"
                  label="Country"
                  name="pCountry"
                  onChange={formik.handleChange}
                  value={formik.values.pCountry}
                />
              </Stack>
            </div>

            <div className="btnpg2">
              <div className="buttons">
                <Button
                  variant="contained"
                  className="btn"
                  onClick={handleBack}
                >
                  BACK
                </Button>
                <Button
                  variant="contained"
                  className="btn"
                  style={{ marginLeft: 20 }}
                  type="submit"
                >
                  NEXT
                </Button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="pg3">
          <div className="docs">
            <div className="doc">
              <h4>Selfie</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload clear selfie Pic with the full face, facing
                  towards camera
                </p>
              </div>
            </div>
            <div className="doc">
              <h4>PAN Document</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload clear ORIGINAL(not xerox/photocopy) PAN Pic in
                  image/pdf formatshowing all the details fully
                </p>
              </div>
            </div>
            <div className="doc">
              <h4>Aadhaar Document Front</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload Front image/pdf of aadhaar card ORIGINAL(not
                  xerox/photocopy), covering name details clearly
                </p>
              </div>
            </div>
            <div className="doc">
              <h4>Aadhaar Document Back</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload Back image/pdf of aadhaar card ORIGINAL(not
                  xerox/photocopy), covering address details clearly
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Button variant="contained" className="btn" onClick={handleBack}>
              BACK
            </Button>
            <Button
              variant="contained"
              className="btn"
              style={{ marginLeft: 20 }}
            //   onClick={handleNext}
              disabled
            >
              NEXT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
