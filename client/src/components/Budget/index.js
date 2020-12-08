import React from 'react';
import InputBudget from '../InputBudget';
import InputExpenses from '../InputExpenses';
import DisplayBudget from '../DisplayBudget';

const Budget = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <InputBudget />
                <InputExpenses />
            </div>
            <div className="col-lg-8">
                <DisplayBudget />
            </div>
        </div>
       
    )
}

export default Budget