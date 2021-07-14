const Social = ()=>{
    const iconStyle = {
        color:"#898989",
        fontSize:"3rem",
        padding : "10px",
        
    }
return <>
<h2 style={{color:"#05A401"}} className="p-4" >Connect With Us</h2>
    <div className="social-grid">
    <a target="_blank" className="social-icons" href="https://www.facebook.com/Umpteens-110700161117071" style={iconStyle}><i className="fa fa-facebook" aria-hidden="true"></i></a>
    <a target="_blank" className="social-icons" href="https://www.instagram.com/umpteens_7222/"  style={iconStyle}><i className="fa fa-instagram" aria-hidden="true"></i></a>
    <a target="_blank" className="social-icons" href="https://www.linkedin.com/company/umpteens/" style={iconStyle}><i className="fa fa-linkedin" aria-hidden="true"></i></a>
    <a target="_blank" className="social-icons" href="https://twitter.com/umpteens" style={iconStyle}><i className="fa fa-twitter" aria-hidden="true"></i></a>
    </div>
    <p>Location : <i className="fas fa-map-marker-alt"></i> Umpteens, Mumbai, India</p>
</>
}
export default Social;