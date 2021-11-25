import React, {useState, useEffect} from 'react';
import './App.css';
import CounterComponent from './CounterComponent';
import CardComponent from './CardComponent';

function App({counterComponent}) {
  const [alltoggle, setToggleCounterComponent] = useState(true);
  // const [toggleCard, setToggleCard] = useState(true);
  const sum= (a,b)=>{
    return a+b;
  }
  
  const toggleComponent = (valueFromChild) => {
    setToggleCounterComponent(!valueFromChild);
  }
  
  return (
    
    <div className="App" >
      {alltoggle?<>
        <CardComponent heading="App Component" subheading="Home component" 
        description="This is the home component after index.js page" 
        toggleFunctionality={()=> toggleComponent()}/>
      This is {counterComponent} component<br/>
      The sum is{sum(3,4)}<br/>
      {/* <CardComponent /> */}
      <CounterComponent componentName="Functional"
      toggleFunctionality={()=> toggleComponent()}/> </>:<>allgone</>}
      {/* <button onClick={()=>setToggleCounterComponent}>wash</button> */}
    </div>
  );
}

export default App;
