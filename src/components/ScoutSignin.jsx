import axios from "axios";
import { useState, useEffect } from "react";
import AlertMsg from "./AlertMsg";
import Personal from "./Personal";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Dashboard from "./Dashboard";

const ScoutSignIn = ({ a }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({});
  const [isSignedIn, setSignIn] = useState(false);

  //USE EFFECT
  useEffect(() => {
    //SCROLL TO TOP
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { username, password } = user;
    if (!username || !password) {
      setAuth(true);
      setLoading(false);
    } else {
      axios
        .post(
          "https://umpteens-backend.herokuapp.com/api/signin-company",
          user,
          {
            headers: {
              Accept: "application/json",
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          /* console.log(res.data);  */
          setData(res);
          console.log(data);
          setLoading(false);
          /* setSignIn(true); */
        })
        .then(() => {
          setSignIn(true);
        })
        .catch((err) => {
          setAuth(true);
          setLoading(false);
          setUser({
            username: "",
            password: "",
          });
          setTimeout(() => {
            setAuth(false);
          }, 1500);
        });
    }
  };

  return isSignedIn ? (
    <Dashboard a={a} company={data} />
  ) : (
    <>
      {/* <div id="forgtmodel">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal">
                  Forget password
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                  <span aria-hidden="true">&times;</span>{" "}
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Id"
                    />
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="signinmidle_scn">
        <div className="container">
          {auth && (
            <AlertMsg
              color="red"
              msg="Hey Seems like you entered wrong signin details. Please try again"
            />
          )}
          <div className="row">
            <div className="col-md-12">
              <div className="welcmebckall">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div className="welcmtxt">
                      <div className="welcmtxt1">
                        <h1 className="mt-5">Welcome Back Scouts!</h1>
                        <h6 className="mt-5 my-2">
                          Signin <br />
                          <span className="brek"> to Get Started.</span>
                        </h6>
                        <div className="welcmemg mt-5">
                          <img
                            src="images/scouts__signing.png"
                            className="img-fluid d-flex m-auto"
                            width="100%"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="signupform">
                      <h3>Sign in to Umpteens</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label for="username" className="font-weight-bold">
                            Email/Username
                          </label>
                          <input
                            value={user.username}
                            name="username"
                            onChange={handleChange}
                            type="text"
                            className="form-control mt-2"
                            placeholder="Enter Username/Email Id"
                          />
                        </div>
                        <div className="form-group">
                          <label for="username" className="font-weight-bold">
                            Password
                          </label>
                          <input
                            value={user.password}
                            name="password"
                            onChange={handleChange}
                            type="password"
                            className="form-control mt-2"
                            placeholder="Enter Password"
                          />
                          <button
                            type="button"
                            class="btn forget__password"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Forget Password ?
                          </button>
                        </div>
                        <div className="kooplognfrgtpswd d-flex justify-content-between align-items-center">
                          {/*  <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" for="customCheck1">Keep me logged in</label>
                      </div>
                      <div className="forgtpopop"> <a href="#" data-toggle="modal" data-target="#exampleModal">Forgot password</a> </div> */}
                        </div>
                        <button type="submit" className="btn">
                          {" "}
                          {loading && <Loader />} Sign in
                        </button>
                        <p className="text-center">
                          Don’t not have account yet?
                          <Link to="/company">Sign up</Link>
                        </p>
                      </form>

                      {/* <div className="socilist">
                        <h4>Or</h4>
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src="images/facebook_signin.png"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/google_singin.png"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="images/github_signin.png"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade forgetPass__modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header b-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 mt-2">
                    <img
                      src="images/forgetPassword.png"
                      alt=""
                      className="img-fluid m-auto d-block"
                    />
                  </div>
                  <div className="col-12">
                    <h3 className="text-center mt-5">Forgot your password?</h3>
                    <p className="text-center mt-2">
                      Enter your e-mail address and we’ll send you <br></br>a
                      link to reset your password.
                    </p>
                  </div>
                  <div className="col-md-10 offset-md-1 mt-5">
                    <form>
                      <div className="form-group">
                        <label for="username" className="">
                          Email Address
                        </label>
                        <input
                          name="username"
                          id="username"
                          type="text"
                          className="form-control mt-2"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="row mt-5 mb-5">
                        <div className="col-6">
                          <button
                            className="btn cancel__btn"
                            type="button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="col-6">
                          <button className="btn submit__btn">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default ScoutSignIn;
