import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);

    const [budgetValue, setBudgetValue] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const triggerEvent = (inputValue) => {
        if (/^\d*$/.test(inputValue)) {
            if (inputValue <= 20000) {
                if (inputValue >= totalExpenses) {
                    dispatch({
                        type: 'SET_BUDGET',
                        payload: inputValue,
                    });
                    setBudgetValue(inputValue);
                } else {
                    alert("You cannot reduce the budget value lower than the spending  £" + totalExpenses);
                    setBudgetValue(budget);
                }
            } else {
                alert("The value cannot exceed  £20000");
                setBudgetValue(20000);
            }
        } else {
            setBudgetValue(budget);
        }
    };


    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <span>Budget: {currency}</span>
            <div>
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budgetValue}
                    onChange={(event) => triggerEvent(event.target.value)}>
                </input>
            </div>
        </div>
    );
};

export default Budget;
