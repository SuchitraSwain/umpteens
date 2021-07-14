import {useState} from "react";
import AlertMsg from './AlertMsg';
const SignupProfile = ()=>{
    const [img, setImg] = useState(false)
    const [alert, setAlert] = useState(false)
    const handleChange = (e) =>{
        e.target.value && setImg(true)
        console.log(e.target.value)
    }

    const handleClick = () =>{
        if(!img){
           setAlert(true)
        }else{
            window.location.href = '/signup'
        }
    }

return <>

<section className="inerpgenmidle_scn profilepage">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="middeleboxbg profilemgbox">
            <div className="profilcntnt">
               <h2> Select by adding a profile image</h2>
               <form>
                <div className="usericn"><i className="fa fa-user" aria-hidden="true"></i></div>
                 <div className="input-group mb-3">
                  <div className="custom-file">
                  <label className="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">No file selected.</label>
                    <input onChange={handleChange} type="file" className="custom-file-input" id="inputGroupFile02"/>
                    
                  </div>
                  
                </div>
                {alert && <AlertMsg msg='Missing Image' />}
                <button onClick={handleClick} type="button" className="btn">Start</button>
               </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
}
export default SignupProfile;