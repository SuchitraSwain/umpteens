import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const Header = ({ handleSignIn, signIn }) => {
  const history = useHistory();
  return (
    <header className="header_all">
      <div className="topnavscrle">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" class="img-fluid logo" alt="" />
            </Link>
            {/* <a className="navbar-brand" href="/"><img src="images/logo.png" class="img-fluid logo" alt=""/> </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/about-us">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/our-team">
                    Our Team
                  </Link>
                </li>

                {/* <li className="nav-item"> <Link className="nav-link " to = "/signup" >Sign up</Link> </li> */}

                {/* <li className="nav-item"> <Link className="nav-link " to = "/signin" >Sign in</Link> </li> */}
                {/* DROPDOWN */}
                {signIn ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => {
                        handleSignIn(false);
                        history.push("/");
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign in
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li className="nav-item">
                        <Link className="nav-link " to="/signin">
                          Students
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/signin-scout">
                          Scouts
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                {/* DROPDOWN */}

                {/* <li className="btnlist"> <Link className="nav-link" to = "/contact" >Contact us</Link> </li> */}
                <li>
                  {/* <Link> */}
                  <button
                    type="button"
                    class="btn contact__btn__navbar"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Contact Us
                  </button>
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        class="modal fade contact_modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header b-0" style={{ border: "none" }}>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body pb-5">
              <div className="container">
                <div className="row">
                  <h2>Get In Touch</h2>
                  <p className="mt-3">Feel free to drop us a line below</p>
                </div>
                <div className="row mt-5">
                  <form>
                    <div className="col-12">
                      <label for="fullName" className="font-weight-bold">
                        Full Name
                      </label>
                      <input
                        name="fullname"
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <label for="fullName" className="font-weight-bold">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <label for="fullName" className="font-weight-bold">
                        Message
                      </label>
                      <input
                        name="message"
                        type="text"
                        className="form-control"
                        placeholder="Enter your query"
                      />
                    </div>
                    <div className="col-12 d-block ml-auto mr-auto mt-5">
                      <button>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
