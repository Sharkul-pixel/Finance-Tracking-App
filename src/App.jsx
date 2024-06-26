import React, {useState} from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'New Shoes -> (Example)',
    amount: 200.00,
    date: new Date(2024, 4, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV -> (Example)', 
    amount: 150.00, 
    date: new Date(2024, 3, 12) },
  {
    id: 'e3',
    title: 'Car Insurance -> (Example)',
    amount: 250.00,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk -> (Example)',
    amount: 100.00,
    date: new Date(2024, 5, 12),
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
