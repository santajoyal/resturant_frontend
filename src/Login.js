import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api/user";
import { config } from "./config";

function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if(!values.email){
          errors.email="Required";
      }
      if(!values.password){
        errors.password="Required";
    }
      return errors;
    },
    onSubmit: async(values) => {
      try {
         let loginReq = await login(values)
        localStorage.setItem(`${config.storage_key}`,loginReq.data.token);
        navigate("/portal/list-restaurants")
      } catch (error) {
        alert("Something wrong")
      }
    },
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-user"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          placeholder="Enter Email Address..."
                        />
                        {
                           formik.errors.email && <span>Required</span>
                        }
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-user"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label className="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <input
                      type={"submit"}
                        className="btn btn-primary btn-user btn-block"
                        value={"Login"}
                      />
                        
                    
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
