function Input({handleChange,value,title,name}){
    const spanStyle = {
       marginTop:"10px"
      };
    
    return(
        <div className="ul">
            <label><span style={spanStyle}>{title}</span>
            <input onChange={handleChange} type="radio" class='radio' value={value} name={name} style={spanStyle}/>
           </label>
        </div>
    )
}
export default Input;