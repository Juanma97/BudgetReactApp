import React, { useState } from 'react';
import Error from './Error'
import shortid from 'shortid';

const Form = ({saveExpense, saveCreateExpense}) => {

    const [name, saveName] = useState('');
    const [value, saveValue] = useState(0);
    const [error, saveError] = useState(false);


    const addExpense = e => {
        e.preventDefault();


        if(value < 10 || isNaN(value) || name.trim() === '') {
            saveError(true);
            return;
        }

        const expense = {
            name,
            value,
            id: shortid.generate()
        }

        saveExpense(expense);
        saveCreateExpense(true);

        saveName('');
        saveValue(0);
    }

    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? 
                <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" /> : 
                null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={value}
                    onChange={e => saveValue(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

export default Form; 