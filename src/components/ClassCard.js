import React from "react";
import './FunctionalCard.css'
class ClassCard extends React.Component {
    render() {
      return (
      <div className="classCard">
           <h1>This is Created Using Class Component</h1>
           <p>This is done using external CSS</p>
           <p style={{color:'blue'}}>This is done using inline CSS</p>
      </div>
      );
    }
  }
  export default ClassCard;
