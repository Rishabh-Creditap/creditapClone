import React, { useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Stack,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import * as Yup from "yup";
import "./AddressDetails.css";

// const initialValues = {
//   houseNo: "",
//   area: "",
//   landmark: "",
//   city: "",
//   state: "",
//   country: "",
//   pincode: "",
//   pHouseNo: "",
//   pArea: "",
//   pLandmark: "",
//   pCity: "",
//   pState: "",
//   pCountry: "",
//   pPincode: "",
// };

// const onSubmit = (values) => {
//   console.log("Form data: ", values);
// };

// const validationSchema = Yup.object({
//   houseNo: Yup.string().required("Required"),
//   area: Yup.string().required("Required"),
//   landmark: Yup.string().required("Required"),
//   city: Yup.string().required("Required"),
//   state: Yup.string().required("Required"),
//   country: Yup.string().required("Required"),
//   pincode: Yup.string().required("Required"),
//   pHouseNo: Yup.string().required("Required"),
//   pArea: Yup.string().required("Required"),
//   pLandmark: Yup.string().required("Required"),
//   pCity: Yup.string().required("Required"),
//   pState: Yup.string().required("Required"),
//   pCountry: Yup.string().required("Required"),
//   pPincode: Yup.string().required("Required"),
// });

const AddressDetails = ({details}) => {
//   const formik = useFormik({
//     initialValues,
//     // validationSchema,
//     onSubmit,
//   });

  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    if (checked === false) {
      setChecked(true);
      details.values.pHouseNo = details.values.houseNo;
      details.values.pArea = details.values.area;
      details.values.pLandmark = details.values.landmark;
      details.values.pState = details.values.state;
      details.values.pCity = details.values.city;
      details.values.pCountry = details.values.country;
      details.values.pPincode = details.values.pincode;
    } else {
      setChecked(false);
      details.values.pHouseNo = "";
      details.values.pArea = "";
      details.values.pLandmark = "";
      details.values.pState = "";
      details.values.pCity = "";
      details.values.pCountry = "";
      details.values.pPincode = "";
    }
  };

  return (
    <div>
       <div /*onSubmit={formik.handleSubmit}*/ className="addressDetails"> 
        <div className="address">
          <Stack spacing={4} className="stack">
            <div className="info">
              <h3>Current Address</h3>
            </div>

            <TextField
              id="outlined-basic"
              label="House/Plot/Door No."
              variant="outlined"
              className="inp"
              name="houseNo"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.houseNo}
              error={
                details.touched.houseNo && details.errors.houseNo ? true : false
              }
              helperText={
                details.touched.houseNo && details.errors.houseNo
                  ? details.errors.houseNo
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="Street, Area"
              name="area"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.area}
              error={details.touched.area && details.errors.area ? true : false}
              helperText={
                details.touched.area && details.errors.area
                  ? details.errors.area
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="Landmark"
              name="landmark"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.landmark}
              error={
                details.touched.landmark && details.errors.landmark ? true : false
              }
              helperText={
                details.touched.landmark && details.errors.landmark
                  ? details.errors.landmark
                  : null
              }
            />
            <TextField
              className="inp"
              variant="outlined"
              label="City"
              name="city"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.city}
              error={details.touched.city && details.errors.city ? true : false}
              helperText={
                details.touched.city && details.errors.city
                  ? details.errors.city
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="State"
              name="state"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.state}
              error={details.touched.state && details.errors.state ? true : false}
              helperText={
                details.touched.state && details.errors.state
                  ? details.errors.state
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="Country"
              name="country"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.country}
              error={
                details.touched.country && details.errors.country ? true : false
              }
              helperText={
                details.touched.country && details.errors.country
                  ? details.errors.country
                  : null
              }
            />
            <TextField
              className="inp"
              variant="outlined"
              label="Pincode"
              name="pincode"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pincode}
              error={
                details.touched.pincode && details.errors.pincode ? true : false
              }
              helperText={
                details.touched.pincode && details.errors.pincode
                  ? details.errors.pincode
                  : null
              }
            />
          </Stack>
        </div>

        <div className="address">
          <Stack spacing={4} className="stack">
            
            <div className="info">
              <h3>Permanent Address</h3>
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

            <TextField
              id="outlined-basic"
              label="House/Plot/Door No."
              variant="outlined"
              className="inp"
              name="pHouseNo"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pHouseNo}
              error={
                details.touched.pHouseNo && details.errors.pHouseNo ? true : false
              }
              helperText={
                details.touched.pHouseNo && details.errors.pHouseNo
                  ? details.errors.pHouseNo
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="Street, Area"
              name="pArea"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pArea}
              error={details.touched.pArea && details.errors.pArea ? true : false}
              helperText={
                details.touched.pArea && details.errors.pArea
                  ? details.errors.pArea
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="Landmark"
              name="pLandmark"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pLandmark}
              error={
                details.touched.pLandmark && details.errors.pLandmark
                  ? true
                  : false
              }
              helperText={
                details.touched.pLandmark && details.errors.pLandmark
                  ? details.errors.pLandmark
                  : null
              }
            />
            <TextField
              className="inp"
              variant="outlined"
              label="City"
              name="pCity"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pCity}
              error={details.touched.pCity && details.errors.pCity ? true : false}
              helperText={
                details.touched.pCity && details.errors.pCity
                  ? details.errors.pCity
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="State"
              name="pState"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pState}
              error={
                details.touched.pState && details.errors.pState ? true : false
              }
              helperText={
                details.touched.pState && details.errors.pState
                  ? details.errors.pState
                  : null
              }
            />

            <TextField
              className="inp"
              variant="outlined"
              label="Country"
              name="pCountry"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pCountry}
              error={
                details.touched.pCountry && details.errors.pCountry ? true : false
              }
              helperText={
                details.touched.pCountry && details.errors.pCountry
                  ? details.errors.pCountry
                  : null
              }
            />
            <TextField
              className="inp"
              variant="outlined"
              label="Pincode"
              name="pPincode"
              onChange={details.handleChange}
              onBlur={details.handleBlur}
              value={details.values.pPincode}
              error={
                details.touched.pPincode && details.errors.pPincode ? true : false
              }
              helperText={
                details.touched.pPincode && details.errors.pPincode
                  ? details.errors.pPincode
                  : null
              }
            />

            {/* <Button variant="contained" type="submit">
              NEXT
            </Button> */}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
