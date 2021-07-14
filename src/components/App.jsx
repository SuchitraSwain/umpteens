import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* import {useEffect} from "react"; */
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import Signin from "./Signin";
import ScoutSigninIn from "./ScoutSignin";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Education from "./Education";
import Skill from "./Skill";
import Assesment from "./Assesment";
import Company from "./Company";
import Personal from "./Personal";
import SignupProfile from "./SignupProfile";
import AssesmentCost from "./AssesmentCost";
import AboutUs from "./Pages/AboutUs";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";
import SStatus from "./Status";
import { useState } from "react";
import Map from "./Map";
import OurTeam from "./Pages/OurTeam";

const App = () => {
  //SCROLL TO TOP
  window.scrollTo(0, 0);

  const [signIn, setSignIn] = useState(false);

  const handleSignIn = (a) => {
    setSignIn(a);
    return signIn;
  };

  return (
    <>
      <Router>
        <Header signIn={signIn} handleSignIn={handleSignIn} />
        <Switch>
          {/* HOME*/}
          <Route exact path="/">
            <Banner />
            <Map />
            <About />
          </Route>
          {/* PAGES */}
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/our-team">
            <OurTeam />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndConditions />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          {/* SIGNIN */}
          <Route path="/signin">
            <Signin handleSignIn={handleSignIn} />
          </Route>
          {/* STUDENT ROUTE */}
          <Route path="/personal-info">
            <Personal />
          </Route>
          {/* SIGNUP ROUTES */}
          <Route path="/signup-profile">
            <SignupProfile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signup-education">
            <Education />
          </Route>
          <Route path="/signup-skills">
            <Skill />
          </Route>
          {/*   <Route path="/signup-assesments-cost" >
                <AssesmentCost/>
            </Route> */}
          <Route path="/signup-assesments">
            <Assesment />
          </Route>
          {/* COMPANY ROUTES */}
          <Route path="/company">
            <Company />
          </Route>
          {/* COMPANY SIGNIN */}
          <Route path="/signin-scout">
            <ScoutSigninIn a={handleSignIn} />
          </Route>
          {/* DASHBOARD */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {/* CONTACT */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* SUCESS */}
          <Route path="/payment/success">
            <SStatus status="Payment Successful" code={true} />
          </Route>
          {/* FAILURE */}
          <Route path="/payment/failure">
            <SStatus status="Payment Failed" code={false} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
