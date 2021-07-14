import { useEffect, useState } from "react";
import axios from "axios";
const Personal = ({ data, handleSignIn }) => {
  const {
    firstname,
    lastname,
    email,
    dob,
    address,
    description,
    phonenumber,
    img,
  } = data;
  useEffect(() => {
    //SCROLL TO TOP
    window.scrollTo(0, 0);
    //SKILL
    const skills = async () => {
      const res = await axios.post(
        "https://umpteens-backend.herokuapp.com/skill",
        { email }
      );
      const data = await res.data;
      setSkills({ ...skills, ...data });
    };
    //EDUCATION
    const education = async () => {
      const res = await axios.post(
        "https://umpteens-backend.herokuapp.com/education",
        { email }
      );
      const data = await res.data;
      setEdu({ ...skills, ...data });
    };
    skills();
    education();
    handleSignIn(true);
  }, []);
  //STATE
  const [skills, setSkills] = useState({
    skilltype: "",
    certified: "",
    proficiency: "",
    projectbrief: "",
    tests: [],
  });
  const [edu, setEdu] = useState({
    course: "",
    course_type: "",
    grades: "",
    institute: "",
    pass_out: "",
    specialization: "",
  });
const [success, setSuccess] = useState(false)
  /* console.log(skills);
  console.log(edu); */

  const renderAssesments = skills.tests.map((t) => {
    return (
      <>
        <tr>
          <th scope="row">Subject :</th>
          <td>{t}</td>
        </tr>
        {/* <tr>
    <th scope="row">Grades :</th>
    <td>  </td>
    
  </tr> */}
        {/* <div aria-disabled className="tablbtn"><a aria-disabled href="#">Retake Assessment</a></div> */}
      </>
    );
  });

  const retakeAssessment = async(e)=>{
    try{
      await axios.post("https://umpteens-backend.herokuapp.com/retake-assessment", {  //https://umpteens-backend.herokuapp.com/retake-assessment
        name : `${firstname} ${lastname}`, 
        email,
        tests : skills.tests
      })
      setSuccess(true);
    }catch(err){
      console.log(err)
      setSuccess(true);

    }
      
  }

  return (
    <section className="inerpgenmidle_scn personalinfopage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="middeleboxbg">
              <div className="personalinfo">
                <div className="prsnlinfo_box">
                  <div className="infoimg dashboard-pic">
                    <img
                      src={img || "./images/placeholer.jpg"}
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="green__background d-flex justify-content-between">
                    <h2>
                      {firstname} {lastname}
                    </h2>
                    <button className="btn">Edit</button>
                  </div>
                  <table className="table" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <th scope="row">Date of birth :</th>
                        <td>{dob}</td>
                      </tr>
                      <tr>
                        <th scope="row">Mobile :</th>
                        <td>{phonenumber}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email Id :</th>
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <th scope="row">Address :</th>
                        <td>{address}</td>
                      </tr>
                      <tr>
                        <th scope="row">description :</th>
                        <td>{description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="prsnlinfo_box">
                  <h2>Education Details</h2>
                  <table className="table" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <th scope="row">Course :</th>
                        <td> {edu.course} </td>
                      </tr>
                      <tr>
                        <th scope="row"> Specialization :</th>
                        <td> {edu.specialization}</td>
                      </tr>
                      <tr>
                        <th scope="row">Course Type :</th>
                        <td> {edu.course_type} </td>
                      </tr>
                      <tr>
                        <th scope="row">Pass of Year :</th>
                        <td> {edu.pass_out} </td>
                      </tr>
                      <tr>
                        <th scope="row">Grades :</th>
                        <td> {edu.grades} </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-md-6">
                      <button className="btn certificate__btn">
                        <i
                          className="fa fa-eye"
                          aria-hidden="true"
                          style={{ marginRight: "20px" }}
                        ></i>
                        Certificate
                      </button>
                    </div>
                  </div>
                  {/* <div className="tablbtn"><a href="#"><i className="fa fa-eye" aria-hidden="true"></i> Certificate</a></div> */}
                </div>

                <div className="prsnlinfo_box">
                  <h2>Skill Level</h2>
                  <table className="table" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <th scope="row">Proficiency :</th>
                        <td> {skills.proficiency} </td>
                      </tr>
                      <tr>
                        <th scope="row"> Certified :</th>
                        <td> {skills.certified}</td>
                      </tr>
                      <tr>
                        <th scope="row">Project Details :</th>
                        <td> {skills.projectbrief} </td>
                      </tr>
                      <tr style={{ visibility: "hidden" }}>
                        <th scope="row">Project Details :</th>
                        <td> Computer Science & Engineering </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*  <div className="tablbtn"><a href="#"><i className="fa fa-eye" aria-hidden="true"></i> Certificate</a></div> */}
                </div>

                <div className="prsnlinfo_box">
                  {/* <h2 className="d-flex justify-content-between align-items-center">
                    Assessment
                    <span
                      style={{ float: "right", marginBottom: "6px" }}
                      className="tablbtn"
                    >
                      <a>Retake Assessment</a>
                    </span>
                  </h2> */}
                  <div className="green__background d-flex justify-content-between">
                    <h2>Assessment</h2>
                    <button className="btn">Retake Assessment</button>
                  </div>
                  <h2>Assessment {success? <span style={{float:"right", marginBottom:"6px"}} className="tablbtn">Request Sent</span> : <span style={{float:"right", marginBottom:"6px"}} className="tablbtn"><a style={{cursor:"pointer"}} className="retake-assessment mretake" onClick={retakeAssessment} >Retake Assessment</a></span>} </h2>
                  <table className="table" cellpadding="0" cellspacing="0">
                    <tbody>{renderAssesments}</tbody>
                  </table>

                  {/*       
                  <table className="table" cellpadding="0" cellspacing="0">
                    
                    <tbody>
                      <tr>
                        <th scope="row">Subject :</th>
                        <td> Communication </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Grades :</th>
                        <td> 8.00 </td>
                        
                      </tr>
                    </tbody>
                  </table> */}

                  {/*   <div className="tablbtn"><a href="#">Retake Assessment</a></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Personal;
