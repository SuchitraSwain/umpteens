import {useEffect, useState} from 'react';
import axios from 'axios';
import Social from '../Social';
import Loader from '../Loader';
import AlertMsg from '../AlertMsg';
const Contact = () =>{
useEffect(()=>{
  //SCROLL TO TOP
 window.scrollTo(0, 0)
},[])


      const [loading, setLoading] = useState(false);
      const [alert, setAlert] = useState(null);
      const [delivery, setDelivery] = useState(null);
     const [contact, setContact] = useState({})

     const handleChange = (e)=>{
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })
     }
     const handleClick = (e)=>{
         e.preventDefault();
         setLoading(true);
         const {name, email, phonenumber}= contact;
         if(!name||!email||!phonenumber){
             setAlert(true)
            setLoading(false);
         }
         else{
            axios.post('https://umpteens-backend.herokuapp.com/contact', contact, {
                headers : {
                    Accept : "application/json",
                    "content-type" : "application/json"
                }
            })
            .then(res=>{
                setContact({
                  name:"",
                  email:"",
                  phonenumber : "",
                  message : ""
                })
                setLoading(false);
                setDelivery(true);
                setTimeout(()=>setDelivery(null),2000)
            })
            .catch(err=>{
                setLoading(false);
                setDelivery(false)
            })
         }  
     }
     
    return <>
       <div style={{boxShadow:"0 2px 20px #ebebeb"}} className="container row mx-auto m-5">
       <div className="col-md-6 social-contact">
            <Social/>
       </div>
                <div className="col-md-6 signupform">
                  
                  <form style={{borderBottom:"none"}} >
                    <div className="form-group">
                      <input onChange={handleChange} autoComplete="off" value={contact.name} name="name"  type="text" className="form-control" placeholder="Enter your Name"/>
                    </div>
                    <div className="form-group">
                      <input onChange={handleChange} autoComplete="off" value={contact.email} name = "email" type="email" className="form-control" placeholder="Enter Email"/>
                    </div>
                    <div className="form-group">
                      <input onChange={handleChange} autoComplete="off" value={contact.phonenumber} name = "phonenumber" type="tel" className="form-control" placeholder="Enter Contact Number"/>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control"  onChange={handleChange} autoComplete="off" placeholder="Enter Your Message" value={contact.message} name="message" id="" style={{width:"100%"}} rows="6"></textarea>
                    </div>
                  
                    <button onClick={handleClick} className="btn">{loading&&<Loader/>} Send</button>
                    {alert && <AlertMsg msg ="Fill All Fields"/>}
                    {delivery && <AlertMsg msg ="Message Sent Successfully"/>}
                    {delivery==false && <AlertMsg msg ="Delivery Failed"/>}


                    

                  </form>
                </div>
              </div>
    </>

}
 export default Contact