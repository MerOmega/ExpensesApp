import "../../componentesStyle/UI/ExpenseItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"
function ExpenseItem(props) {

  const [title, seTitle] = useState(props.item.title);
  const clickResponse= ()=>{
    seTitle("Updated");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item}/>
      <div className="expense-item__description">
        <h2 className="title-item">{title}</h2>
        <p className="expense-item__price">${props.item.amount}</p>
      </div>
      <button className="btn btn-light" onClick={clickResponse }>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
