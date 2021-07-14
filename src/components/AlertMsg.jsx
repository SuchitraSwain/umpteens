const AlertMsg = (props)=>{
    return <div style={{
        backgroundColor : `${props.color}`
    }} className='alertmsg'>
        <h3>{props.msg}</h3>
    </div>
}
export default AlertMsg;