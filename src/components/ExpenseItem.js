import React, { useContext } from 'react';
import { TiPlus, TiMinus, TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const modifyAllocation = (name, valor) => {
        const expense = {
            name: name,
            cost: valor,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button onClick={(event) => modifyAllocation(props.name, 10)} style={{ backgroundColor: 'green', borderRadius: '50%', color: 'white', border: 'none', padding: '0.5rem' }}><TiPlus size='1.5em' /></button></td>
            <td><button onClick={(event) => modifyAllocation(props.name, -10)} style={{ backgroundColor: 'red', borderRadius: '50%', color: 'white', border: 'none', padding: '0.5rem' }}><TiMinus size='1.5em' /></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
