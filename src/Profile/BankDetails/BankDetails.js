import React from "react";
import { useFormik } from "formik";
import { TextField, Stack, Button } from "@mui/material";
import * as Yup from "yup";
import "./BankDetails.css";

// const initialValues = {
//   accountHolderName: "",
//   bankName: "",
//   bankAccountNumber: "",
//   ifsc: "",
//   branchName: "",
// };

// const onSubmit = (values) => {
//   console.log("Form data: ", values);
// };

// const validationSchema = Yup.object({
//   accountHolderName: Yup.string().required("Required"),
//   bankName: Yup.string().required("Required"),
//   bankAccountNumber: Yup.string().required("Required"),
//   ifsc: Yup.string().required("Required"),
//   branchName: Yup.string().required("Required"),
// });

const BankDetails = ({details}) => {
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

  return (
    <div className="details">
      {/* <form onSubmit={formik.handleSubmit}> */}
        <Stack spacing={4} className="stack">
          <div className="info">
            <h3>Bank Details</h3>
          </div>

          <TextField
            id="outlined-basic"
            label="Account Holder Name"
            variant="outlined"
            className="inp"
            name="accountHolderName"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.accountHolderName}
            error={
              details.touched.accountHolderName &&
              details.errors.accountHolderName
                ? true
                : false
            }
            helperText={
              details.touched.accountHolderName &&
              details.errors.accountHolderName
                ? details.errors.accountHolderName
                : null
            }
          />

          <TextField
            className="inp"
            variant="outlined"
            label="Bank Name"
            name="bankName"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.bankName}
            error={
              details.touched.bankName && details.errors.bankName ? true : false
            }
            helperText={
              details.touched.bankName && details.errors.bankName
                ? details.errors.bankName
                : null
            }
          />
          <TextField
            className="inp"
            variant="outlined"
            label="Bank Account Number"
            name="bankAccountNumber"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.bankAccountNumber}
            error={
              details.touched.bankAccountNumber &&
              details.errors.bankAccountNumber
                ? true
                : false
            }
            helperText={
              details.touched.bankAccountNumber &&
              details.errors.bankAccountNumber
                ? details.errors.bankAccountNumber
                : null
            }
          />
          <TextField
            className="inp"
            variant="outlined"
            label="IFSC"
            name="ifsc"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.ifsc}
            error={details.touched.ifsc && details.errors.ifsc ? true : false}
            helperText={
              details.touched.ifsc && details.errors.ifsc
                ? details.errors.ifsc
                : null
            }
          />
          <TextField
            className="inp"
            variant="outlined"
            label="Branch Name"
            name="branchName"
            onChange={details.handleChange}
            onBlur={details.handleBlur}
            value={details.values.branchName}
            error={
              details.touched.branchName && details.errors.branchName
                ? true
                : false
            }
            helperText={
              details.touched.branchName && details.errors.branchName
                ? details.errors.branchName
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

export default BankDetails;
