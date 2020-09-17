import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session";
import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    signupDarkMode: JSON.parse(localStorage.getItem("dark")),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
