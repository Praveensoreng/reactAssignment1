import React, {useState} from 'react';
import Button from './components/Button';
import FunctionalCard from './components/FunctionalCard';
import ClassCard from './components/ClassCard';
import './App.css';

function App() {
  const [Show, setShow] = useState(false);
  const [display, setdisplay] = useState(false);
  function showCard(){
    setShow(!Show);
  }
  function displayCard(){
    setdisplay(!display);
  }
 
  return (
   <div className="container">
      <h1 className="title">Styling Using Functional and Class Component</h1>

      <section className='button_container'>
      <Button buttonText="To See Styling in Functional Component" showData={showCard} bgcolor="#A933FF " textColor="white"/>
      <Button buttonText="To See Styling in Class Component" showData={displayCard} bgcolor="#FF336F " textColor="white"/>
      </section>

      <section className='card_container'>
        {Show ? <FunctionalCard/>: null }
        {display ? <ClassCard/>: null }

        
      </section>
    
   </div>
  );
}

export default App;


