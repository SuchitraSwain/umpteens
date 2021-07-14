import {student, scout} from '../../helpers/Terms';
const TermsAndConditions = ()=>{
//SCROLL TO TOP
window.scrollTo(0, 0)

const renderStudent = student.map((s)=>{
    return <li style={{listStyleType:"circle"}} >{s}</li>
});
const renderScout = scout.map((sc)=>{
    return <li style={{listStyleType:"circle"}} >{sc}</li>
})

    return <>
    <section className="terms m-5 container mx-auto">
        <div className = "row" >
            <div className="col-md-12">
                <h2 className="text-center" >Terms and Conditions</h2>
                <ul className="m-3" style={{listStyleType:"disc", lineHeight:"1.5"}} >
                <h4 className="my-3" >Students</h4>
                <hr />
                   {renderStudent}
                   <h4 className="my-3" >Scouts</h4>
                <hr />
                {renderScout}
                </ul>
            </div>
        </div>
    </section>
    </>

}
export default TermsAndConditions;