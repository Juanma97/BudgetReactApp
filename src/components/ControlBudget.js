import React, { Fragment } from 'react';

const ControlBudget = ({budget, rest}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget} €
            </div>
            <div className="alert">
                Restante: {rest} €
            </div>
        </Fragment>
    );
}

export default ControlBudget;