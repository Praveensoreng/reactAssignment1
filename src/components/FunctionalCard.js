import'./FunctionalCard.css';


const Card = () =>{
    return(
        <div className="card">
            <h1>This is Created Using Functional Component</h1>
            <p>This is done using external CSS</p>
            <p style={{color:'blue'}}>This is done using inline CSS</p>
        </div>
    );
} 

export default Card;