import React, {useState} from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
    const [expenses, setExpenses ] = useState(Dummy_Expenses)

  function handleAddExpense(newExpenseData) {
    setExpenses(prevState => {
      return [newExpenseData, ...prevState]
    })
     console.log(expenses)
 /*   const addedExpenses = {
      id: newExpenseData.id,
      title: newExpenseData.enteredTitle,
      amount: newExpenseData.enteredAmount,
      date: newExpenseData.enteredDate
    }
    expenses.push(addedExpenses);
    console.log(expenses); 
  */
  }

  return (
    <div> 
      <NewExpense addExpense={handleAddExpense}/>
      <Expenses expenses={expenses}/> 
    </div>
  );
}

export default App;
