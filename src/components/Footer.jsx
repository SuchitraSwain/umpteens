import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <footer className="footer_scn">
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-md-3">
    //         <div className="fotertxt">
    //           <div className="fotrlogo">
    //             <img src="images/fotrlogo.png" className="img-fluid" alt="" />
    //           </div>
    //           <p>© 2020-21 Umpteens</p>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="fotertxt">
    //           <ul className="fotrmnu">
    //             <li>
    //               <Link className="nav-link " to="/about-us">
    //                 About us
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="nav-link " to="/terms-and-conditions">
    //                 Terms of use
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="nav-link " to="/privacy-policy">
    //                 Privacy Policy
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="nav-link " to="/contact">
    //                 Contact us
    //               </Link>
    //             </li>
    //           </ul>
    //           <ul className="fotrsocil">
    //             <li>
    //               <a
    //                 target="_blank"
    //                 href="https://www.facebook.com/Umpteens-110700161117071"
    //               >
    //                 <i className="fa fa-facebook" aria-hidden="true"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 target="_blank"
    //                 href="https://www.linkedin.com/company/umpteens/"
    //               >
    //                 <i className="fa fa-linkedin" aria-hidden="true"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 target="_blank"
    //                 href="https://www.instagram.com/_umpteens.com_/"
    //               >
    //                 <i className="fa fa-instagram" aria-hidden="true"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a target="_blank" href="https://twitter.com/umpteens">
    //                 <i className="fa fa-twitter" aria-hidden="true"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-md-3">
    //         <div className="fotertxt txtaligright">
    //           <ul className="fotradress">
    //             <li>
    //               <a href="mailto:contactus@umpteens.com">
    //                 <i className="fa fa-envelope" aria-hidden="true"></i>
    //                 contactus@umpteens.com
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <section className="footer__section pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 mt-5">
            <img
              src="images/fotrlogo.png"
              className="img-fluid d-block m-auto"
              alt=""
            />
            <p className="text-center mt-3 text-light">© 2020-21 Umpteens</p>
          </div>
          <div className="col-md-1 offset-md-1 col-3 mt-5">
            <Link to="/">
              <p className="text-light">HOME</p>
            </Link>
          </div>
          <div className="col-md-2 col-6 mt-5">
            <p className="text-light">ABOUT US</p>
            <ul>
              {/* <li>
                <Link className="footer_link">About us</Link>
              </li> */}
              <li>
                <Link className="footer_link">Mission</Link>
              </li>
              <li>
                <Link className="footer_link">Vision</Link>
              </li>
              <li>
                <Link className="footer_link">Our team</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-1 col-3 mt-5">
            <p className="text-light">SIGN IN</p>
            <ul>
              <li>
                <Link className="footer_link">Students</Link>
              </li>
              <li>
                <Link className="footer_link">Scouts</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mt-md-5 footer__link__mobile">
            <Link to="/contact">
              <p className="text-light">CONTACT US</p>
            </Link>
            <p className="footer_link">Mon - Fri ( 9am - 6pm)</p>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <ul>
              <li className="footer_mail">
                <img
                  src="images/mail.png"
                  alt=""
                  className="img-fluid"
                  style={{ marginRight: "10px" }}
                />
                <small> www.umpteens.com</small>
              </li>
              <li className="footer_mail" style={{ marginRight: "30px" }}>
                <img
                  src="images/phone.png"
                  alt=""
                  className="img-fluid"
                  style={{ marginRight: "10px" }}
                />
                <small>+91-94xxxxxxxx</small>
              </li>
              {/* <li className="mt-5 footer__social__icon">
                <Link>
                  <img src="images/facebook.png" alt="" className="img-fluid" />
                </Link>
                <Link>
                  <img src="images/gmail.png" alt="" className="img-fluid" />
                </Link>
                <Link>
                  <img src="images/github.png" alt="" className="img-fluid" />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
