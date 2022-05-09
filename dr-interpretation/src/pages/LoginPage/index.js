import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./LoginPage.scss";
const LoginPage = (props) => {
  const { touched, errors } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper">
          <h1>Login</h1> <br />
          <Form className="form-container">
            <div className="form-group">
              <label>Username</label>
              <Field
                type="text"
                name="username"
                className={"form-control"}
                placeholder="username"
              />
              {touched.username && errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className={"form-control"}
                placeholder="password"
              />
              {touched.password && errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            <div className="btn-submit">
              <button type="submit" className="btn-light btn-login">
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      username: props.username,
      password: props.password,
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  }),

  handleSubmit: (values) => {
    const REST_API_URL = "http://127.0.0.1:8000/core/login";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch(REST_API_URL, requestOptions)
      .then((response) => {
        if (response.ok) {
          window.location.href = "/home";
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data["username"] != null) {
        } else {
          alert(data["message"]);
        }
      })
      .catch((error) => {
        return error;
      });
  },
})(LoginPage);

export default LoginFormik;
