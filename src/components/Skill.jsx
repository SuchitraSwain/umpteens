import axios from "axios";
import { useState, useEffect } from "react";
import skill from "../skill";
import functional from "../functional";
import AssesmentCost from "./AssesmentCost";
import Loader from "./Loader";

const Skill = () => {
  //STATE
  const [skills, setSkills] = useState({ projectbrief: "NIL" });
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [next, setNext] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [openBox, setOpenBox] = useState(false);
  console.log(skills);

  const change = (e) => {
    if (selectedSkill.length < 5) {
      setSelectedSkill([...selectedSkill, e.target.value]);
    }
  };
  //HANDLECHANGE
  const handleChange = (e) => {
    setSkills({ ...skills, [e.target.name]: e.target.value });
  };

  //HANDLEDELETE
  const handleDelete = (id) => {
    const newSelected = selectedSkill.filter((s, i) => i !== id);
    setSelectedSkill(newSelected);
  };

  //USEEFFECT
  useEffect(() => {
    //SCROLL TO TOP
    window.scrollTo(0, 0);
    const getUser = async () => {
      let userDetails = await localStorage.getItem("user");
      const user = await JSON.parse(userDetails);
      setSkills({ ...skills, ...user });
    };
    getUser();
  }, []);

  //HANDLECLICK
  const handleClick = (e) => {
    if (e.target.name === "button") {
      setLoader(true);
      axios
        .post(
          "https://umpteens-backend.herokuapp.com/api/signup-skills", //https://umpteens-backend.herokuapp.com
          { ...skills, tests: [...selectedSkill] },
          {
            headers: {
              Accept: "application/json",
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          setSkills({});
          setNext(true);
        })
        .catch((err) => err);
      /* window.location.href = "/signup-assesments"; */
    } else {
      setSkills({ ...skills, [e.target.name]: e.target.value });
    }
  };
  //RENDER SELECTIVE

  const selective = (e) => {
    const type = e.target.value;
    type === "Coding"
      ? setSelectedType("coding")
      : setSelectedType("functional");
    setSelectedSkill([]);
  };

  //RENDERED LISTS
  const renderCoding = skill.map((s, i) => (
    <option value={s} key={i}>
      {s}
    </option>
  ));
  const renderFunctional = functional.map((f, i) => (
    <option value={f} key={i}>
      {f}
    </option>
  ));
  const renderSelected = selectedSkill.map((skill, id) => {
    return (
      <span
        style={{ margin: "5px", padding: "10px" }}
        key={id}
        className="badge rounded-pill bg-success"
      >
        {skill}{" "}
        <span style={{ cursor: "pointer" }} onClick={() => handleDelete(id)}>
          x
        </span>{" "}
      </span>
    );
  });

  return next ? (
    <AssesmentCost selectedSkill={selectedSkill} />
  ) : (
    <section className="inerpgenmidle_scn">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="middeleboxbg">
              <div className="profile">
                <div className="col4">
                  <div className="profile-pic">
                    <img
                      src={skills.img || "./images/placeholer.jpg"}
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
                      <li className="colr">
                        <a href="#">
                          <span>2</span> Education
                        </a>
                      </li>
                      <li className="active colr">
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
                  <div className="head_prof">
                    <h1>Skills</h1>
                  </div>
                  <div className="profile_input">
                    <div className="col12">
                      <div className="eduction_box">
                        <h2>Enter Details</h2>
                        <div className="input_boxsel profile_input">
                          <div className="col12">
                            <h6>Skill Type</h6>
                            <input
                              onClick={(e) => {
                                handleClick(e);
                                selective(e);
                              }}
                              type="radio"
                              id="vehicle1"
                              name="skilltype"
                              value="Coding"
                            />
                            <label for="vehicle1"> Coding</label>
                            <input
                              onClick={(e) => {
                                handleClick(e);
                                selective(e);
                              }}
                              type="radio"
                              id="vehicle2"
                              name="skilltype"
                              value="Functional"
                            />
                            <label for="vehicle2"> Functional</label>
                          </div>

                          {selectedType === "coding" && (
                            <div className="col12">
                              <select
                                onChange={change}
                                className="form-control"
                              >
                                <option>Select Coding Skill Tests</option>
                                {renderCoding}
                              </select>
                            </div>
                          )}
                          {selectedType === "functional" && (
                            <div className="col12">
                              <select
                                onChange={change}
                                className="form-control"
                              >
                                <option>Select Functional Skill Tests</option>
                                {renderFunctional}
                              </select>
                            </div>
                          )}
                          <div className="col12">
                            <label htmlFor="">
                              Selected Tests <code>(*Maximum 5 Tests)</code>
                            </label>
                            <br />
                            {renderSelected}
                          </div>
                          <div className="col12">
                            <h6>Proficiency</h6>
                            <input
                              onClick={handleClick}
                              type="radio"
                              name="proficiency"
                              value="Begginer"
                            />
                            <label> Beginner</label>
                            <input
                              onClick={handleClick}
                              type="radio"
                              name="proficiency"
                              value="Intermediate"
                            />
                            <label> Intermediate</label>
                            <input
                              onClick={handleClick}
                              type="radio"
                              name="proficiency"
                              value="Expert"
                            />
                            <label> Expert</label>
                          </div>
                          <div className="col12">
                            <textarea
                              name="projectbrief"
                              onChange={handleChange}
                              value={skills.projectbrief}
                              className="form-control"
                              placeholder="Projects (If any)"
                            ></textarea>
                          </div>
                          <div className="col12">
                            <h6>Certified</h6>
                            <input
                              onClick={(e) => {
                                handleClick(e);
                                setOpenBox(true);
                              }}
                              type="radio"
                              name="certified"
                              value="Yes"
                            />
                            <label> Yes</label>
                            <input
                              onClick={(e) => {
                                handleClick(e);
                                setOpenBox(false);
                              }}
                              type="radio"
                              name="certified"
                              value="No"
                            />
                            <label> No</label>
                          </div>
                          {openBox && (
                            <div className="col12">
                              <textarea
                                placeholder="Enter Certification Details"
                                className="form-control"
                                name="certified"
                                onChange={handleChange}
                                rows="10"
                              ></textarea>
                            </div>
                          )}
                          <div className="col12">
                            <button
                              name="button"
                              onClick={handleClick}
                              type="submit"
                              className="btn"
                            >
                              {loader && <Loader />}Save and proceed
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
        </div>
      </div>
    </section>
  );
};
export default Skill;
