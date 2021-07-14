import TextBlock from "../TextBlock";

const AboutUs = () => {
  return (
    <>
      <section className="aboutUs__section mb-5">
        <div className="container">
          <div className="row mt-5 d-flex align-items-center">
            <div className="col-md-4">
              <img
                src="images/aboutus.png"
                alt=""
                className="img-fluid d-block m-auto"
              />
            </div>
            <div className="col-md-7 offset-md-1">
              <h3>About us</h3>
              <p className="mt-5">
                With over 1.5 million engineers alone graduating every year
                across the country, there are over five thousand software
                companies vying for them each year. The logistics of entry-level
                recruitment in India are daunting, both for recruiters and
                job-seekers. Considering that this challenge is only going to
                get more acute in the coming years, the workforce across all
                industries fluctuates several times than its current numbers.
                Our vision is to bring credible and genuine assessments to
                various aspects of education, training and employment and make
                the students employable. Umpteens strives to help organizations
                to recruit the best talent, offering enthralling reasons to
                consider our services for all your entry-level hiring
                requirements. If you are a Fresher, your search for the first
                job ends here. The assessment score card is your ticket to be
                highlighted with the best employers in the country, on a single
                platform.
              </p>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center">
            <div className="col-md-7">
              <h3>Who we are</h3>
              <p className="mt-5">
                We are a group of professionals who have increased revenue for
                multiple organisations with our extensive experience. During
                this period, we have noticed that the minimum TAT to hire for
                any opening is around 6 weeks and, in some cases, it takes more
                than the minimum. All of us bring something unique to the table
                with a common ideology to better serve the next generat
              </p>
            </div>
            <div className="col-md-4 offset-md-1">
              <img
                src="images/whoweare.png"
                alt=""
                className="img-fluid d-block m-auto"
              />
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center">
            <div className="col-md-4">
              <img
                src="images/whywe.png"
                alt=""
                className="img-fluid d-block m-auto"
              />
            </div>
            <div className="col-md-7 offset-md-1">
              <h3>Why are we unique</h3>
              <p className="mt-5">
                Looking at the current market situation, we as experienced
                professionals are battling to survive in the market to make a
                living and we couldn’t imagine the situation faced by fresh
                graduates. After careful consideration, we present to you a new
                platform which will help you skip the long-awaited queue in the
                job market. Candidates would need to register, take assessments
                based on the skills selected, get a score card and be ready for
                the next rounds of interview. Candidates will have the option to
                re-take the assessments, if they are not satisfied their scores.
                This feature is not available to any candidates in the real
                world and are deemed as rejected if they do not meet the
                criteria. Candidate data on the website will be updated with
                students who complete their graduation every year. Candidate
                details will be removed from the website once they are hired
                with any of the participating company HR. Any candidate profile
                by default will be hosted on Umpteens for 1 year and is
                extendable for a maximum of another year upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission__vision__section mb-5">
        <div className="container-fluid ">
          <div className="row mission__vision">
            <div
              className="col-md-5 offset-md-1"
              style={{ borderRight: "1px solid #05A401" }}
            >
              <h3>Mission</h3>
              <p className="mt-5">
                To make all graduates every year employable and create a
                positive impact that the next generation nurture their career
              </p>
            </div>
            <div className="col-md-5 vision">
              <h3>Vision</h3>
              <p className="mt-5">
                Reduce the turn around time and streamline the process of hiring
                of fresh graduates every year and make sure the deserving
                students are employed within an year of their graduation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
