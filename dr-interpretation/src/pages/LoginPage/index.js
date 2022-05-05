import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginPage = (props) => {
    const loginPageStyle = {
        margin: "32px auto 37px",
        maxWidth: "530px",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
    };
    const { touched, errors } = props;
    return (
        <React.Fragment>
            <div className="container">
                <div className="login-wrapper" style={loginPageStyle}>
                    <h2>Login Page</h2>
                    <Form className="form-container">
                        <div className="form-group">
                            <label >Username</label>
                            <Field type="text" name="username" className={"form-control"} placeholder="username" />
                            {touched.username && errors.username && <span className="help-block text-danger">{errors.username}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" className={"form-control"} placeholder="password" />
                            {touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}

const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
        return {
            username: props.username,
            password: props.password
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }),

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // fetch('https://reqres.in/api/posts', requestOptions)
    //     .then(response => response.json())
    //     .then(data => this.setState({ postId: data.id }));


    handleSubmit: (values) => {
        const REST_API_URL = "http://127.0.0.1:8000/core/login";

        const requestOptions = {
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        };

        fetch(REST_API_URL, requestOptions).then(response => {
            if (response.ok) {
                window.location.href = "/home";
            } else {
                return response.json();
            }
        }).then(data => {
            if (data["username"] != null){}
            else{
                alert(data["message"]);
            }
              
        }).catch((error) => {
            console.log("error has been caught.")
        });
    }
})(LoginPage);

export default LoginFormik