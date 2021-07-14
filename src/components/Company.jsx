import {useState, useEffect} from "react";
import axios from 'axios';
import AlertMsg from './AlertMsg';
import Dashboard from "./Dashboard";

const Company = ()=>{

  useEffect(()=>{
    //SCROLL TO TOP
window.scrollTo(0, 0)
 },[])
   
  const [company, setCompany] = useState({});
  const [alert, setAlert] = useState({
    condition : false,
    msg : null
  })
    const handleChange = (e)=>{
      setCompany({...company, [e.target.name] : e.target.value})
      console.log(company)
    }
    const handleClick = (e)=>{
        e.preventDefault();
      const {username, designation, email, phonenumber, companyname, password} = company;
        if(!username || !designation || !email || !phonenumber || !companyname || !password){
         setAlert({
           condition : true,
           msg : "All fields are mandatory"
         })
         setTimeout(()=>{
          setAlert({
            condition : false,
            msg : null
          })
         },1000)
        }else if(email.includes("@gmail")||email.includes("@yahoo")||email.includes("@hotmail")){
          setAlert({
            condition : true,
            msg : "Enter Proper Email"
          })
          setTimeout(()=>{
           setAlert({
             condition : false,
             msg : null
           })
          },2000)
        }else{
          axios.post('https://umpteens-backend.herokuapp.com/company', company, { //https://umpteens-backend.herokuapp.com
            headers : {
                Accept : "application/json",
                "content-type" : "application/json",      
            }
        })
        .then(res=>{
          setCompany({
            companyname : "",
            username : "",
            designation : "",
            email : "",
            password : "",
            phonenumber : ""
          })
          setAlert({
            condition : true,
            msg : "Congratulations! Your account has been created. Please verify your email to continue"
          })
          setTimeout(()=>{
           setAlert({
             condition : false,
             msg : null
           })
          },5000)
          
        })
        .catch(err=>{
          setCompany({
            companyname : "",
            username : "",
            designation : "",
            email : "",
            password : "",
            phonenumber : ""
          })
          setAlert({
            condition : true,
            msg : "Something went wrong, please try again"
          })
          setTimeout(()=>{
           setAlert({
             condition : false,
             msg : null
           })
          },3000)
        })
        }

    }

    return  <section className="inerpgenmidle_scn compnydtal_pge">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="middeleboxbg compnydtalbox">
              <div className="compnydtalfrm">
                 <h2> Company Details </h2>

                 <form>

                  <div className="form-group">
                    <input name="companyname" value={company.companyname} onChange={handleChange} type="text" className="form-control my-4" placeholder="Company Name"/>
                  
                  
                    <input name="username" value={company.username} onChange={handleChange} type="text" className="form-control my-4" placeholder="Name of the contact person"/>
                  
                  
                    <input name="designation" value={company.designation} onChange={handleChange} type="text" className="form-control my-4" placeholder="Enter Designation"/>
                  
                
                    <input name="email" value={company.email} onChange={handleChange} type="email" className="form-control my-4" placeholder="Enter Company Mail Id"/>
                  
                 
                    <input name="password" value={company.password} onChange={handleChange} type="password" className="form-control my-4" placeholder="Enter Password"/>
                
                   <input name="phonenumber" maxLength="10" value={company.phonenumber} onChange={handleChange} type="tel" className="form-control my-4 mb-2 inptFielsd" id="phone" placeholder="Enter Mobile Number" />
                  </div>
                  <button onClick={handleClick} type="button" className="btn">Save and proceed</button>
                  { alert.condition && <AlertMsg msg={alert.msg}/>}
                 </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Company;