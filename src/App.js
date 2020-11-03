import React, { useState } from 'react'
import Ask from './components/Ask'
import Form from './components/Form'

function App() {

  const [budget, saveBudget] = useState(0);
  const [rest, saveRest] = useState(0);

  const[showAsk, updateAsk] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {showAsk ? (
          <Ask 
            saveBudget={saveBudget}
            saveRest={saveRest}
            updateAsk={updateAsk}
          />) :
           (
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
  
              <div className="one-half column">
                
              </div>
            </div>) }
        </div>
      </header>
    </div>
  );
}

export default App;
