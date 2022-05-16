import React, {useState} from 'react';
import Button from './components/Button';
import FunctionalCard from './components/FunctionalCard';
import ClassCard from './components/ClassCard';
import './App.css';

function App() {
  const [Show, setShow] = useState(false);
  
  
  function showCard(){
    setShow(!Show);
  }
 
  return (
   <div className="container">
      <h1 className="title">Styling Using Functional and Class Component</h1>

      <section className='button_container'>
      <Button buttonText="To See Styling in Functional Component" showData={showCard} bgcolor="green" textColor="white"/>
      <Button buttonText="To See Styling in Class Component" showData={showCard} bgcolor="red" textColor="white"/>
      </section>

      <section className='card_container'>
        {Show ? <FunctionalCard/>: null }
        {Show ? <ClassCard/>: null }

        
      </section>
    
   </div>
  );
}

export default App;
