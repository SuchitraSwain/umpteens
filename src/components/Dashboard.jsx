import {useEffect} from 'react';

const Dashboard = ({company, a})=>{
  //console.log(a)
  useEffect(()=>{
     //SCROLL TO TOP
 window.scrollTo(0, 0)
 a(true)
  },[])

  //console.log(company)
    return <section className="inerpgenmidle_scn">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div  className="middeleboxbg container">
        <h4 style={{padding:"0 30px"}} ><span style={{color:"#05A401"}} >Hello,</span> {company.data.username}</h4>
        <p style={{color:"grey",padding:"0 30px"}} >{company.data.designation}@{company.data.companyname}</p>
        <p style={{color:"grey",padding:"0 30px"}} >{company.data.email}</p>
        <p style={{color:"grey",padding:"0 30px"}} >{company.data.phonenumber}</p>
          </div>
        </div>  
        <div className="col-md-12">
          <div className="middeleboxbg">
             <div className="dashboardpge">
              <div className="dashearch">
                 <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <div className="input-group-append">
                      <button className="btn" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                  </div>
  
              </div>
              <div className="clearfix"></div>
               <div className="dashtap">
                  <ul className="nav nav-tabs bgr" id="myTab" role="tablist">
                    <li role="presentation">
                      <a className="active" id="deashbord-tab" data-toggle="tab" href="#deashbord" role="tab" aria-controls="deashbord" aria-selected="true">Dashboard</a>
                    </li>
                   {/*  <li role="presentation">
                      <a className="" id="shortlisted-tab" data-toggle="tab" href="#shortlisted" role="tab" aria-controls="shortlisted" aria-selected="false">Shortlisted</a>
                    </li>
                    <li role="presentation">
                      <a className="" id="hired-tab" data-toggle="tab" href="#hired" role="tab" aria-controls="hired" aria-selected="false">Hired</a>
                    </li> */}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="deashbord" role="tabpanel" aria-labelledby="deashbord-tab">
                      <div className="row">
                        <div className="col-sm-4">
                        <a href="#">
                           <div className="dashtapcntnt">
                             <div className="dshicn">
                                <img src="images/dashicon.png" className="img-fluid" alt=""/>
                             </div>
                             <div className="dshicntxt d-flex justify-content-between align-items-center">
                               <h4>Hired</h4>
                               <h3>0</h3>
                             </div>
                           </div>
                           </a>
                         </div>
                         <div className="col-sm-4">
                        <a href="#">
                           <div className="dashtapcntnt">
                             <div className="dshicn">
                                <img src="images/dashicon1.png" className="img-fluid" alt=""/>
                             </div>
                             <div className="dshicntxt d-flex justify-content-between align-items-center">
                               <h4>Shortlisted</h4>
                               <h3>0</h3>
                             </div>
                           </div>
                           </a>
                         </div>
                         <div className="col-sm-4">
                        <a href="#">
                           <div className="dashtapcntnt">
                             <div className="dshicn">
                                <img src="images/dashicon2.png" className="img-fluid" alt=""/>
                             </div>
                             <div className="dshicntxt d-flex justify-content-between align-items-center">
                               <h4>View of profile</h4>
                               <h3>0</h3>
                             </div>
                           </div>
                           </a>
                         </div>
                      </div>
                    
                    </div>
                    <div className="tab-pane fade" id="shortlisted" role="tabpanel" aria-labelledby="shortlisted-tab">
                      <div className="row">
                        <div className="col-sm-6">
                        <a href="#">
                           <div className="dashtapcntnt">
                             <div className="dshicn">
                                <img src="images/dashicon.png" className="img-fluid" alt=""/>
                             </div>
                             <div className="dshicntxt d-flex justify-content-between align-items-center">
                               <h4>Hired</h4>
                               <h3>6</h3>
                             </div>
                           </div>
                           </a>
                         </div>
                         <div className="col-sm-6">
                        <a href="#">
                           <div className="dashtapcntnt">
                             <div className="dshicn">
                                <img src="images/dashicon1.png" className="img-fluid" alt=""/>
                             </div>
                             <div className="dshicntxt d-flex justify-content-between align-items-center">
                               <h4>Shortlisted</h4>
                               <h3>8</h3>
                             </div>
                           </div>
                           </a>
                         </div>
                         
                      </div>
                    
                    </div>
                    <div className="tab-pane fade" id="hired" role="tabpanel" aria-labelledby="hired-tab">
                      <div className="dashhiredtap">
                           <h3>Aditi Mathur</h3>
                           <div className="media">
                            <img src="images/hireitapmg.png" className="mr-3" alt="..."/>
                            <div className="media-body">
                              <h4 className="mt-0">Bachelor of Engineering</h4>
                              <p>Biotechnology</p>
                              <p>Grades : 75%</p>
                            </div>
                          </div>
                            <h5><strong>Skill</strong> : Nodejs</h5>
                            <h6><strong>Score</strong> : 6.40</h6>
                             
                             <ul className="hiredbtn">
                               <li><a href="#"><i className="fa fa-eye" aria-hidden="true"></i> View Profile</a></li>
                               <li><a href="#"><i className="fa fa-download" aria-hidden="true"></i> Download Full Profile</a></li>
                               <li><a href="#"> Hired </a></li>
                             </ul>
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
}
export default Dashboard;