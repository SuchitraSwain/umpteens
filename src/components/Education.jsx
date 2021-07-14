import axios from "axios";
import { getMaxDate } from "../helpers/Date";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { collegeList, educationList } from "../helpers/CollegeList";
import { useHistory } from "react-router-dom";
const Education = () => {
  const history = useHistory();
  const [edu, setEdu] = useState({});
  const [next, setNext] = useState(false);
  const [maxDate, setMaxDate] = useState(null);
  const [clgList, setClgList] = useState([]);
  const [eduList, setEduList] = useState(null);
  const [block, setBlock] = useState({
    c: false,
    s: false,
    i: false,
  });
  /* console.log(block) */
  /* const [selectedClg, setSelectedClg] = useState(null) */
  /* console.log(clgList) */
  /* console.log(edu); */
  /* console.log(eduList) */
  //HANDLE_CHANGE
  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  //USEEFFECT
  useEffect(() => {
    //SCROLL TO TOP
    window.scrollTo(0, 0);
    const getUser = async () => {
      let userDetails = localStorage.getItem("user");
      const user = await JSON.parse(userDetails);
      setEdu({ ...edu, ...user });
    };
    getUser();
    setMaxDate(getMaxDate());

    collegeList().then((res) => {
      let a = [];
      res.map((c) => {
        c.forEach((cname) => {
          if (cname["College Name"]) {
            a.push(cname["College Name"]);
          }
        });
      });
      setClgList([...a]);
    });

    educationList().then((res) => {
      let list = {
        courses: [...res.Courses],
        specialization: [...res.Specialization],
      };
      setEduList(list);
    });
  }, []);

  //HANDLE_CLICK
  const handleClick = (e) => {
    if (e.target.name === "button") {
      setNext(true);
      axios
        .post(
          "https://umpteens-backend.herokuapp.com/api/signup-education",
          edu,
          {
            headers: {
              Accept: "application/json",
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          setEdu({});
          history.push("/signup-skills");
        })
        .catch((err) => err);
    } else {
      setEdu({
        ...edu,
        [e.target.name]: e.target.value,
      });
    }
  };
  //RENDER COLLEGE LIST
  const renderCollegeList = clgList.sort().map((c) => {
    return <option value={c}>{c}</option>;
  });
  //RENDER COURSES
  const renderCourses =
    eduList &&
    eduList.courses.sort().map((c) => {
      return <option value={c}>{c}</option>;
    });
  //RENDER SPECIALIZATION
  const renderSpecialization =
    eduList &&
    eduList.specialization.sort().map((s) => {
      return <option value={s}>{s}</option>;
    });
  //OPEN OTHERS
  const boxOpen = (e) => {
    if (e.target.value === "Others") {
      switch (e.target.name) {
        case "course":
          setBlock({ ...block, c: true });
          break;
        case "specialization":
          setBlock({ ...block, s: true });
          break;
        case "institute":
          setBlock({ ...block, i: true });
          break;
        default:
          setBlock({ ...block });
      }
    }
  };
  return (
    <section className="inerpgenmidle_scn">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="middeleboxbg">
              <div className="profile">
                <div className="col4">
                  <div className="profile-pic">
                    <img
                      src={edu.img || "./images/placeholer.jpg"}
                      className="img-fluid"
                      alt="ime"
                    />
                  </div>
                  <div className="list_text">
                    <ul>
                      <li className="colr">
                        <a href="#">
                          <span>1</span> Create account
                        </a>
                      </li>
                      <li className="active colr">
                        <a href="#">
                          <span>2</span> Education
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>3</span> Skills
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>4</span> Assesments
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col8">
                  <div className="eduction_box">
                    <h2>Enter Details</h2>
                    <div className="input_boxsel profile_input">
                      {/*     <div className="col12">
                      <select className="form-control">
                        <option>Select Education</option>
                        <option>B.Tech</option>
                        <option>BCA</option>
                      </select>
                    </div> */}
                      <div className="col12">
                        {/*  COURSES */}
                        <select
                          name="course"
                          onChange={(e) => {
                            handleChange(e);
                            boxOpen(e);
                          }}
                          id=""
                          className="form-control"
                        >
                          <option>Select Courses</option>
                          <option name="c" value="Others">
                            Others
                          </option>
                          {renderCourses}
                        </select>
                        {block.c && (
                          <input
                            onChange={handleChange}
                            name="course"
                            type="text"
                            className="form-control"
                            placeholder="Or Enter course"
                          />
                        )}
                      </div>
                      {/* SPECIALIZATION */}
                      <div className="col12">
                        <select
                          name="specialization"
                          onChange={(e) => {
                            handleChange(e);
                            boxOpen(e);
                          }}
                          id=""
                          className="form-control"
                        >
                          <option value="">Select Specialization</option>
                          <option name="s" value="Others">
                            Others
                          </option>
                          {renderSpecialization}
                        </select>
                        {block.s && (
                          <input
                            onChange={handleChange}
                            name="specialization"
                            type="text"
                            className="form-control"
                            placeholder="Or Enter specialization"
                          />
                        )}
                      </div>
                      {/*    <div className="col12">
                      <select className="form-control">
                        <option>Select University/Institute</option>
                        <option>Select University/Institute</option>
                      </select>
                    </div> */}
                      {/* INSTITUTE */}
                      <div className="col12">
                        <select
                          name="institute"
                          onChange={(e) => {
                            handleChange(e);
                            boxOpen(e);
                          }}
                          className="form-control"
                          id=""
                        >
                          <option>Select from the List</option>
                          <option name="i" value="Others">
                            Others
                          </option>
                          {renderCollegeList}
                        </select>

                        {block.i && (
                          <input
                            onChange={handleChange}
                            name="institute"
                            type="text"
                            className="form-control"
                            placeholder="Or Enter University/Institute Name"
                          />
                        )}
                      </div>
                      <div className="col12">
                        <h6>Course Type</h6>
                        <input
                          onClick={handleClick}
                          type="radio"
                          name="course_type"
                          value="FullTime"
                        />
                        <label> Full Time</label>
                        <input
                          onClick={handleClick}
                          type="radio"
                          name="course_type"
                          value="PartTime"
                        />
                        <label> Part Time</label>
                      </div>
                      <div className="col12">
                        <label htmlFor="">Enter Pass Out Year</label>
                        <input
                          min="2018-01-01"
                          max={maxDate}
                          name="pass_out"
                          onChange={handleChange}
                          type="date"
                          className="form-control"
                          placeholder="Enter Pass Out Year"
                        />
                      </div>
                      <div className="col12">
                        <label htmlFor="CGPA">CGPA</label>
                        <input type="radio" name="grades" id="CGPA" />
                        <label htmlFor="Percentage">Percentage %</label>
                        <input type="radio" name="grades" id="Percentage" />
                        <input
                          name="grades"
                          onChange={handleChange}
                          type="number"
                          className="form-control"
                          placeholder="Enter Your Grades"
                        />
                      </div>
                      <div className="profile_input">
                        {/*  TO BE ADDED LATER */}
                        {/*  <div className="col6">
                      <label htmlFor="customFile"> *Upload FIle in <code>.zip</code> format </label>
                        <input type="file" className="form-control" id="customFile" />
                      </div> */}
                      </div>
                      <div className="col12">
                        <button
                          name="button"
                          onClick={handleClick}
                          className="btn"
                        >
                          {" "}
                          <span>{next && <Loader />}</span> Save and proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
