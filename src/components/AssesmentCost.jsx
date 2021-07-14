import { useState, useEffect } from "react";
import axios from "axios";
import skill from "../skill";
import functional from "../functional";
import Loader from "./Loader";
import RazorPay from "../apis/razorpay";
import { useHistory } from "react-router-dom";

const Assesment = ({ selectedSkill }) => {
  const history = useHistory();
  //BILL DETAILS
  const [bill, setBill] = useState({
    firstname: "",
    lastname: "",
    email: "",
    orderId: "",
    items: "",
    amount: null,
  });
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [cC, setCouponCode] = useState({ couponCode: "" });
  const [invalid, setInvalid] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);
  //USE EFFECT
  useEffect(() => {
    //SCROLL TO TOP
    window.scrollTo(0, 0);
    const getOrderId = async () => {
      const res = await axios.post(
        "https://umpteens-backend.herokuapp.com/payments/orderid",
        { amount: totalAmount },                            ////////////////////////////////////////////50% OFF
        {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      const { firstname, lastname, email, img } = JSON.parse(
        localStorage.getItem("user")
      );
      const testString = selectedSkill.join(", ");
      setBill({
        firstname: firstname,
        lastname: lastname,
        email: email,
        orderId: res.data.id,
        items: `${testString} + Cognitive`,
        amount: totalAmount,
        img
      });
      setLoad(false);
    };
    getOrderId();
  }, []);
  //BILL CALCULATION
  /* console.log(selectedSkill) */
  const codingSkill = selectedSkill.filter((c) => skill.includes(c));
  const functionalSkill = selectedSkill.filter((f) => functional.includes(f));
  /*     console.log(codingSkill) */
  const codingBill = codingSkill.map((c) => ({ name: c, price: 349 }));
  console.log(codingBill, "Here")
  const functionalBill = functionalSkill.map((f) => ({ name: f, price: 349 }));
  /*  console.log(codingBill); */
  /* console.log(functionalBill); */
  const totalBill = [...codingBill, ...functionalBill];
  /* console.log(totalBill) */
  const renderedBill = totalBill.map((b, i) => (
    <li>
     {i+2}. {b.name} {/* <span>{`RS.${b.price}`}</span> */}
    </li>
  ));

  /* const totalAmount = totalBill.reduce((a, c) => {
    return a + c.price;
  }, 0); */

  const totalAmount = 399;

  //DOM
  /* const btn = document.querySelector('#pay-btn'); */
  const handleChange = (e) => {
    setCouponCode({ couponCode: e.target.value });
  };

  const couponSubmit = async () => {
      setLoading(true);
      /* await axios.post(
        "https://umpteens-backend.herokuapp.com/coupon/delete",
        cC
      ); */
      if(cC.couponCode==="UMPTEENS2021"){
      setLoading(false);
      setCouponCode({ couponCode: "" });
      setCouponApplied(true);
      }else{
        setInvalid(true);
        setLoading(false);
        setCouponCode({ couponCode: "" });
      }
      
    
  };

  return (
    <>
      <section className="inerpgenmidle_scn">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="middelboxbg">
                <div className="profile">
                  <div className="col4">
                  <div className="profile-pic">
                  <img
                      src={bill.img || "./images/placeholer.jpg"}
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
                        <li className="colr">
                          <a href="#">
                            <span>3</span> Skills
                          </a>
                        </li>
                        <li className="active colr">
                          <a href="#">
                            <span>4</span> Assesments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col8">
                    <div className="head_prof">
                      <h1>Assesment Cost</h1>
                    </div>
                    <div className="cost_text">
                      <ul>
                      <li className="tatl">Functional</li>
                        <li>1. Cognitive (Mandatory) {/* <span>Rs.249</span> */} </li>
                        {codingBill.length>=1&&<li className="tatl">Coding</li>}
                        {renderedBill}
                        <li className="tatl">
                          Total
                          <span>
                            {!couponApplied ? `Rs.${totalAmount}` : "Rs.0"}
                          </span>
                        </li>
                        
                      </ul>
                      {load && (
                        <ul>
                          <li>
                            <button className="btn">
                              <Loader />
                              Payment Processing
                            </button>
                          </li>
                        </ul>
                      )}
                      <ul>
                        <li className="coupon">
                          <input
                            value={cC.couponCode}
                            onChange={handleChange}
                            className="form-control mx-1"
                            placeholder="Enter Coupon Code"
                            type="text"
                          />
                          <button onClick={couponSubmit}>
                            {loading && <Loader />}Submit
                          </button>
                        </li>
                        {invalid && (
                          <li>
                            <p>❌ Coupon Code Invalid </p>
                          </li>
                        )}
                        {couponApplied && (
                          <li>
                            <p>✅ Coupon Applied</p>
                          </li>
                        )}
                      </ul>
                    </div>
                    {!couponApplied ? (
                      <div>
                        {!load && (
                          <div id="pay-btn">
                            <RazorPay bill={bill} />
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          history.push("/payment/success");
                        }}
                        className="btn btn-success"
                      >
                        Take your Assesments Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Assesment;
