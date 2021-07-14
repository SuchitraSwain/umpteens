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
                  <Link>
                    <button className="btn contact__btn__navbar">
                      Contact us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
