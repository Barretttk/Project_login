import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const sectStyle = { "background-color": "#eee" };
  const divCardStyle = { "border-radius": "25px" };

  
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});

    const changeHandler = (e) => {
        if (e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setFormInfo({
        ...formInfo,
        [e.target.name]: e.target.value,
      });
    };
}

    const submitHandler = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8000/api/users", formInfo)
        .then((res) => {
          console.log("...User Created...", res)
          setFormInfo();
          if (res.data.errors) {
            setFormErrors(res.data.errors)
          } else {
            setFormErrors({})
          }
        })
        .catch((err) =>
         console.log(err))
    };


  return (
    <div className="base-container">
      <section class="vh-100" style={sectStyle}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={divCardStyle}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form onSubmit={submitHandler} class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="firstName"
                              id="form3Example1c"
                              class="form-control"
                              onChange={changeHandler}
                            />
                            <p className="text-danger">
                              {formErrors.firstName?.message}
                            </p>
                            <label htmlFor="" class="form-label">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="lastName"
                              id="form3Example2c"
                              class="form-control"
                              onChange={changeHandler}
                            />
                            <p className="text-danger">
                              {formErrors.lastName?.message}
                            </p>
                            <label htmlFor="" class="form-label">
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="form3Example3c"
                              class="form-control"
                              onChange={changeHandler}
                            />
                            <p className="text-danger">
                              {formErrors.email?.message}
                            </p>
                            <label htmlFor="" class="form-label">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="currentpassword"
                              name="password"
                              id="form3Example4c"
                              class="form-control"
                              onChange={changeHandler}
                            />
                            <p className="text-danger">
                              {formErrors.password?.message}
                            </p>
                            <label htmlFor="" class="form-label">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="passwordConfirm"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={changeHandler}
                            />
                            {formErrors.passwordConfirm?.message}
                            <label htmlFor="" class="form-label">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            name="isCheck"
                            value=""
                            id="form2Example3c"
                            onChange={changeHandler}
                          />
                          <label htmlFor="" class="form-check-label">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link
                            to={"/Login"}
                            button
                            type="button"
                            class="btn btn-primary btn-lg"
                          >
                            Login
                          </Link>
                          <button type="submit" class="btn btn-success btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://knect365.imgix.net/uploads/Anime-df0b53c350ec90e775d21afd0e110979-0bef3a6436ef1f259f71a27409ce54c0.jpg?auto=compress&fit=max&w=412&dpr=5"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
