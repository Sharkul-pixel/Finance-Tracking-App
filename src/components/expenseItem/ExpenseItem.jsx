import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../expenseDate/ExpenseDate.jsx";
import Card from "../card/Card";

function ExpenseItem(props) {
 
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
