import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [selectedCurrency, setSelectedCurrency] = useState(getCompleteCurrency(currency));

    const triggerEvent = (event) => {
        const selectedValue = event.target.value;
      
        const options = event.target.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === "0") {
            options[i].selected = true;
            break;
          }
        }
      
        dispatch({
          type: 'CHG_CURRENCY',
          payload: selectedValue,
        });
        setSelectedCurrency(getCompleteCurrency(selectedValue));
      };
      

    function getCompleteCurrency(moneda) {
        switch (moneda) {
            case '$':
                return 'Currency ($ Dollar)';
            case '£':
                return 'Currency (£ Pound)';
            case '€':
                return 'Currency (€ Euro)';
            case '₹':
                return 'Currency (₹ Ruppee)';
        }
    }

    return (
        <select
            className="alert alert-success"
            defaultValue={"0"}
            onChange={(event) => triggerEvent(event)}
            style={{ backgroundColor: '#93e499', color: 'white' }}>

            <option disabled hidden value="0">{selectedCurrency}</option>
            <option style={{ color: 'black' }} value="$">$ Dollar</option>
            <option style={{ color: 'black' }} value="£">£ Pound</option>
            <option style={{ color: 'black' }} value="€">€ Euro</option>
            <option style={{ color: 'black' }} value="₹">₹ Ruppee</option>

        </select>
    );
};

export default Currency;