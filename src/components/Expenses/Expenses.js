import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');
    const onYearChangeHandler = (newYear) => {
        setSelectedYear(newYear);
        console.log(newYear);
    }

    const filteredExpense = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === selectedYear;
    });



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filteredYear={selectedYear} onYearChange={onYearChangeHandler}/>
                <ExpensesList items={filteredExpense}></ExpensesList>
            </Card>
        </div>
    );

}

// function Expenses(props) {
//     const [selectedYear, setSelectedYear] = useState('2019');
//     const onYearChangeHandler = (newYear) => {
//         setSelectedYear(newYear);
//         console.log(newYear);
//     }
//     return (
//         <div>
//             <Card className="expenses">
//                 <ExpensesFilter filteredYear={selectedYear} onYearChange={onYearChangeHandler}/>
//                 {props.items.map((expense) => (
//                     <ExpensesItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
//             </Card>
//         </div>
//     );
// }

export default Expenses;