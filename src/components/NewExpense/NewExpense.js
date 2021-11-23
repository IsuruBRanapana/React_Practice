import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandle = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);

    }
    const onStartEditingHandler = () => {
        setIsEditing(true);
    }

    const onStopEditingHandler = () => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={onStartEditingHandler}>Add new Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} onCancel={onStopEditingHandler}/>}
    </div>
}

export default NewExpense;