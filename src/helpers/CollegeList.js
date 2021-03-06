export const collegeList = async ()=>{
    const res = await fetch("../college.json");
    const data = await res.json();
    return Object.values(data)
}

export const educationList = async ()=>{
    const res = await fetch("../edu.json");
    const data = await res.json();
    return data
}

/* export const courseList = ["M-Tech","MCA","MBA","Bachelor of Architecture","BA LLB","B.Ed"
,"BBA"
,"BCA"
,"B-COM"
,"M-COM"
,"Biotechnology "
,"BCA"
,"BBA LLB"
,"PHD"
,"PG Diploma"
,"UG Diploma"
,"B.Sc"
,"M.Sc."
,"Journalism"
,"Hotel Management"
,"MBBS"
," BDS"
,"B-Pharma"
," M-Pharma"
,"B.Sc. Nursing"
,"M.Sc. Nursing"
,"Fine Arts B.F.A"
,"Web Designing"
,"Interior Designing"
,"Fashion Designing"
,"CA"
,"M.Ed"
,"Arts Psychology"
,"Arts Sociology"
,"BSC LLB"
,"BSC AGRICLUTURE"
,"BSC FISHERY"
,"B-TECH Agriculture"
,"Vertinary"
,"Others"]

export const specializationList =  ["BBA in International Business","BBA in Computer Application","BBA in Finance","BBA in Entrepreneurship","BBA in Hospitality","BBA in Human Resources","BBA in Information Systems","BBA in Global Business","BBA in Tourism","BBA in Human Resource Management"
,"BBA in Marketing"
,"BBA in Sports Management"
,"Civil Engineering"
,"Mechanical Engineering"
,"Mechanical Engineering (Automobile)"
,"Electrical Engineering"
,"Electronics & Tele-Communication Engineering"
,"Computer Science & Engineering"
,"Information Technology"
,"Electronics & Electrical Engineering"
,"Electronics and Instrumentation"
,"Aerospace Engineering"
,"Mechatronics Engineering"
,"Production Engineering"
,"Electronics and Computer Science Engineering"
,"Electronics and Computer Science Engineering"
,"Communication Engineering"
,"Medical Electronics Engineering"
,"Computer Science & Communication Engineering"
,"Computer Science & Systems Engineering"
,"Chemical Technology"
,"M.Tech Electrical Engineering"
,"Specialization in Power Electronics & Drives"
,"Power Energy & System"
,"Power System Engineering"
,"M.Tech Computer Science & Engineering"
,"Specialization in Computer Science & Engineering"
,"Computer Science & Information Security"
,"Data Analytics"
,"Software"
,"M.Tech Electronics & Tele-Communication Engineering"
,"Specialization in Communication Engineering"
,"VLSI Design & Embedded System"
,"RF & Microwave"
,"M.Tech Mechanical Engineering"
,"Specialization in Manufacturing Process & Systems"
,"Thermal Engineering"
,"Machine Design"
,"M.Tech Civil Engineering"
,"Specialization in Construction Engineering & Management"
,"Structural Engineering"
,"Geotechnical Engineering"
,"Water Resources Engineering"
,"Bachelor of Fashion Design"
,"Ph. D. in English"
,"Ph. D. in Economics"
,"Ph. D. in Physics"
,"Ph. D. in Chemistry"
,"Ph. D. in Biology"] */