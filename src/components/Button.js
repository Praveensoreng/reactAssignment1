import React from "react";
import './Button.css'

const Button = (props) =>{
      const{buttonText,showData,textColor,bgcolor} = props;
    return(
       
            <button className="btn" onClick={showData} style={{backgroundColor:bgcolor,color:textColor}} >{buttonText}</button>
       
    );
}
export default Button;