import { Link } from "react-router-dom";
const About = () => {
  return (
    // <section id="destnation" className="compnydesntn_scn">
    //   <div className="container">
    //     <h2>
    //       Join us to <span className="brek">Kickstart your career</span>
    //     </h2>
    //     <div className="row">
    //       <div className="col-sm-6">
    //         <div className="comdes_cntnt">
    //           <div className="stdntmg">
    //             <img src="images/student.png" className="img-fluid" alt="" />
    //           </div>
    //           <h3>Students</h3>
    //           <p>Take assesments and sharpen your skills</p>
    //           <Link className="m-2" to="/signup">
    //             Sign Up
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="col-sm-6">
    //         <div className="comdes_cntnt">
    //           <div className="stdntmg">
    //             <img src="images/scout.png" className="img-fluid" alt="" />
    //           </div>
    //           <h3>Scouts</h3>
    //           <p>Hire from the best pool of candidates</p>
    //           <Link className="m-2" to="/company">
    //             Sign Up
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="student_scouts_sections mt-5 mb-5 pt-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="images/student.png"
              alt=""
              className="img-fluid d-block m-auto"
            />
            <h5 className="mt-5 text-center">Students</h5>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur.
            </p>

            <Link className="btn_link" to="/signup">
              <button className="btn mt-3 mb-5">Sign Up</button>
            </Link>
          </div>
          <div className="col-md-6 mt-md-0 mt-5">
            <img
              src="images/scout.png"
              alt=""
              className="img-fluid d-block m-auto"
            />
            <h5 className="mt-5 text-center">Scouts</h5>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <Link className="btn_link" to="/company">
              <button className="btn mt-3 mb-5">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
