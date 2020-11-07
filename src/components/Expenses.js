import React from 'react';
import Expense from './Expense'

const Expenses = ({expenses}) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {expenses.map(expense => (
                <Expense 
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    );
}

export default Expenses;