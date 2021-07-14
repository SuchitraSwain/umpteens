const Assesment = () => {
  return (
    <section class="inerpgenmidle_scn">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="middeleboxbg">
              <div className="profile">
                <div className="col4">
                  <img
                    src="./images/placeholer.jpg"
                    className="img-fluid"
                    alt="ime"
                  />
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
                    <h1>Assessment Cost</h1>
                  </div>
                  <div className="assent_box">
                    <ul>
                      <li>
                        Cognitive{" "}
                        <a href="./assessment-cost.html">Take Assessment</a>
                      </li>
                      <li>
                        Communication{" "}
                        <a href="./assessment-cost.html">Take Assessment</a>
                      </li>
                      <li>
                        Nodejs{" "}
                        <a href="./assessment-cost.html">Take Assessment</a>
                      </li>
                    </ul>
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
export default Assesment;
