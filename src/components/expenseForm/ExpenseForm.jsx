import React, {useState} from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  function inputChange(e){
    const {name, value} = e.target;
//  console.log(e)
    setUserInput(prev => {
      return {...prev, [name]: value}
    })
  }
 
 /* 
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('');

  function handleTitle(e){
    const titleValue = e.target.value;
    setTitle(titleValue);
  }

  function handleAmount(e) {
    const amountValue = e.target.value;
    setAmount(amountValue);
  }

  function handleDate(e){
    const dateValue = e.target.value;
    setDate(dateValue);
  } 
*/
  function handleSubmit(e){
    e.preventDefault();

    const expenseUserInput = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.dataForm(expenseUserInput)
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

    return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input name='enteredTitle' type='text' onChange={inputChange} value={userInput.enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input name='enteredAmount' type='number' min='0.01' step='0.01' onChange={inputChange} value={userInput.enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input name='enteredDate' type='date' min='01-01-2023' max='12-31-2030' onChange={inputChange} value={userInput.enteredDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.cancelForm}>Cancel</button>
        <button /* onClick={handleSubmit} */ type='submit'>Add Expense</button>
      </div>
    </form>
    )
};

export default ExpenseForm;