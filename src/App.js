import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Car Insurance',
        amount: '234.90',
        date: new Date(2021, 3, 25)
    },
    {
        id: 'e2',
        title: 'Buy Car',
        amount: '2340.90',
        date: new Date(2021, 6, 25)
    },
    {
        id: 'e3',
        title: 'Car Service',
        amount: '149.00',
        date: new Date(2021, 10, 12)
    },
    {
        id: 'e4',
        title: 'Car Selling',
        amount: '3234.90',
        date: new Date(2021, 12, 12)
    }
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandle = (expenseData) => {
        setExpenses((prevExpenses) => {
                return [expenseData, ...prevExpenses];
            }
        );
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandle}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
