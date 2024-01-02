import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from '../expenseForm/ExpenseForm'
import Card from '../card/Card'
function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  function handleData(formData){
    //console.log(formData);
    const data = {
      id: Math.random().toString(),
      ...formData     
      /*
      title: formData.enteredTitle,
      amount: formData.enteredAmount,
      date: formData.EnteredDate 
      */
    }
   // console.log(data)
    props.addExpense(data);
    setAddNewExpense(prev => !prev);
  }

  function addNewExpenseFunc(){
    setAddNewExpense(prev => !prev);
  }

  function cancelAddExpense() {
    setAddNewExpense(prev => !prev);
  }

  return (
    <Card className='new-expense'>
      {!addNewExpense && <button onClick={addNewExpenseFunc}>Add New Expense</button>}
      {addNewExpense && <ExpenseForm dataForm={handleData} cancelForm={cancelAddExpense}/>}
    </Card>
  )
}


export default NewExpense;