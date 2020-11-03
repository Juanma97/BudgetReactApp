import React, { useState, useEffect } from 'react'
import Ask from './components/Ask'
import Form from './components/Form'
import Expenses from './components/Expenses'
import ControlBudget from './components/ControlBudget'

function App() {

  const [budget, saveBudget] = useState(0);
  const [rest, saveRest] = useState(0);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const[showAsk, updateAsk] = useState(true);
  const [createExpense, saveCreateExpense] = useState(false);


  useEffect(() => {
    if(createExpense){
      saveExpenses([...expenses, expense])

      const budgetRest = rest - expense.value;
      saveRest(budgetRest);
    }

    saveCreateExpense(false);
    
  }, [expense])

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
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
  
              <div className="one-half column">
                <Expenses 
                  expenses={expenses}
                />
                <ControlBudget
                  budget={budget}
                  rest={rest}
                />
              </div>
            </div>) }
        </div>
      </header>
    </div>
  );
}

export default App;
