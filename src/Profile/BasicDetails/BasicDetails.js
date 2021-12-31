import React from "react";
import { useFormik } from "formik";
import { TextField, Stack, Button } from "@mui/material";
import * as Yup from "yup";
import moment from "moment";
import "./BasicDetails.css";

// const initialValues = {
//   name: "",
//   email: "",
//   dob: "",
//   pan: "",
//   aadhaar: "",
//   fatherName: "",
//   motherName: "",
// };

const onSubmit = (values) => {
  console.log("Form data: ", values);
}

// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email format").required("Required"),
//   dob: Yup.string()
//     .required("Required")
//     .test((value) => {
//       return (
//         moment().diff(moment(value), "years") >= 20 &&
//         moment().diff(moment(value), "years") <= 60
//       );
//     }),
//   pan: Yup.string().required("Required").min(10, "Must contain 10 alphanumeric values").max(10, "Must contain 10 alphanumeric values"),
//   aadhaar: Yup.string().required("Required").min(12, "Must contain 12 digits").max(12, "Must contain 12 digits"),
//   fatherName: Yup.string().required("Required"),
//   motherName: Yup.string().required("Required"),
// });

const BasicDetails = ({details}) => {
  // const formik = useFormik({
  //   // initialValues,
  //   validationSchema,
  //   onSubmit,
  // });

  // console.log(details.values);

  return (
    <div className="details">
      {/* <form onSubmit={formik.handleSubmit}> */}
        <Stack spacing={4} className="stack">
          <div className="info">
            <h3>Basic Details</h3>
          </div>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="inp"
            name="name"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.name}
            error={details.touched.name && details.errors.name ? true : false}
            helperText={
              details.touched.name && details.errors.name
                ? details.errors.name
                : null
            }
          />
          <div className="info">
            <p>*As per PAN Card</p>
          </div>

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="inp"
            name="email"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.email}
            error={details.touched.email && details.errors.email ? true : false}
            helperText={
              details.touched.email && details.errors.email
                ? details.errors.email
                : null
            }
          />
          <TextField
            type="date"
            className="inp"
            label="Date of Birth"
            variant="outlined"
            name="dob"
            InputLabelProps={{ shrink: true }}
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.dob}
            error={details.touched.dob && details.errors.dob ? true : false}
            helperText={
              details.touched.dob && details.errors.dob ? details.errors.dob : null
            }
          />
          <div className="info">
            <p>
              * Applicant's age must lie between 20yrs to 60yrs for better loan
              approval chances
            </p>
          </div>

          <TextField
            className="inp"
            variant="outlined"
            label="PAN"
            name="pan"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.pan}
            error={details.touched.pan && details.errors.pan ? true : false}
            helperText={
              details.touched.pan && details.errors.pan ? details.errors.pan : null
            }
          />
          <TextField
            className="inp"
            variant="outlined"
            label="Aadhaar"
            name="aadhaar"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.aadhaar}
            error={
              details.touched.aadhaar && details.errors.aadhaar ? true : false
            }
            helperText={
              details.touched.aadhaar && details.errors.aadhaar
                ? details.errors.aadhaar
                : null
            }
          />
          <TextField
            className="inp"
            variant="outlined"
            label="Applicant's Father / Husband Name"
            name="fatherName"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.fatherName}
            error={
              details.touched.fatherName && details.errors.fatherName
                ? true
                : false
            }
            helperText={
              details.touched.fatherName && details.errors.fatherName
                ? details.errors.fatherName
                : null
            }
          />
          <TextField
            className="inp"
            variant="outlined"
            label="Mother's Name"
            name="motherName"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.motherName}
            error={
              details.touched.motherName && details.errors.motherName
                ? true
                : false
            }
            helperText={
              details.touched.motherName && details.errors.motherName
                ? details.errors.motherName
                : null
            }
          /> 
          {/* <Button variant="contained" type="submit">
            NEXT
          </Button> */}
        </Stack>
      {/* </form> */}
    </div>
  );
};

export default BasicDetails;
