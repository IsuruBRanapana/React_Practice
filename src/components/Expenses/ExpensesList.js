import ExpensesItem from "./ExpensesItem";
import React from "react";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    ;
    return (<ul className='expenses-list'>
        {props.items.map((x) => (
            <ExpensesItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>))};
    </ul>)
}

export default ExpensesList;