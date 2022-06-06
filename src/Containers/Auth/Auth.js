import React, { useState } from 'react';
import 'E:/Red and White/React Js/e-commerce-react/src/Containers/Auth/Auth.css'
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

export default function Auth() {

    const [login, setlogin] = useState("Login")
    const [password, setpassword] = useState(false);

    const Handle_login = (values) => {
        console.log("hi Login");

        let data = JSON.parse(localStorage.getItem("Login_Data"))

        if (data === null) {
            localStorage.setItem("Login_Data", JSON.stringify([values]))
        } else {
            data.push(values)
            localStorage.setItem("Login_Data", JSON.stringify(data))
        }
    }

    const Handle_SignUp = (values) => {
        console.log("hi Signup");

        let data = JSON.parse(localStorage.getItem("Signup_Data"))

        if (data === null) {
            localStorage.setItem("Signup_Data", JSON.stringify([values]))
        } else {
            data.push(values)
            localStorage.setItem("Signup_Data", JSON.stringify(data))
        }
    }

    const Handle_Password = (values) => {
        console.log("HI Password");

        let data = JSON.parse(localStorage.getItem("Password_Data"))

        if (data === null) {
            localStorage.setItem("Password_Data", JSON.stringify([values]))
        } else {
            data.push(values)
            localStorage.setItem("Password_Data", JSON.stringify(data))
        }
    }

    let Login_validation = {
        email: yup.string().required("Please enter your email: ").email("Please enter a valid email"),
        password: yup.string().min(8, "Please enter min 8 letters or numbers").required("Please enter your password"),
    }

    let Signup_validation = {
        full_name: yup.string().required("Please enter your full name"),
        email: yup.string().required("Please enter your email").email("Please enter a valid email"),
        password: yup.string().min(8, "Please enter min 8 letters or numbers").required("Please enter your password"),
    }

    let Password_Validation = {
        email: yup.string().required("Please enter your email").email("Please enter a valid email"),
    }

    let schema, initVal;

    if (login === 'Login' && !password) {
        console.log("Login validated")
        schema = yup.object().shape(Login_validation);
        initVal = {
            email: "",
            password: "",
        }
    } else if (login === 'Signup' && !password) {
        console.log("Signup validated")
        schema = yup.object().shape(Signup_validation);
        initVal = {
            full_name: "",
            email: "",
            password: "",
        }
    } else if (password) {
        console.log("password validated")
        schema = yup.object().shape(Password_Validation);
        initVal = {
            email: "",
        }
    }

    const formik = useFormik({
        validationSchema: schema,
        initialValues: initVal,
        onSubmit: (values, { resetForm }) => {
            if (login === 'Login' && !password) {
                Handle_login(values);
            } else if (login === 'Signup' && !password) {
                Handle_SignUp(values);
            } else if (password) {
                Handle_Password(values);
            }
            resetForm();
        }
    });

    const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

    // Add event listener to the "Sign Up" button

    signupButton.addEventListener('click', () => {
      userForms.classList.remove('bounceRight')
      userForms.classList.add('bounceLeft')
    }, false)


    //   Add event listener to the "Login" button

    loginButton.addEventListener('click', () => {
      userForms.classList.remove('bounceLeft')
      userForms.classList.add('bounceRight')
    }, false)

    return (

        <section className="user">
            <div className="user_options-container">
                <div className="user_options-text">
                    <div className="user_options-unregistered">
                        <h2 className="user_unregistered-title">Don't have an account?</h2>
                        <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                        <button className="user_unregistered-signup" id="signup-button" >Sign up</button>
                    </div>
                    <div className="user_options-registered">
                        <h2 className="user_registered-title">Have an account?</h2>
                        <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                        <button className="user_registered-login" id="login-button"  onClick={() => setpassword(false)}>Login</button>
                    </div>
                </div>
                <div className="user_options-forms" id="user_options-forms">
                    <div className="user_forms-login">
                        {login === "Login" && password===false ? <h2 className="forms_title">Login</h2> : <h2 className="forms_title">Set Password</h2>}
                        <Formik value={formik}>
                            <Form className="mb-3 forms_form" onSubmit={formik.handleSubmit}>
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <input type="email" placeholder="Email" id='email' name='email' className="forms_field-input" required autofocus onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} />
                                        {formik.errors.email &&
                                            formik.touched.email ? (
                                            <p>{formik.errors.email}</p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    {login === "Login" && password===false ? 
                                    <div className="forms_field">
                                        <input type="password" placeholder="Password" id='password' name='password' className="forms_field-input" required onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password} />
                                        {formik.errors.password &&
                                            formik.touched.password ? (
                                            <p>{formik.errors.password}</p>
                                        ) : (
                                            ""
                                        )}
                                    </div> : null}
                                </fieldset>
                                <div className="forms_buttons">
                                    {login === "Login" && password===false ? <button type="button" className="forms_buttons-forgot" onClick={() => setpassword(true)}>Forgot password?</button> : null}
                                    <input type="submit" onClick={() => setlogin("Login")} defaultValue="Log In" className="forms_buttons-action" />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="user_forms-signup">
                        <h2 className="forms_title">Sign Up</h2>
                        <Formik value={formik}>
                            <Form className="mb-3 forms_form" onSubmit={formik.handleSubmit}>
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <input type="text" placeholder="Full Name" className="forms_field-input" id='full_name' name='full_name' required onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.full_name} />
                                        {formik.errors.full_name &&
                                            formik.touched.full_name ? (
                                            <p>{formik.errors.full_name}</p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="forms_field">
                                        <input type="email" placeholder="Email" className="forms_field-input" id='email' name='email' required onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} />
                                        {formik.errors.email &&
                                            formik.touched.email ? (
                                            <p>{formik.errors.email}</p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="forms_field">
                                        <input type="password" placeholder="Password" id='password' name='password' className="forms_field-input" required
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password} />
                                        {formik.errors.password &&
                                            formik.touched.password ? (
                                            <p>{formik.errors.password}</p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                <input type="submit" defaultValue="Sign up" onClick={() => setlogin("Signup")} className="forms_buttons-action" />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>

    )
}
