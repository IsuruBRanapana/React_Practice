import React, {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle :'',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleInputHandler = (event) => {
        ///-------------------------alternative 1 ------------------///
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // });
        ///-------------------------alternative 2 ------------------///
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle : event.target.value,
        //     }
        // });
        ///-------------------------alternative 3 ------------------///
        setEnteredTitle(event.target.value)
    }

    const amountInputHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredAmount  : event.target.value,
        //     }
        // });
        setEnteredAmount(event.target.value)
    }

    const dateInputHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate  : event.target.value,
        //     }
        // });
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleInputHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step='0.01' value={enteredAmount} onChange={amountInputHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateInputHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;