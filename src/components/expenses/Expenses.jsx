import React, {useState} from "react";
import ExpenseList from "../expenseList/ExpenseList";
import './Expenses.css';
import Card from '../card/Card';
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import ExpensesChart from '../expensesChart/ExpensesChart';

function Expenses(props) {
  // console.log(props.expenses)
  const[year, setYear] = useState('2020')

  function FilteredYearData(selectedYear) {
      setYear(selectedYear);
  }

 const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  })
/*
  props.expenses.filter(expense => expense.date.getFullYear() === parseInt(year))
  TURN getFullYear TO STRING OR year TO AN INTEGER
*/

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter name={year} filterYear={FilteredYearData}/>
        <ExpensesChart expenses ={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses}/>
      </Card>
    </div>    
  )
}



export default Expenses;