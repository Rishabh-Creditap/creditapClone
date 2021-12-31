import React from "react";
import AddressDetails from "./AddressDetails/AddressDetails";
import BankDetails from "./BankDetails/BankDetails";
import BasicDetails from "./BasicDetails/BasicDetails";
import Documents from "./Documents/Documents";
import "./Profile.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";
import moment from "moment";

const onSubmit = (values) => {
  console.log("Form data: ", values);
  console.log("submitted");
};

const initialValues = {
  name: "",
  email: "",
  dob: "",
  pan: "",
  aadhaar: "",
  fatherName: "",
  motherName: "",
  houseNo: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  pHouseNo: "",
  pArea: "",
  pLandmark: "",
  pCity: "",
  pState: "",
  pCountry: "",
  pPincode: "",
  accountHolderName: "",
  bankName: "",
  bankAccountNumber: "",
  ifsc: "",
  branchName: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  dob: Yup.string()
    .required("Required")
    .test((value) => {
      return (
        moment().diff(moment(value), "years") >= 20 &&
        moment().diff(moment(value), "years") <= 60
      );
    }),
  pan: Yup.string()
    .required("Required")
    .min(10, "Must contain 10 alphanumeric values")
    .max(10, "Must contain 10 alphanumeric values"),
  aadhaar: Yup.string()
    .required("Required")
    .min(12, "Must contain 12 digits")
    .max(12, "Must contain 12 digits"),
  fatherName: Yup.string().required("Required"),
  motherName: Yup.string().required("Required"),
  houseNo: Yup.string().required("Required"),
  area: Yup.string().required("Required"),
  landmark: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  pincode: Yup.string().required("Required"),
  pHouseNo: Yup.string().required("Required"),
  pArea: Yup.string().required("Required"),
  pLandmark: Yup.string().required("Required"),
  pCity: Yup.string().required("Required"),
  pState: Yup.string().required("Required"),
  pCountry: Yup.string().required("Required"),
  pPincode: Yup.string().required("Required"),
  accountHolderName: Yup.string().required("Required"),
  bankName: Yup.string().required("Required"),
  bankAccountNumber: Yup.string().required("Required"),
  ifsc: Yup.string().required("Required"),
  branchName: Yup.string().required("Required"),
});

const Profile = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="profile">
      <p className="profDet">
        <i>
          <b>
            * For School/College Fees Loan, Applicant must be parent/guardian
            with blood relation. Please don't fill the details of student in the
            profile details. Only for Career Enhancement Loans, students
            themselves can apply the loan, provided he/she is an earning
            individual.
          </b>
        </i>
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="components">
          <div className="row1">
            <BasicDetails details={formik} />
            <BankDetails details={formik}/>
          </div>

          <AddressDetails details={formik}/>
        <Documents details={formik}/>
        </div>
        <Button variant="contained" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Profile;
