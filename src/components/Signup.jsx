import axios from "axios";
import { useEffect, useState } from "react";
import { getMaxDate } from "../helpers/Date";
import AlertMsg from "./AlertMsg";
import Loader from "./Loader";
import { useHistory } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Signup = () => {
  //History
  const history = useHistory();
  //USER STATE
  const [user, setUser] = useState({});
  //REQUIRED
  const [req, setReq] = useState(false);
  const [fail, setFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [maxDate, setMaxDate] = useState(null);
  const [passAlert, setPassAlert] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const [emailDuplicate, setEmailDuplicate] = useState(false);
  console.log(user);
  //USE EFFECT
  useEffect(() => {
    //SCROLL TO TOP
    window.scrollTo(0, 0);
    setMaxDate(getMaxDate());
  }, []);

  //EVENT HANDLERS
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    const {
      firstname,
      lastname,
      email,
      dob,
      phonenumber,
      address,
      password,
      description,
      img,
    } = user;
    localStorage.setItem(
      "user",
      JSON.stringify({ firstname, lastname, email, img })
    );
    if (
      !firstname ||
      !lastname ||
      !email ||
      !dob ||
      !phonenumber ||
      !address ||
      !password ||
      !description ||
      passAlert
    ) {
      setReq(true);
      setLoading(false);
    } else {
      e.preventDefault();
      axios
        .post("https://umpteens-backend.herokuapp.com/api/signup", user, {
          //https://umpteens-backend.herokuapp.com
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        })
        .then(() => {
          history.push("/signup-education");
        })
        .catch((err) => {
          const dpKey = err.response.data.msg.code;
          dpKey == "11000" ? setEmailDuplicate(true) : setFail(true);
          setLoading(false);
          setUser({
            firstname: "",
            lastname: "",
            email: "",
            dob: "",
            phonenumber: "",
            address: "",
            password: "",
            description: "",
          });
          setTimeout(() => {
            setEmailDuplicate(false);
          }, 3000);
        });
    }
  };
  //PASSWORD VALIDATE
  const passwordValidate = (e) => {
    const passLength = e.target.value.length;
    if (passLength <= 6) {
      setPassAlert(true);
    } else {
      setPassAlert(false);
    }
  };
  return (
    <section className="inerpgenmidle_scn">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="middeleboxbg">
              <div className="profile">
                <ProfileCard img={user.img} />
                <div className="col-8">
                  <div className="head_prof">
                    <h1>Personal Details</h1>
                  </div>
                  <div className="profile_input mt-5">
                    <div className="col6">
                      <label for="password" className="font-weight-bold">
                        First Name
                      </label>
                      <input
                        value={user.firstname}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="firstname"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col6">
                      <label for="password" className="font-weight-bold">
                        Last Name
                      </label>
                      <input
                        value={user.lastname}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="lastname"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col6">
                      <label for="password" className="font-weight-bold">
                        Add Profile Picture
                      </label>
                      <input
                        placeholder="Add Image URL"
                        onChange={handleChange}
                        type="text"
                        name="img"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Date Of Birth
                      </label>
                      <input
                        max={maxDate}
                        value={user.dob}
                        onChange={handleChange}
                        name="dob"
                        type="date"
                        className="form-control"
                        placeholder="Enter DOB"
                      />
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Gender
                      </label>
                      <br></br>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                      />
                      <label for="male">Male</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                      />
                      <label for="female">Female</label>
                    </div>
                  </div>

                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Person with disabilities (if yes, please specify)
                      </label>
                      <br></br>
                      <input
                        onClick={() => {
                          setOpenBox(true);
                        }}
                        type="radio"
                        id="yes"
                        name="disability"
                      />
                      <label for="yes">Yes</label>
                      <input
                        onClick={() => {
                          setOpenBox(false);
                        }}
                        type="radio"
                        id="no"
                        name="disability"
                      />
                      <label for="no">No</label>
                      {openBox && (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mention Disability"
                          name="disability"
                          onChange={handleChange}
                        />
                      )}
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Enter Email
                      </label>
                      <input
                        value={user.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Id"
                      />
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Password
                      </label>
                      {passAlert && (
                        <AlertMsg
                          color="red"
                          msg="Password must be minimum 6 characters long"
                        />
                      )}
                      <input
                        value={user.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        onKeyUp={passwordValidate}
                        minLength="6"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Phone Number
                      </label>
                      <input
                        value={user.phonenumber}
                        name="phonenumber"
                        onChange={handleChange}
                        type="tel"
                        maxLength="10"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        Enter Address
                      </label>
                      <textarea
                        value={user.address}
                        name="address"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Address (Please Specify Street, City, State, Pin code & Country)"
                      ></textarea>
                    </div>
                  </div>
                  <div className="profile_input mt-3">
                    <div className="col12">
                      <label for="password" className="font-weight-bold">
                        About Yourself
                      </label>
                      <textarea
                        value={user.description}
                        maxLength="200"
                        name="description"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Briefy about yourself (Please do not exceed 200 characters)"
                      ></textarea>
                    </div>
                  </div>

                  <div className="profile_input">
                    <div className="col12">
                      {req && <AlertMsg color="red" msg="Missing Fields" />}
                      {fail && (
                        <AlertMsg color="red" msg="Something Went Wrong" />
                      )}
                      {emailDuplicate && (
                        <AlertMsg color="red" msg="Email Already Exists" />
                      )}
                      <button onClick={handleSubmit} className="btn">
                        {loading && <Loader />}Save and proceed
                      </button>
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
export default Signup;
