import "../../componentesStyle/UI/ExpenseItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"
function ExpenseItem(props) {

  const [title, setTitle] = useState(props.item.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item}/>
      <div className="expense-item__description">
        <h2 className="title-item">{props.item.title}</h2>
        <p className="expense-item__price">${props.item.amount}</p>
      </div>
     </Card>
  );
}

export default ExpenseItem;
