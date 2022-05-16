import './App.css';
import React, { useState, useEffect } from 'react';
import Button from './Components/Button';
import FactViewer from './Components/FactViewer';
import Header from './Components/Header';

function App() {
  const [catFacts, setNewFacts] = useState([]);
  const [place, setPlace] = useState(0);

  useEffect(() => {
    
    const getNewCatsFacts = async () => {
      const response = await fetch("https://cat-fact.herokuapp.com/facts");
      const facts = await response.json();
      setNewFacts(facts);
    };
    getNewCatsFacts();
    
  }, []);

  const prevFact = (event) => {
    event.preventDefault();

    let counter = place - 1;
    if (counter < 0) {
      counter = catFacts.length - 1;
    }
    setPlace(counter);  
  };

  const nextFact = (event) => {
    event.preventDefault();

    let counter = place + 1;

    if (counter === catFacts.length) {
      counter = 0;
    } 
    setPlace(counter);  
  };

 
  return (
    <div className="App">
      <Header />
      <div className="fact-warpper">
        { catFacts.length && <FactViewer fact={catFacts[place].text}/>}
        <div className="button-container">
          <Button handleSubmit={prevFact}>&lt; Prev</Button>
          <Button handleSubmit={nextFact}>Next &gt;</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
