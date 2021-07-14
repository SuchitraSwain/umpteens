const TextBlock = ({title, description, children})=>{
    return <>
    <div>
    <h4>{title}</h4>
    <br />
    {children}
    <p>{description}</p>
    <br />
    </div>
   
    </>
}

export default TextBlock;